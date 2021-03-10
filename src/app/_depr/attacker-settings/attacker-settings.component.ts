import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { startWith } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { IAttacker } from '../../app.component';

@Component({
    selector: 'app-attacker-settings',
    templateUrl: './attacker-settings.component.html',
    styleUrls: ['./attacker-settings.component.css'],
    encapsulation: ViewEncapsulation.None,
})
export class AttackerSettingsComponent implements OnInit {
    diceCount: FormControl = new FormControl(7);
    toHit: FormControl = new FormControl(4);
    extradDamageOnFailedPanictest: FormControl = new FormControl(0);

    weakened: FormControl = new FormControl(false);
    vulnerable: FormControl = new FormControl(false);
    panicked: FormControl = new FormControl(false);

    sundering: FormControl = new FormControl(false);
    critBlow: FormControl = new FormControl(false);
    vicious: FormControl = new FormControl(false);
    precision: FormControl = new FormControl(false);

    reroll: FormControl = new FormControl(false);

    attackerForm: FormGroup = new FormGroup({
        diceCount: this.diceCount,
        toHit: this.toHit,
        weakened: this.weakened,
        vulnerable: this.vulnerable,
        panicked: this.panicked,
        sundering: this.sundering,
        critBlow: this.critBlow,
        vicious: this.vicious,
        precision: this.precision,
        reroll: this.reroll,
        extradDamageOnFailedPanictest: this.extradDamageOnFailedPanictest,
    });

    @Input() attackerSubject$: Subject<IAttacker>;
    private full$ = this.attackerForm.valueChanges.pipe(startWith(this.attackerForm.value));

    constructor() {}

    ngOnInit(): void {
        this.full$.subscribe((val) => this.attackerSubject$.next(val));
    }
}
