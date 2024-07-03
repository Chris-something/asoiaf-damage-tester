import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
    morale: FormControl = new FormControl(6);
    def: FormControl = new FormControl(4);
    defenderWounds: FormControl = new FormControl(12);

    defenderForm: FormGroup = new FormGroup({
        morale: this.morale,
        def: this.def,
        defenderWounds: this.defenderWounds
    });

    @Input() defenderSubject$: Subject<IDefender>;
    private full$ = this.defenderForm.valueChanges.pipe(startWith(this.defenderForm.value));

    constructor() {}

    ngOnInit(): void {
        this.full$.subscribe((val) => this.defenderSubject$.next(val));
    }
}
