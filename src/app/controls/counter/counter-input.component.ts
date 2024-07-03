import { Component, forwardRef, Input, OnChanges } from '@angular/core';
import { FormControl, ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';

export function createCounterRangeValidator(maxValue, minValue) {
    return (c: FormControl) => {
        let err = {
            rangeError: {
                given: c.value,
                max: maxValue || 10,
                min: minValue || 0,
            },
        };

        return c.value > +maxValue || c.value < +minValue ? err : null;
    };
}

@Component({
    selector: 'app-counter-input',
    styleUrls: ['./counter-input.scss'],
    template: `
        <div class="counter-input" [ngClass]="{'counter-input--small': small}">
            <button class="counter-input__button" (click)="decrease()">-</button><span class="counter-input__value"> {{ counterValue }}</span>
            <button class="counter-input__button" (click)="increase()">+</button>
        </div>
    `,
    providers: [
        { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => CounterInputComponent), multi: true },
        { provide: NG_VALIDATORS, useExisting: forwardRef(() => CounterInputComponent), multi: true },
    ],
})
export class CounterInputComponent implements ControlValueAccessor, OnChanges {
    propagateChange: any = () => {};
    validateFn: any = () => {};

    @Input('counterValue') _counterValue = 0;
    @Input() counterRangeMax;
    @Input() counterRangeMin;
    @Input() small = false;

    get counterValue() {
        return this._counterValue;
    }

    set counterValue(val) {
        this._counterValue = val;
        this.propagateChange(val);
    }

    ngOnChanges(inputs) {
        if (inputs.counterRangeMax || inputs.counterRangeMin) {
            this.validateFn = createCounterRangeValidator(this.counterRangeMax, this.counterRangeMin);
            this.propagateChange(this.counterValue);
        }
    }

    writeValue(value) {
        if (value) {
            this.counterValue = value;
        }
    }

    registerOnChange(fn) {
        this.propagateChange = fn;
    }

    registerOnTouched() {}

    increase() {
        if (this.counterValue < this.counterRangeMax) {
          this.counterValue++;
        }
    }

    decrease() {
      if (this.counterValue > this.counterRangeMin) {
        this.counterValue--;
      }
    }

    validate(c: FormControl) {
        return this.validateFn(c);
    }
}
