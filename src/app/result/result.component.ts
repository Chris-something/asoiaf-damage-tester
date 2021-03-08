import {Component, Input, OnInit} from '@angular/core';
import {combineLatest, Observable, Subject} from "rxjs";
import {IAttacker, IDefender} from "../app.component";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  @Input() attacker$: Observable<IAttacker>;
  @Input() defender$: Observable<IDefender>;

  amountOfIterations = 200000;
  private iterationArray = this.arrayFromLength(this.amountOfIterations);

  wounds$;

  constructor() { }

  ngOnInit(): void {
    this.wounds$ = this.avg();
  }

  avg(): Observable<number> {
    return this.iterate().pipe(map(results => {
      const sum = results.reduce((prev, cur) => prev + cur, 0);
      return sum / this.amountOfIterations;
    }));
  }

  iterate(): Observable<number[]> {
    return combineLatest([this.attacker$, this.defender$]).pipe(map(([attacker, defender]) => {
      return this.iterationArray.map(_ => this.getWounds(attacker, defender))
    }));
  }

  getWounds(attacker, defender): number {
    let attackDice = this.rollSequenceD6(attacker.diceCount);

    attackDice = attacker.reroll ? this.reroll(attackDice, attacker.toHit) : attackDice; // reroll
    attackDice = attacker.weakened ? this.reroll(attackDice, attacker.toHit, false) : attackDice; // weakened

    const toDefend = this.toDefend(attackDice, attacker);
    const precisionWounds = this.precisionWounds(attackDice, attacker);

    let defDice = this.rollSequenceD6(toDefend);
    const defence = attacker.sundering ? defender.def + 1 : defender.def;
    defDice = defender.vulnerable ? this.reroll(defDice, defence, false): defDice;
    const successfulDefended = this.successfulDefended(defDice, defence);

    const totalWounds = toDefend - successfulDefended + precisionWounds;
    return totalWounds > 0 ? totalWounds + this.getPanicDamage(defender, attacker) : 0;
  }

  getPanicDamage(defender: IDefender, attacker: IAttacker): number {

    const targetMorale = attacker.vicious ? Math.min(defender.morale + 2, 12) : defender.morale;

    let res1 = this.d(6);
    let res2 = this.d(6);
    if (defender.panicked && res1 + res2 >= targetMorale) {
      res1 = res1 > targetMorale / 2 ? this.d(6) : res1;
      res2 = res2 > targetMorale / 2 ? this.d(6) : res2;
    }
    return res1 + res2 < targetMorale ? (this.d(3) + attacker.extradDamageOnFailedPanictest) : 0;
  }

  private successfulDefended(sequence: number[], target): number {
    return sequence.filter(r => r >= target).length;
  }

  private precisionWounds(sequence: number[], attacker: IAttacker): number {
    const sixes = sequence.filter(r => r === 6).length;
    return attacker.precision ? sixes : 0;
  }

  private toDefend(sequence: number[], attacker: IAttacker): number {
    const hitsWithoutSixes = sequence.filter(r => r >= attacker.toHit && r !== 6).length;
    const sixes = sequence.filter(r => r === 6).length;
    if (!attacker.critBlow || (attacker.critBlow && attacker.precision)) {
      return hitsWithoutSixes + sixes;
    } else {
      return hitsWithoutSixes + ( sixes * 2 );
    }
  }

  private reroll(sequence: number[], target, misses = true): Array<number> {
    return  sequence.map(orig => {
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
    return  this.arrayFromLength(length).map(_ => this.d(6));
  }

  private arrayFromLength(length: number): Array<number> {
    return  Array.from(Array(length).keys());
  }

  private d(sides: number): number {
    return 1 + Math.floor(Math.random() * sides);
  }

}
