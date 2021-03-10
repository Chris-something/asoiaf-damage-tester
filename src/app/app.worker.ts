/// <reference lib="webworker" />

interface IDefender {
  def: number;
  morale: number;
}

interface IAttacker {
  diceCount: number;
  toHit: number;
  extradDamageOnFailedPanictest: number;
  reroll: boolean;
  weakened: boolean;
  vulnerable: boolean;
  panicked: boolean;
  sundering: boolean;
  critBlow: boolean;
  vicious: boolean;
  precision: boolean;
}

interface IRes {
  failedPanicTest: boolean;
  damageFromPanic: number;
  damageFromAttackOnly: number;
  totalWounds: number;
}

addEventListener('message', ({data}) => {
  const res = processWounds(data.iterations, data.attacker, data.defender);
  postMessage(res);
});

const successfulDefended = (sequence: number[], target): number => {
  return sequence.filter((r) => r >= target).length;
}

const  precisionWounds = (sequence: number[], attacker: IAttacker): number => {
  const sixes = sequence.filter((r) => r === 6).length;
  return attacker.precision ? sixes : 0;
}

const toDefend = (sequence: number[], attacker: IAttacker): number => {
  const hitsWithoutSixes = sequence.filter((r) => r >= attacker.toHit && r !== 6).length;
  const sixes = sequence.filter((r) => r === 6).length;
  if (!attacker.critBlow && attacker.precision) {
    return hitsWithoutSixes;
  } else if (!attacker.critBlow || (attacker.critBlow && attacker.precision)) {
    return hitsWithoutSixes + sixes;
  } else {
    return hitsWithoutSixes + sixes * 2;
  }
}

const rollSequenceD6 = (length: number): Array<number> => {
  return arrayFromLength(length).map((_) => d(6));
}

const arrayFromLength = (length: number): Array<number> => {
  return Array.from(Array(length).keys());
}

const d = (sides: number): number => {
  return 1 + Math.floor(Math.random() * sides);
}

const reroll = (sequence: number[], target, misses = true): Array<number> => {
  return sequence.map((orig) => {
    let _d = orig;
    if (misses && orig < target) {
      _d = d(6);
    }
    if (!misses && orig >= target) {
      _d = d(6);
    }
    return _d;
  });
}

const getWounds = (attacker: IAttacker, defender: IDefender): IRes => {
  let attackDice = rollSequenceD6(attacker.diceCount);

  attackDice = attacker.reroll ? reroll(attackDice, attacker.toHit) : attackDice; // reroll
  attackDice = attacker.weakened ? reroll(attackDice, attacker.toHit, false) : attackDice; // weakened

  const _toDefend = toDefend(attackDice, attacker);
  const _precisionWounds = precisionWounds(attackDice, attacker);

  let defDice = rollSequenceD6(_toDefend);
  const defence = attacker.sundering ? defender.def + 1 : defender.def;
  defDice = attacker.vulnerable ? reroll(defDice, defence, false) : defDice;
  const successfullyDefended = successfulDefended(defDice, defence);

  const totalWounds = _toDefend - successfullyDefended + _precisionWounds;
  const panicDamageTheoretically = getPanicDamage(defender, attacker);
  const testFailed = panicDamageTheoretically > 0;
  const panicDamageReal = testFailed && totalWounds ? panicDamageTheoretically : 0;
  return {
    failedPanicTest: testFailed,
    damageFromAttackOnly: totalWounds,
    damageFromPanic: panicDamageReal,
    totalWounds: totalWounds + panicDamageReal,
  };
}

const getPanicDamage = (defender: IDefender, attacker: IAttacker): number => {
  const targetMorale = attacker.vicious ? Math.min(defender.morale + 2, 12) : defender.morale;
  let res1 = d(6);
  let res2 = d(6);
  let pDamag = d(3);
  if (attacker.panicked && res1 + res2 >= targetMorale) {
    if (targetMorale >= 8) {
      res1 = res1 >= 4 ? d(6) : res1;
      res2 = res2 >= 4 ? d(6) : res2;
    } else {
      res1 = res1 > targetMorale / 2 ? d(6) : res1;
      res2 = res2 > targetMorale / 2 ? d(6) : res2;
    }

    pDamag = pDamag < 2 ? d(3) : pDamag;
  }
  const tototalDamage = Math.max(pDamag + attacker.extradDamageOnFailedPanictest, 0);
  return  res1 + res2 < targetMorale ? tototalDamage : 0;
}

const processWounds = (iterations: number, attacker: IAttacker, defender: IDefender) => {
  return arrayFromLength(iterations).map((_) => getWounds(attacker, defender));
}