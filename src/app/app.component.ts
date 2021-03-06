import { Component, OnInit, VERSION } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { combineLatest, Observable } from "rxjs";
import { map, startWith } from "rxjs/operators";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  morale: FormControl = new FormControl(6);
  extraDamagePerFail: FormControl = new FormControl(0);
  panicked: FormControl = new FormControl(false);
  panicForm: FormGroup = new FormGroup({
    morale: this.morale,
    panicked: this.panicked,
    extraDamagePerFail: this.extraDamagePerFail
  });

  private amountOfIterations = 100000;
  private iterationArray = Array.from(Array(this.amountOfIterations).keys());
  private full$ = this.panicForm.valueChanges.pipe(
    startWith(this.panicForm.value)
  );

  private resRough$ = this.full$.pipe(
    map(
      (fullForm): boolean[] => {
        return this.iterationArray.map(c => {
          let res1 = this.d(6);
          let res2 = this.d(6);
          if (fullForm.panicked && res1 + res2 >= fullForm.morale) {
            res1 = res1 > fullForm.morale / 2 ? this.d(6) : res1;
            res2 = res2 > fullForm.morale / 2 ? this.d(6) : res2;
          }
          return res1 + res2 < fullForm.morale;
        });
      }
    )
  );

  res$ = this.res();
  dmg$ = this.dmg();

  dmgAvg = 2;
  dmgAvgPanicked = 7 / 3;

  private dmg() {
    return combineLatest([this.resRough$, this.full$]).pipe(
      map(
        ([results, form]): number => {
          const successes = results.filter(r => r).length;
          const damagePerFail =
            (form.panicked ? this.dmgAvgPanicked : this.dmgAvg) +
            form.extraDamagePerFail;
          return (successes * damagePerFail) / this.amountOfIterations;
        }
      )
    );
  }

  private res(): Observable<number> {
    return this.resRough$.pipe(
      map((resArray: boolean[]) => {
        const successesCount = resArray.filter(r => r).length;
        return (successesCount * 100) / resArray.length;
      })
    );
  }

  private d(sides: number): number {
    return 1 + Math.floor(Math.random() * sides);
  }

  ngOnInit() {}
}
