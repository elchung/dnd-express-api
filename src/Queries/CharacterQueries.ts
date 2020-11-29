import * as CharacterTypes from '../Types/CharacterTypes';
import { Pool } from 'pg';
import { getSecret } from '../Utils/AwsSecretManager';
import {
  getCharacterByIdQuery,
  getCharacterNamesByUserIdQuery,
  updateDeathSavesQuery,
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
  console.log(result.rows[0]);
  return result.rows[0];
};

// export const updateKnownSpells = async (characterId: number, newKnownSpells: CharacterTypes.KnownSpellsType): CharacterTypes.KnownSpellsType => {

// };

// export const updateKnownSpellsAtLevel = async (characterId: number, level: number, newKnownSpellList: string[]): string[] => {

// };

// export const updateAbilityScores = async (characterId: number, newAbilityScores: CharacterTypes.AbilityScoresType): CharacterTypes.AbilityScoresType => {

// };

// export const addNewFeatureOrTrait = async (characterId: number, newFeature: CharacterTypes.FeatureAndTraitsDescriptionType): CharacterTypes.FeatureAndTraitsDescriptionType => {

// };

// export const updateFeatureOrTrait = async (characterId: number, featureId: number, newBody: CharacterTypes.FeatureAndTraitsDescriptionType): CharacterTypes.FeatureAndTraitsDescriptionType => {

// };

// export const deleteFeatureOrTrait = async (characterId: number, featureId: number): CharacterTypes.FeatureAndTraitsDescriptionType => { //might just want featureId

// };

// export const updateSpellSlot = async (characterId: number, level: number, newSpellSlot: CharacterTypes.SpellSlotsAtLevelType): CharacterTypes.SpellSlotsAtLevelType => {

// };

// export const updateMoney = async (characterId: number, newMoney: CharacterTypes.TreasureMoneyType): CharacterTypes.TreasureMoneyType => {

// };

// export const updateTreasureItem = async (characterId: number, treasureId: number, newTreasure: CharacterTypes.TreasureItemType): CharacterTypes.TreasureItemType => {

// };

// export const addNewTreasureItem = async (characterId: number, treasureItem: CharacterTypes.TreasureItemType): CharacterTypes.TreasureItemType => {

// };

// export const deleteTreasureItem = async (treasureId: number): boolean => { // return boolean???

// };

// export const updateCharacterSettings = async (characterId: number, newSettings: CharacterTypes.CharacterSettingsType): CharacterTypes.CharacterSettingsType => {

// };

// export const updateHitDice = async (characterId: number, hitDiceId: number, newHitDice: CharacterTypes.HitDiceType): CharacterTypes.HitDiceType => {

// };

// export const addNewHitDice = async (characterId: number, newHitDice: CharacterTypes.HitDieType): CharacterTypes.HitDiceType => {

// };

// export const deleteHitDice = async (hitDiceId: number): CharacterTypes.HitDiceType => {

// };


module.exports = {
  getCharacterById,
  getAllCharactersForUser,
  // createCharacter,
  // updateCharacterById,
  updateDeathSaves,
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
