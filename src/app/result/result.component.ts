import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable, Subject } from 'rxjs';
import { debounceTime, filter, map, share, switchMap } from 'rxjs/operators';
import { HistogrammService } from '../histogramm.service';
import { IAttacker, IDefender, IRes } from '../interfaces';

@Component({
    selector: 'app-result',
    templateUrl: './result.component.html',
    styleUrls: ['./result.component.css'],
})
export class ResultComponent implements OnInit {
    @Input() attacker$: Observable<IAttacker>;
    @Input() defender$: Observable<IDefender>;

    @Input() maxX$: BehaviorSubject<number>;
    @Input() maxY$: BehaviorSubject<number>;

    amountOfIterations = 300000;

    iteration$: Observable<IRes[]>;
    wounds$: Observable<number>;
    defenderWounds$: Observable<number>;
    attacksWithZeroWounds$: Observable<number>;
    panicTestsFailed$: Observable<number>;
    maxWounds$: Observable<number>;
    sixes$: Observable<number>;
    successes$: Observable<number>;
    wipes$: Observable<Observable<number>>;

    distribution$: Observable<{ wounds: number; count: number }[]>;
    maxDistribution$: Observable<number>;
    woundsPerPoint$: Observable<number>;

    constructor(private histogrammService: HistogrammService) {}

    ngOnInit(): void {
        this.iteration$ = this.iterate();
        this.defenderWounds$ = this.defenderWounds();
        this.wounds$ = this.avgWounds();
        this.maxWounds$ = this.maxWounds();
        this.sixes$ = this.sixes();
        this.successes$ = this.successes();
        this.wipes$ = this.maxWoundsProp();
        this.attacksWithZeroWounds$ = this.attacksWithZeroWounds();
        this.panicTestsFailed$ = this.panicTestsFailed();
        this.distribution$ = this.getDistribution();
        this.maxDistribution$ = this.getDistributionMax();
        this.woundsPerPoint$ = this.getWoundsPerPoint();
        this.maxDistribution$.subscribe((m) => this.maxY$.next(m));
        this.distribution$.subscribe((d) => this.maxX$.next(d.length));
    }

    iterate(): Observable<IRes[]> {
        let worker;
        if (typeof Worker !== 'undefined') {
            worker = new Worker(new URL('../app.worker', import.meta.url), { type: 'module' });
        } else {
            alert('Your Browser isn´t supporting Web-Workers');
        }
        return combineLatest([this.attacker$.pipe(filter((_) => !!_)), this.defender$.pipe(filter((_) => !!_))]).pipe(
            debounceTime(300),
            switchMap(([attacker, defender]) => {
                const subject: Subject<IRes[]> = new Subject<IRes[]>();

                if (worker) {
                    worker.onmessage = ({ data }) => {
                        subject.next(data);
                    };
                    worker.postMessage({ iterations: this.amountOfIterations, attacker, defender });
                }
                return subject.asObservable();
            }),
            share()
        );
    }

    private getWoundsPerPoint() {
        return combineLatest([this.attacker$.pipe(filter((_) => !!_)), this.wounds$]).pipe(
            map(([attacker, wounds]) => {
                return attacker.pointCost > 0 ? wounds / attacker.pointCost : 0;
            })
        );
    }

    private getAverage(arr : number[]) {
        let average = arr.reduce((a, b) => a + b) / arr.length;
        return average;
    }

    private getMax(arr : number[]) {
        let len = arr.length;
        let max = -Infinity;

        while (len--) {
            max = arr[len] > max ? arr[len] : max;
        }
        return max;
    }

    getDistributionMax() {
        return this.distribution$.pipe(
            map((distr) => {
                return Math.max(...distr.map((d) => d.count));
            })
        );
    }

    getDistribution() {
        return combineLatest([this.iteration$, this.maxWounds$]).pipe(
            debounceTime(100),
            map(([res, maxWounds]) => {
                const dist = this.arrayFromLength(maxWounds + 1);
                const returnThis = dist.reduce((prev, curr) => {
                    return [
                        ...prev,
                        {
                            wounds: curr,
                            count: res.filter((r) => r.totalWounds === curr).length,
                        },
                    ];
                }, []);
                // this.maxDistribution = Math.max(...returnThis.map(d => d.count));
                return returnThis;
            })
        );
    }

    defenderWounds(): Observable<number> {
        // return this.defender$.subscribe(x => x.wounds);
        return this.defender$.pipe(map((def) => {return def.defenderWounds}));
    }

    sixes(): Observable<number> {
        return this.iteration$.pipe(
            map((results) => {
                const flat = results.map((r) => r.sixes);
                 return this.getAverage(flat);
            })
        );
    }

    successes(): Observable<number> {
        return this.iteration$.pipe(
            map((results) => {
                const flat = results.map((r) => r.successes);
                 return this.getAverage(flat);
            })
        );
    }

    maxWounds(): Observable<number> {
        return this.iteration$.pipe(
            map((results) => {
                const flat = results.map((r) => r.totalWounds);
                return this.getMax(flat);
            })
        );
    }

    maxWoundsProp(): Observable<Observable<number>> {
        return this.iteration$.pipe(
            map((results) => {
                return this.defender$.pipe(map((r2) => {
                    const sum = results.filter((r) => r.totalWounds >= r2.defenderWounds).length;
                    return (sum / this.amountOfIterations) * 100;
                }))
            })
        );
    }

    attacksWithZeroWounds(): Observable<number> {
        return this.iteration$.pipe(
            map((results) => {
                const sum = results.filter((r) => r.totalWounds === 0).length;
                return (sum / this.amountOfIterations) * 100;
            })
        );
    }

    panicTestsFailed(): Observable<number> {
        return this.iteration$.pipe(
            map((results) => {
                const sum = results.filter((r) => r.damageFromPanic > 0).length;
                const testsMade = results.filter((r) => r.damageFromAttackOnly > 0).length;
                return (sum / testsMade) * 100;
            })
        );
    }

    avgWounds(): Observable<number> {
        return this.iteration$.pipe(
            map((results) => {
                const sum = results.reduce((prev, cur) => prev + cur.totalWounds, 0);
                return sum / this.amountOfIterations;
            })
        );
    }
    private arrayFromLength(length: number): Array<number> {
        return Array.from(Array(length).keys());
    }
}
