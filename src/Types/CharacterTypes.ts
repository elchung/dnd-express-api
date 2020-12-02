interface SingleCharacterListType {
    name: string;
    id: number;
}

export interface CharacterListType extends Array<SingleCharacterListType>{}

export interface AbilityScoresType {
  id: number;
  strength?: number;
  dexterity?: number;
  constitution?: number;
  intelligence?: number;
  wisdom?: number;
  charisma?: number;
  [key: string]: number|undefined;
}

export interface KnownSpellsType {
  id: number;
  zero: string[];
  one: string[];
  two: string[];
  three: string[];
  four: string[];
  five: string[];
  six: string[];
  seven: string[];
  eight: string[];
  nine: string[];
  [key:string]: any;
}

export interface SpellSlotsAtLevelType {
  max: number;
  used: number;
}

export interface SpellSlotsType {
  id?: number;
  oneMax?: number;
  oneUsed?: number;
  twoMax?: number;
  twoUsed?: number;
  threeMax?: number;
  threeUsed?: number;
  fourMax?: number;
  fourUsed?: number;
  fiveMax?: number;
  fiveUsed?: number;
  sixMax?: number;
  sixUsed?: number;
  sevenMax?: number;
  sevenUsed?: number;
  eightMax?: number;
  eightUsed?: number;
  nineMax?: number;
  nineUsed?: number;
  [key: string]: number|undefined;
}

export interface SettingsType {
  id: number;
  abilityScoreOnTop: boolean;
  [key: string]: boolean|number;
}

export interface DeathSavesType {
    successes: number;
    failures: number;
}

export interface KnownSpellsType {
    zero: string[];
    one: string[];
    two: string[];
    three: string[];
    four: string[];
    five: string[];
    six: string[];
    seven: string[];
    eight: string[];
    nine: string[];
}

export interface FeatureAndTraitsType {
  characterId: string;
  index: string;
  title: string;
  body: string;
  id: number;
}

export interface BulkFeaturesAndTraitsType extends Array<FeatureAndTraitsType>{}

export interface TreasureItemType {
  name: string;
  id?: number;
  quantity: number;
  weightInLbs?: number;
  bookmarked: boolean;
  magical: boolean;
  descriptionText?: string;
  [key: string]: string|number|boolean|undefined;
}

export interface TreasureItemsType extends Array<TreasureItemType>{}

export interface TreasureMoneyType {
  gold: number;
  silver: number;
  electrum: number;
  copper: number;
}

export interface TreasureType {
  id: number;
  treasure: {
    [name: string]: TreasureItemsType;
  }
  money: {
    [name: string]: TreasureMoneyType;
  }
}

export interface HitDieType {
  id: number;
  numDice: number;
  diceType: number;
  numUsed: number;
}

export interface HitDiceType  extends Array<HitDieType>{}

export interface CharacterDataType {
  characterId: number;
  username: string;
  characterName?: string;
  level?: number;
  class?: string;
  background?: string;
  race?: string;
  spellcastingAbility?: string;
  experience?: number;
  proficiencyBonus?: number;
  inspiration?: number;
  armorClass?: number;
  initiative?: number;
  speed?: number;
  maxHp?: number;
  tempHp?: number;
  currentHp?: number;
  hpHistory?: number[];
  skillProficiencies?: string[];
  savingThrowProficiencies?: string[];
  skillExpertise?: string[];
  generalProficiencies?: string[];
  knownLanguages?: string[];
  toolAndOtherProficiencies?: string[];
  preparedSpells?: string[];
  abilityScores?: {
    [key: string]: AbilityScoresType;
  };
  hitDice?: {
    [key: string]: HitDiceType;
  };
  deathSaves?: {
    [key: string]: DeathSavesType;
  };
  knownSpells?: {
    [key: string]: KnownSpellsType;
  };
  spellSlots?: {
    [key: string]: SpellSlotsType;
  };
  featuresAndTraits?: {
    [key: string]: BulkFeaturesAndTraitsType;
  };
  treasure?: {
    [key: string]: TreasureType;
  };
  _settings: {
    [key: string]: SettingsType;
  }
}
