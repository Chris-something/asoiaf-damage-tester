import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable, Subject } from 'rxjs';
import { IAttacker, IDefender } from '../app.component';
import { debounceTime, map, share } from 'rxjs/operators';
import { HistogrammService } from '../histogramm.service';

interface IRes {
    failedPanicTest: boolean;
    damageFromPanic: number;
    damageFromAttackOnly: number;
    totalWounds: number;
}

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

    amountOfIterations = 250000;
    private iterationArray = this.arrayFromLength(this.amountOfIterations);

    iteration$: Observable<IRes[]>;
    wounds$: Observable<number>;
    attacksWithZeroWounds$: Observable<number>;
    panicTestsFailed$: Observable<number>;
    maxWounds$: Observable<number>;
    whipes$: Observable<number>;

    distribution$: Observable<{ wounds: number; count: number }[]>;
    maxDistribution$: Observable<number>;
    maxDistribution: number;

    constructor(private histogrammService: HistogrammService) {}

    ngOnInit(): void {
        this.iteration$ = this.iterate();
        this.wounds$ = this.avgWounds();
        this.maxWounds$ = this.maxWounds();
        this.whipes$ = this.maxWoundsProp();
        this.attacksWithZeroWounds$ = this.attacksWithZeroWounds();
        this.panicTestsFailed$ = this.panicTestsFailed();
        this.distribution$ = this.getDistribution();
        this.maxDistribution$ = this.getDistributionMax();

        this.maxDistribution$.subscribe((m) => this.maxY$.next(m));
        this.distribution$.subscribe((d) => this.maxX$.next(d.length));

        this.histogrammService.combinedMaxForY$.subscribe((y) => (this.maxDistribution = y));
    }

    iterate(): Observable<IRes[]> {
        return combineLatest([this.attacker$, this.defender$]).pipe(
            debounceTime(400),
            map(([attacker, defender]) => {
                return this.iterationArray.map((_) => this.getWounds(attacker, defender));
            }),
            share()
        );
    }

    private getMax(arr) {
        let len = arr.length;
        let max = -Infinity;

        while (len--) {
            max = arr[len] > max ? arr[len] : max;
        }
        return max;
    }

    trackByWound(index, item) {
        return item.wounds;
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

    maxWounds(): Observable<number> {
        return this.iteration$.pipe(
            map((results) => {
                const flat = results.map((r) => r.totalWounds);
                return this.getMax(flat);
            })
        );
    }

    maxWoundsProp(): Observable<number> {
        return this.iteration$.pipe(
            map((results) => {
                const sum = results.filter((r) => r.totalWounds >= 12).length;
                return (sum / this.amountOfIterations) * 100;
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
    getWounds(attacker: IAttacker, defender: IDefender): IRes {
        let attackDice = this.rollSequenceD6(attacker.diceCount);

        attackDice = attacker.reroll ? this.reroll(attackDice, attacker.toHit) : attackDice; // reroll
        attackDice = attacker.weakened ? this.reroll(attackDice, attacker.toHit, false) : attackDice; // weakened

        const toDefend = this.toDefend(attackDice, attacker);
        const precisionWounds = this.precisionWounds(attackDice, attacker);

        let defDice = this.rollSequenceD6(toDefend);
        const defence = attacker.sundering ? defender.def + 1 : defender.def;
        defDice = attacker.vulnerable ? this.reroll(defDice, defence, false) : defDice;
        const successfullyDefended = this.successfulDefended(defDice, defence);

        const totalWounds = toDefend - successfullyDefended + precisionWounds;
        const panicDamageTheoretically = this.getPanicDamage(defender, attacker);
        const testFailed = panicDamageTheoretically > 0;
        const panicDamageReal = testFailed && totalWounds ? panicDamageTheoretically : 0;
        return {
            failedPanicTest: testFailed,
            damageFromAttackOnly: totalWounds,
            damageFromPanic: panicDamageReal,
            totalWounds: totalWounds + panicDamageReal,
        };
    }

    getPanicDamage(defender: IDefender, attacker: IAttacker): number {
        const targetMorale = attacker.vicious ? Math.min(defender.morale + 2, 12) : defender.morale;
        let res1 = this.d(6);
        let res2 = this.d(6);
        let pDamag = this.d(3);
        if (attacker.panicked && res1 + res2 >= targetMorale) {
            if (targetMorale >= 8) {
                res1 = res1 >= 4 ? this.d(6) : res1;
                res2 = res2 >= 4 ? this.d(6) : res2;
            } else {
                res1 = res1 > targetMorale / 2 ? this.d(6) : res1;
                res2 = res2 > targetMorale / 2 ? this.d(6) : res2;
            }

            pDamag = pDamag < 2 ? this.d(3) : pDamag;
        }
        const tototalDamage = Math.max(pDamag + attacker.extradDamageOnFailedPanictest, 0);
        return  res1 + res2 < targetMorale ? tototalDamage : 0;
    }

    private successfulDefended(sequence: number[], target): number {
        return sequence.filter((r) => r >= target).length;
    }

    private precisionWounds(sequence: number[], attacker: IAttacker): number {
        const sixes = sequence.filter((r) => r === 6).length;
        return attacker.precision ? sixes : 0;
    }

    private toDefend(sequence: number[], attacker: IAttacker): number {
        const hitsWithoutSixes = sequence.filter((r) => r >= attacker.toHit && r !== 6).length;
        const sixes = sequence.filter((r) => r === 6).length;
        if (!attacker.critBlow && attacker.precision) {
            return hitsWithoutSixes;
        } else if (!attacker.critBlow || (attacker.critBlow && attacker.precision)) {
            return hitsWithoutSixes + sixes;
        } else {
            return hitsWithoutSixes + sixes * 2;
        }
    }

    private reroll(sequence: number[], target, misses = true): Array<number> {
        return sequence.map((orig) => {
            let d = orig;
            if (misses && orig < target) {
                d = this.d(6);
            }
            if (!misses && orig >= target) {
                d = this.d(6);
            }
            return d;
        });
    }

    private rollSequenceD6(length: number): Array<number> {
        return this.arrayFromLength(length).map((_) => this.d(6));
    }

    private arrayFromLength(length: number): Array<number> {
        return Array.from(Array(length).keys());
    }

    private d(sides: number): number {
        return 1 + Math.floor(Math.random() * sides);
    }
}
