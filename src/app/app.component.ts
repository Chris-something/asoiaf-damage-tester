import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { HistogrammService } from './histogramm.service';

export interface IDefender {
    def: number;
    morale: number;
}

export interface IAttacker {
    diceCount: number;
    toHit: number;
    extradDamageOnFailedPanictest: number;
    reroll: boolean;
    weakened: boolean;
    vulnerable: boolean;
    panicked: boolean;
    sundering: boolean;
    critBlow: boolean;
    vicious: boolean;
    precision: boolean;
}

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
    combineView = false;

    attackerSubject1$: BehaviorSubject<IAttacker> = new BehaviorSubject<IAttacker>(null);
    attackerSubject2$: BehaviorSubject<IAttacker> = new BehaviorSubject<IAttacker>(null);
    defenderSubject$: BehaviorSubject<IDefender> = new BehaviorSubject<IDefender>(null);

    constructor(public histogrammService: HistogrammService) {}
    ngOnInit() {}
}
