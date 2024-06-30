import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { startWith } from 'rxjs/operators';
import { Subject } from 'rxjs';
import {IDefender} from "../interfaces";

@Component({
    selector: 'app-defender-settings',
    templateUrl: './defender-settings.component.html',
    styleUrls: ['./defender-settings.component.css'],
    encapsulation: ViewEncapsulation.None,
})
export class DefenderSettingsComponent implements OnInit {
    morale: UntypedFormControl = new UntypedFormControl(6);
    def: UntypedFormControl = new UntypedFormControl(4);

    defenderForm: UntypedFormGroup = new UntypedFormGroup({
        morale: this.morale,
        def: this.def,
    });

    @Input() defenderSubject$: Subject<IDefender>;
    private full$ = this.defenderForm.valueChanges.pipe(startWith(this.defenderForm.value));

    constructor() {}

    ngOnInit(): void {
        this.full$.subscribe((val) => this.defenderSubject$.next(val));
    }
}
