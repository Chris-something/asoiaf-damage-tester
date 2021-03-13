import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { startWith } from 'rxjs/operators';
import { Subject } from 'rxjs';
import {IAttacker} from "../interfaces";

@Component({
    selector: 'app-attacker-settings-small',
    templateUrl: './attacker-settings.component.html',
    styleUrls: ['./attacker-settings.component.css'],
    encapsulation: ViewEncapsulation.None,
})
export class AttackerSettingsSmallComponent implements OnInit {
    diceCount: FormControl = new FormControl(7);
    toHit: FormControl = new FormControl(4);
    modifyDamageOnFailedPanictest: FormControl = new FormControl(0);
    modifyDefenderPanicTest: FormControl = new FormControl(0);
    autoHits: FormControl = new FormControl(0);

    noDefenseRolls: FormControl = new FormControl(false);

    weakened: FormControl = new FormControl(false);
    vulnerable: FormControl = new FormControl(false);
    panicked: FormControl = new FormControl(false);

    sundering: FormControl = new FormControl(false);
    critBlow: FormControl = new FormControl(false);
    precision: FormControl = new FormControl(false);
    pointCost: FormControl = new FormControl(0);



    reroll: FormControl = new FormControl(false);

    attackerForm: FormGroup = new FormGroup({
        diceCount: this.diceCount,
        toHit: this.toHit,
        autoHits: this.autoHits,
        weakened: this.weakened,
        vulnerable: this.vulnerable,
        panicked: this.panicked,
        sundering: this.sundering,
        critBlow: this.critBlow,
        precision: this.precision,
        noDefenseRolls: this.noDefenseRolls,
        reroll: this.reroll,
        modifyDamageOnFailedPanictest: this.modifyDamageOnFailedPanictest,
        modifyDefenderPanicTest: this.modifyDefenderPanicTest,
        pointCost: this.pointCost,
    });

    @Input() attackerSubject$: Subject<IAttacker>;
    private full$ = this.attackerForm.valueChanges.pipe(startWith(this.attackerForm.value));

    constructor() {}

    ngOnInit(): void {
        this.full$.subscribe((val) => this.attackerSubject$.next(val));
    }
}
