
export interface IRes {
  failedPanicTest: boolean;
  damageFromPanic: number;
  damageFromAttackOnly: number;
  totalWounds: number;
  sixes: number;
}

export interface IDefender {
  def: number;
  morale: number;
}

export interface IAttacker {
  pointCost: number;
  diceCount: number;
  toHit: number;
  autoHits: number;
  modifyDamageOnFailedPanictest: number;
  modifyDefenderPanicTest: number;
  reroll: boolean;
  fish: boolean;
  weakened: boolean;
  vulnerable: boolean;
  panicked: boolean;
  sundering: boolean;
  critBlow: boolean;
  precision: boolean;
  noDefenseRolls: boolean;
}