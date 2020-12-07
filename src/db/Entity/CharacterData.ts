import {Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToOne, OneToMany} from "typeorm";
import {CharacterHitDice} from "./CharacterHitDice";
import {CharacterSettings} from "./CharacterSheetSettings";
import {CharacterAbilityScores} from "./CharacterAbilityScores";
import {CharacterDeathSaves} from "./CharacterDeathSaves";
import {CharacterKnownSpells} from "./CharacterKnownSpells";
import {CharacterSpellSlots} from "./CharacterSpellSlots";
import {CharacterFeaturesAndTraits} from "./CharacterFeaturesAndTraits";
import {CharacterTreasure} from "./CharacterTreasure";

@Entity()
export class CharacterData {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  characterName: string;

  @Column()
  level: number;

  @Column()
  class: string;

  @Column()
  background: string;

  @Column()
  race: string;

  @Column()
  spellcastingAbility: string;

  @Column()
  experience: number;

  @Column()
  proficiencyBonus: number;

  @Column()
  inspiration: number;

  @Column()
  armorClass: number;

  @Column()
  initiative: number;

  @Column()
  speed: number;

  @Column()
  maxHp: number;

  @Column()
  tempHp: number;

  @Column()
  currentHp: number;

  @Column()
  hpHistory: number[];

  @Column()
  skillProficiencies: string[];

  @Column()
  savingThrowProficiencies: string[];

  @Column()
  skillExpertise: string[];

  @Column()
  generalProficiencies: string[];

  @Column()
  knownLanguages: string[];

  @Column()
  toolAndOtherProficiencies: string[];

  @Column()
  preparedSpells: string[];

  @OneToMany(type => CharacterHitDice, hitDice => hitDice.character, { cascade: true })
  hitDice: CharacterHitDice[];

  @OneToOne(type => CharacterAbilityScores, abilityScores => abilityScores.character, { cascade: true })
  abilityScores: CharacterAbilityScores;

  @OneToOne(type => CharacterDeathSaves, deathSaves => deathSaves.character, { cascade: true })
  deathSaves: CharacterDeathSaves;

  @OneToOne(type => CharacterKnownSpells, knownSpells => knownSpells.character, { cascade: true })
  knownSpells: CharacterKnownSpells;

  @OneToOne(type => CharacterSpellSlots, spellSlots => spellSlots.character, { cascade: true })
  spellSlots: CharacterSpellSlots

  @OneToMany(type => CharacterFeaturesAndTraits, featuresAndTraits => featuresAndTraits.character, { cascade: true })
  featuresAndTraits: CharacterFeaturesAndTraits[];

  @OneToOne(type => CharacterTreasure, treasure => treasure.character, { cascade: true })
  treasure: CharacterTreasure;

  @OneToOne(type => CharacterSettings, settings => settings.character)
  settings: CharacterSettings;

}
