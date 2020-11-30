interface SingleCharacterListType {
    name: string;
    id: number;
}

export interface CharacterListType extends Array<SingleCharacterListType>{}

export interface AbilityScoresType {
  id: number;
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
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
}

export interface SpellSlotsAtLevelType {
  max: number;
  used: number;
}

export interface SpellSlotsType {
  id: number;
  one_max?: number;
  one_used?: number;
  two_max?: number;
  two_used?: number;
  three_max?: number;
  three_used?: number;
  four_max?: number;
  four_used?: number;
  five_max?: number;
  five_used?: number;
  six_max?: number;
  six_used?: number;
  seven_max?: number;
  seven_used?: number;
  eight_max?: number;
  eight_used?: number;
  nine_max?: number;
  nine_used?: number;
}

export interface SettingsType {
  id: number;
  ability_score_on_top: boolean;
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
  character_id?: string;
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
  weight_in_lbs: number;
  bookmarked: boolean;
  magical: boolean;
  description_text: string;
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

export interface CharacterSettingsType {
  id: number;
  ability_score_on_top: boolean;
}

export interface HitDieType {
  id: number;
  num_dice: number;
  dice_type: number;
  num_used: number;
}

export interface HitDiceType  extends Array<HitDieType>{}

export interface CharacterDataType {
  character_id: number;
  user_name: string;
  character_name?: string;
  level?: number;
  class?: string;
  background?: string;
  race?: string;
  spellcasting_ability?: string;
  experience?: number;
  proficiency_bonus?: number;
  inspiration?: number;
  armor_class?: number;
  initiative?: number;
  speed?: number;
  max_hp?: number;
  temp_hp?: number;
  current_hp?: number;
  hp_history?: number[];
  skill_proficiencies?: string[];
  saving_throw_proficiencies?: string[];
  skill_expertise?: string[];
  general_proficiencies?: string[];
  known_languages?: string[];
  tool_and_other_proficiencies?: string[];
  prepared_spells?: string[];
  ability_scores?: {
    [key: string]: AbilityScoresType;
  };
  hit_dice?: {
    [key: string]: HitDiceType;
  };
  death_save?: {
    [key: string]: DeathSavesType;
  };
  known_spells?: {
    [key: string]: KnownSpellsType;
  };
  spell_slots?: {
    [key: string]: SpellSlotsType;
  };
  features_and_traits?: {
    [key: string]: BulkFeaturesAndTraitsType;
  };
  treasure?: {
    [key: string]: TreasureType;
  };
  _settings: {
    ability_score_on_top: boolean;
  }
};
