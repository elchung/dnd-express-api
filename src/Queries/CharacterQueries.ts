import * as CharacterTypes from '../Types/CharacterTypes';
import { Pool } from 'pg';
import { getSecret } from '../Utils/AwsSecretManager';
import {
  getCharacterByIdQuery,
  getCharacterNamesByUserIdQuery,
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

export const getCharacterById = async (characterId: string): Promise<any> => {  // Promise<CharacterTypes.CharacterListType> => {
  const result = await pool.query(getCharacterByIdQuery(characterId));
  console.log(JSON.stringify(result.rows));
  return result.rows[0].json_build_object;
};

export const getAllCharactersForUser = async (userId: string): Promise<any> => {  // does this return all characters, or just name+ids of them? probably just character names for data procesing limiting
  const result = await pool.query(getCharacterNamesByUserIdQuery(userId)); 
  return result.rows[0].json_agg;
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
  getAllCharactersForUser,
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
