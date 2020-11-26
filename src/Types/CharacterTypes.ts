export interface AbilityScoresType {
  id: number;
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
}

export interface DeathSavesType {
  id: number;
  successes: number;
  failures: number;
}

export interface KnownpellsType {
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

export interface SpellSlotAtLevel {
  id: number;
  max: number;
  used: number;
}

export interface SpellSlotsType {
  id: number;
  one: {
    [key: string]: SpellSlotAtLevel;
  };
  two: {
    [key: string]: SpellSlotAtLevel;
  };
  three: {
    [key: string]: SpellSlotAtLevel;
  };
  four: {
    [key: string]: SpellSlotAtLevel;
  };
  five: {
    [key: string]: SpellSlotAtLevel;
  };
  six: {
    [key: string]: SpellSlotAtLevel;
  };
  seven: {
    [key: string]: SpellSlotAtLevel;
  };
  eight: {
    [key: string]: SpellSlotAtLevel;
  };
  nine: {
    [key: string]: SpellSlotAtLevel;
  };
}

export interface FeaturesAndTraitsType {
  id: number;
  title: string;
  body: string;
}

export interface SettingsType {
  id: number;
  ability_score_on_top: boolean;
}

export interface DeathSaveType {
    successes: number;
    failures: number;
}

export interface DeathSaveType {
    successes: number;
    failures: number;
}

export interface DeathSavesType extends Array<DeathSaveType>{}

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

export interface FeatureAndTraitDescriptionType {
  title: string;
  body: string;
  id: number;
}

export interface FeatureAndTraitDescriptionsType extends Array<FeatureAndTraitDescriptionType>{}

export interface SpellSlotsAtLevelType {
    max: number;
    used: number;
}

export interface TreasureItemType { 
  name: string;
  id: number;
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

export interface CharacterDataType {
  character_id: number;
  user_name: string;
  character_name: string;
  level: number;
  class: string;
  background: string;
  race: string;
  spellcasting_ability: string;
  experience: number;
  proficiency_bonus: number;
  inspiration: number;
  armor_class: number;
  initiative: number;
  speed: number;
  max_hp: number;
  temp_hp: number;
  current_hp: number;
  hp_history: number[];
  skill_proficiencies: string[];
  saving_throw_proficiencies: string[];
  skill_expertise: string[];
  general_proficiencies: string[];
  known_languages: string[];
  tool_and_other_proficiencie: string[];
  prepared_spells: string[];
  ability_scores: {
    [key: string]: AbilityScoresType;
  };
  death_save: {
    [key: string]: DeathSavesType;
  };
  known_spells: {
    [key: string]: KnownSpellsType;
  };
  spell_slots: {
    [key: string]: SpellSlotsType;
  };
  features_and_traits: {
    [key: string]: FeaturesAndTraitsType;
  };
  treasure: {
    [key: string]: TreasureType;
  };
  _settings: {
    id: number;
    ability_score_on_top: boolean;;
  }
};