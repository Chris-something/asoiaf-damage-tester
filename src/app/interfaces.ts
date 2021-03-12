
export interface IRes {
  failedPanicTest: boolean;
  damageFromPanic: number;
  damageFromAttackOnly: number;
  totalWounds: number;
}

export interface IDefender {
  def: number;
  morale: number;
}

export interface IAttacker {
  diceCount: number;
  toHit: number;
  modifyDamageOnFailedPanictest: number;
  modifyDefenderMorale: number;
  reroll: boolean;
  weakened: boolean;
  vulnerable: boolean;
  panicked: boolean;
  sundering: boolean;
  critBlow: boolean;
  // vicious: boolean;
  precision: boolean;
}