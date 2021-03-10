import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import {debounceTime, map} from 'rxjs/operators';

@Injectable()
export class HistogrammService {
    a_maxX$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
    a_maxY$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

    b_maxX$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
    b_maxY$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

    combinedMaxForX$: Observable<number> = combineLatest([this.a_maxX$, this.b_maxX$]).pipe(
        // debounceTime(20),
        map(([a, b]) => {
            return Math.max(a, b);
        })
    );
    combinedMaxForY$: Observable<number> = combineLatest([this.a_maxY$, this.b_maxY$]).pipe(
        // debounceTime(20),
        map(([a, b]) => {
            return Math.max(a, b);
        })
    );
}
