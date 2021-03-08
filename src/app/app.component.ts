import {Component, OnInit, ViewEncapsulation} from "@angular/core";
import {BehaviorSubject, Subject} from "rxjs";


export interface IDefender {
  def: number;
  morale: number;
  panicked: boolean;
  vulnerable: boolean;
}

export interface IAttacker {
  diceCount: number;
  toHit: number;
  extradDamageOnFailedPanictest: number;
  reroll: boolean;
  weakened: boolean;
  sundering: boolean;
  critBlow: boolean;
  vicious: boolean;
  precision: boolean;
}

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

  attackerSubject1$: BehaviorSubject<IAttacker> = new BehaviorSubject<IAttacker>(null);
  attackerSubject2$: BehaviorSubject<IAttacker> = new BehaviorSubject<IAttacker>(null);
  defenderSubject$: BehaviorSubject<IDefender> = new BehaviorSubject<IDefender>(null);

  ngOnInit() {
    this.defenderSubject$.subscribe(v => console.log('defenderSubject$', v));
    this.attackerSubject1$.subscribe(v => console.log('attackerSubject$', v));
    this.attackerSubject2$.subscribe(v => console.log('attackerSubject$', v));
  }

}
