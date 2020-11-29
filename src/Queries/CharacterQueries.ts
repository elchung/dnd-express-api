import * as CharacterTypes from '../Types/CharacterTypes';
import { Pool } from 'pg';
import {
  getCharacterByIdQuery,
  getCharacterNamesByUserIdQuery,
  updateDeathSavesQuery,
  updateKnownSpellsQuery,
  updateKnownSpellsAtLevelQuery,
  updateAbilityScoresQuery,
  updateSpellSlotsQuery,
  updateSpellSlotAtLevelQuery,
  updateMoneyQuery,
} from './PostgresQueryStrings/PostgresCharacterQueries';

if (!process.env.DB_USER_NAME || !process.env.DB_HOST || !process.env.DB_NAME || !process.env.DB_USER_PASSWORD || !process.env.DB_PORT) {
  throw new Error("Missing db variables.");
}

// keep...for now..
const pool = new Pool({
  user: process.env.DB_USER_NAME,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_USER_PASSWORD,
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  port: +process.env.DB_PORT,
});

export const getCharacterById = async (characterId: string): Promise<CharacterTypes.CharacterListType> => {
  const result = await pool.query(getCharacterByIdQuery(characterId));
  return result.rows[0].json_build_object;
};

export const getAllCharactersForUser = async (userId: string): Promise<any> => {  // does this return all characters, or just name+ids of them? probably just character names for data procesing limiting
  const result = await pool.query(getCharacterNamesByUserIdQuery(userId));
  return result.rows[0].json_agg;
};

// export const createCharacter = async (params: CharacterTypes.CharacterDataType): CharacterTypes.CharacterDataType => {

// };

// export const updateCharacterById = async (characterId: number, params: CharacterTypes.CharacterDataType): CharacterTypes.CharacterDataType => {

// };

export const updateDeathSaves = async (characterId: string, successes: string, failures: string): Promise<CharacterTypes.DeathSavesType> => {
  const result = await pool.query(updateDeathSavesQuery(characterId, successes, failures));
  return result.rows[0];
};

export const updateKnownSpells = async (characterId: string, newKnownSpells: CharacterTypes.KnownSpellsType): Promise<CharacterTypes.KnownSpellsType> => {
  const result = await pool.query(updateKnownSpellsQuery(characterId, newKnownSpells));
  return result.rows[0];
};

export const updateKnownSpellsAtLevel = async (characterId: string, level: string, newKnownSpellList: string[]): Promise<string[]> => {
  const result = await pool.query(updateKnownSpellsAtLevelQuery(characterId, level, newKnownSpellList));
  return result.rows[0];
};

export const updateAbilityScores = async (characterId: string, newAbilityScores: CharacterTypes.AbilityScoresType): Promise<CharacterTypes.AbilityScoresType> => {
  const result = await pool.query(updateAbilityScoresQuery(characterId, newAbilityScores));
  return result.rows[0];
};

// export const addNewFeatureOrTrait = async (characterId: string, newFeature: CharacterTypes.FeatureAndTraitsDescriptionType): Promise<CharacterTypes.FeatureAndTraitsDescriptionType> => {

// };

// export const updateFeatureOrTrait = async (characterId: string, featureId: string, newBody: CharacterTypes.FeatureAndTraitsDescriptionType): Promise<CharacterTypes.FeatureAndTraitsDescriptionType> => {

// };

// export const deleteFeatureOrTrait = async (characterId: string, featureId: string): Promise<CharacterTypes.FeatureAndTraitsDescriptionType> => { //might just want featureId

// };

export const updateSpellSlots = async (characterId: string, newSpellSlots: CharacterTypes.SpellSlotsType): Promise<CharacterTypes.SpellSlotsType> => {
  const result = await pool.query(updateSpellSlotsQuery(characterId, newSpellSlots));
  return result.rows[0];
};

export const updateSpellSlotAtLevel = async (characterId: string, level: string, newSpellSlotAtLevel: CharacterTypes.SpellSlotAtLevelType): Promise<CharacterTypes.SpellSlotAtLevelType> => {
  const result = await pool.query(updateSpellSlotAtLevelQuery(characterId, level, newSpellSlotAtLevel));
  return result.rows[0];
};

export const updateMoney = async (characterId: string, newMoney: CharacterTypes.TreasureMoneyType): Promise<CharacterTypes.TreasureMoneyType> => {
  const result = await pool.query(updateMoneyQuery(characterId, newMoney));
  return result.rows[0];
};

// export const updateTreasureItem = async (characterId: string, treasureId: string, newTreasure: CharacterTypes.TreasureItemType): Promise<CharacterTypes.TreasureItemType> => {

// };

// export const addNewTreasureItem = async (characterId: string, treasureItem: CharacterTypes.TreasureItemType): Promise<CharacterTypes.TreasureItemType> => {

// };

// export const deleteTreasureItem = async (treasureId: string): Promise<boolean> => { // return boolean???

// };

// export const updateCharacterSettings = async (characterId: string, newSettings: CharacterTypes.CharacterSettingsType): Promise<CharacterTypes.CharacterSettingsType> => {

// };

// export const updateHitDice = async (characterId: string, hitDiceId: string, newHitDice: CharacterTypes.HitDiceType): Promise<CharacterTypes.HitDiceType> => {

// };

// export const addNewHitDice = async (characterId: string, newHitDice: CharacterTypes.HitDieType): Promise<CharacterTypes.HitDiceType> => {

// };

// export const deleteHitDice = async (hitDiceId: string): Promise<CharacterTypes.HitDiceType> => {

// };


module.exports = {
  getCharacterById,
  getAllCharactersForUser,
  // createCharacter,
  // updateCharacterById,
  updateDeathSaves,
  updateKnownSpells,
  updateKnownSpellsAtLevel,
  updateAbilityScores,
  // addNewFeatureOrTrait,
  // updateFeatureOrTrait,
  // deleteFeatureOrTrait,
  updateSpellSlots,
  updateSpellSlotAtLevel,
  updateMoney,
  // updateTreasureItem,
  // addNewTreasureItem,
  // deleteTreasureItem,
  // updateHitDice,
  // updateCharacterSettings,
  // addNewHitDice,
  // deleteHitDice
}
