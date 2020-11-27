import * as CharacterTypes from '../Types/CharacterTypes';
import { getSecret } from '../Utils/AwsSecretManager';
import {
  getCharacterByIdQuery,
} from './PostgresQueryStrings/PostgresCharacterQueries';

const Pool = require('pg').Pool;

const pool = new Pool({
  user: getSecret(),
  host: 'localhost',
  database: 'api',
  password: 'password',
  port: 5432,
});

const getCharacterById = (characterId: number): void => {
  getCharacterByIdQuery(characterId)
};

const getAllCharactersForUser = (userId: string): string[] => {  // does this return all characters, or just name+ids of them? probably just character names for data procesing limiting

};

const createCharacter = (params: CharacterTypes.CharacterDataType): CharacterTypes.CharacterDataType => {

};

const updateCharacterById = (characterId: number, params: CharacterTypes.CharacterDataType): CharacterTypes.CharacterDataType => {

};

const updateDeathSaves = (characterId: number, newDeathSaves: CharacterTypes.DeathSavesType): CharacterTypes.DeathSavesType => {

};

const updateKnownSpells = (characterId: number, newKnownSpells: CharacterTypes.KnownSpellsType): CharacterTypes.KnownSpellsType => {

};

const updateKnownSpellsAtLevel = (characterId: number, level: number, newKnownSpellList: string[]): string[] => {

};

const updateAbilityScores = (characterId: number, newAbilityScores: CharacterTypes.AbilityScoresType): CharacterTypes.AbilityScoresType => {

};

const addNewFeatureOrTrait = (characterId: number, newFeature: CharacterTypes.FeatureAndTraitsDescriptionType): CharacterTypes.FeatureAndTraitsDescriptionType => {

};

const updateFeatureOrTrait = (characterId: number, featureId: number, newBody: CharacterTypes.FeatureAndTraitsDescriptionType): CharacterTypes.FeatureAndTraitsDescriptionType => {

};

const deleteFeatureOrTrait = (characterId: number, featureId: number): CharacterTypes.FeatureAndTraitsDescriptionType => { //might just want featureId

};

const updateSpellSlot = (characterId: number, level: number, newSpellSlot: CharacterTypes.SpellSlotsAtLevelType): CharacterTypes.SpellSlotsAtLevelType => {

};

const updateMoney = (characterId: number, newMoney: CharacterTypes.TreasureMoneyType): CharacterTypes.TreasureMoneyType => {

};

const updateTreasureItem = (characterId: number, treasureId: number, newTreasure: CharacterTypes.TreasureItemType): CharacterTypes.TreasureItemType => {

};

const addNewTreasureItem = (characterId: number, treasureItem: CharacterTypes.TreasureItemType): CharacterTypes.TreasureItemType => {

};

const deleteTreasureItem = (treasureId: number): boolean => { // return boolean???

};

const updateCharacterSettings = (characterId: number, newSettings: CharacterTypes.CharacterSettingsType): CharacterTypes.CharacterSettingsType => {

};

const updateHitDice = (characterId: number, hitDiceId: number, newHitDice: CharacterTypes.HitDiceType): CharacterTypes.HitDiceType => {

};

const addNewHitDice = (characterId: number, newHitDice: CharacterTypes.HitDieType): CharacterTypes.HitDiceType => {

};

const deleteHitDice = (hitDiceId: number): CharacterTypes.HitDiceType => {

};


module.exports = {
  getCharacterById,
  getAllCharactersForUser,
  createCharacter,
  updateCharacterById,
  updateDeathSaves,
  updateKnownSpells,
  updateKnownSpellsAtLevel,
  updateAbilityScores,
  addNewFeatureOrTrait,
  updateFeatureOrTrait,
  deleteFeatureOrTrait,
  updateSpellSlot,
  updateMoney,
  updateTreasureItem,
  addNewTreasureItem,
  deleteTreasureItem,
  updateHitDice,
  updateCharacterSettings,
  addNewHitDice,
  deleteHitDice
}
