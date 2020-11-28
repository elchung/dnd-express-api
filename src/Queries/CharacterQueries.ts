import * as CharacterTypes from '../Types/CharacterTypes';
import { Pool } from 'pg';
import {
  getCharacterByIdQuery,
  getCharacterNamesByUserIdQuery,
} from './PostgresQueryStrings/PostgresCharacterQueries';
// import { response } from 'express';


//keep...for now..
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT),
});

export const getCharacterById = async (characterId: string): Promise<any> => {  // Promise<CharacterTypes.CharacterListType> => {
  return pool.query(getCharacterByIdQuery, [characterId]);
};

export const getAllCharactersForUser = async (userId: string): Promise<any> => {  // does this return all characters, or just name+ids of them? probably just character names for data procesing limiting
  return pool.query(getCharacterNamesByUserIdQuery, [userId]);
};

// export const createCharacter = (params: CharacterTypes.CharacterDataType): CharacterTypes.CharacterDataType => {

// };

// export const updateCharacterById = (characterId: number, params: CharacterTypes.CharacterDataType): CharacterTypes.CharacterDataType => {

// };

// export const updateDeathSaves = (characterId: number, newDeathSaves: CharacterTypes.DeathSavesType): CharacterTypes.DeathSavesType => {

// };

// export const updateKnownSpells = (characterId: number, newKnownSpells: CharacterTypes.KnownSpellsType): CharacterTypes.KnownSpellsType => {

// };

// export const updateKnownSpellsAtLevel = (characterId: number, level: number, newKnownSpellList: string[]): string[] => {

// };

// export const updateAbilityScores = (characterId: number, newAbilityScores: CharacterTypes.AbilityScoresType): CharacterTypes.AbilityScoresType => {

// };

// export const addNewFeatureOrTrait = (characterId: number, newFeature: CharacterTypes.FeatureAndTraitsDescriptionType): CharacterTypes.FeatureAndTraitsDescriptionType => {

// };

// export const updateFeatureOrTrait = (characterId: number, featureId: number, newBody: CharacterTypes.FeatureAndTraitsDescriptionType): CharacterTypes.FeatureAndTraitsDescriptionType => {

// };

// export const deleteFeatureOrTrait = (characterId: number, featureId: number): CharacterTypes.FeatureAndTraitsDescriptionType => { //might just want featureId

// };

// export const updateSpellSlot = (characterId: number, level: number, newSpellSlot: CharacterTypes.SpellSlotsAtLevelType): CharacterTypes.SpellSlotsAtLevelType => {

// };

// export const updateMoney = (characterId: number, newMoney: CharacterTypes.TreasureMoneyType): CharacterTypes.TreasureMoneyType => {

// };

// export const updateTreasureItem = (characterId: number, treasureId: number, newTreasure: CharacterTypes.TreasureItemType): CharacterTypes.TreasureItemType => {

// };

// export const addNewTreasureItem = (characterId: number, treasureItem: CharacterTypes.TreasureItemType): CharacterTypes.TreasureItemType => {

// };

// export const deleteTreasureItem = (treasureId: number): boolean => { // return boolean???

// };

// export const updateCharacterSettings = (characterId: number, newSettings: CharacterTypes.CharacterSettingsType): CharacterTypes.CharacterSettingsType => {

// };

// export const updateHitDice = (characterId: number, hitDiceId: number, newHitDice: CharacterTypes.HitDiceType): CharacterTypes.HitDiceType => {

// };

// export const addNewHitDice = (characterId: number, newHitDice: CharacterTypes.HitDieType): CharacterTypes.HitDiceType => {

// };

// export const deleteHitDice = (hitDiceId: number): CharacterTypes.HitDiceType => {

// };


module.exports = {
  getCharacterById,
  // getAllCharactersForUser,
  // createCharacter,
  // updateCharacterById,
  // updateDeathSaves,
  // updateKnownSpells,
  // updateKnownSpellsAtLevel,
  // updateAbilityScores,
  // addNewFeatureOrTrait,
  // updateFeatureOrTrait,
  // deleteFeatureOrTrait,
  // updateSpellSlot,
  // updateMoney,
  // updateTreasureItem,
  // addNewTreasureItem,
  // deleteTreasureItem,
  // updateHitDice,
  // updateCharacterSettings,
  // addNewHitDice,
  // deleteHitDice
}
