import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
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
    diceCount: UntypedFormControl = new UntypedFormControl(7);
    toHit: UntypedFormControl = new UntypedFormControl(4);
    modifyDamageOnFailedPanictest: UntypedFormControl = new UntypedFormControl(0);
    modifyDefenderPanicTest: UntypedFormControl = new UntypedFormControl(0);
    autoHits: UntypedFormControl = new UntypedFormControl(0);

    noDefenseRolls: UntypedFormControl = new UntypedFormControl(false);

    weakened: UntypedFormControl = new UntypedFormControl(false);
    vulnerable: UntypedFormControl = new UntypedFormControl(false);
    panicked: UntypedFormControl = new UntypedFormControl(false);

    sundering: UntypedFormControl = new UntypedFormControl(false);
    critBlow: UntypedFormControl = new UntypedFormControl(false);
    precision: UntypedFormControl = new UntypedFormControl(false);
    pointCost: UntypedFormControl = new UntypedFormControl(0);



    reroll: UntypedFormControl = new UntypedFormControl(false);
    fish: UntypedFormControl = new UntypedFormControl(false);

    attackerForm: UntypedFormGroup = new UntypedFormGroup({
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
        fish: this.fish,
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
