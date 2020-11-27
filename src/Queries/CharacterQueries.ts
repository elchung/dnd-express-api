import * as CharacterTypes from '../Types/CharacterTypes';
import {
  getCharacterByIdQuery,
} from './PostgresQueryStrings/PostgresCharacterQueries';

const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'api',
  password: 'password',
  port: 5432,
});

// const getUsers = (request, response) => {  //can modify this to be getCharacters
//   pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
//     if (error) {
//       throw error
//     }
//     response.status(200).json(results.rows)
//   })
// }

// const getCharacterById = (request, response) => {  // modify to be getCharacter
//   const id = parseInt(request.params.id)

//   pool.query('SELECT * FROM character_data WHERE character_id = $1', [id], (error, results) => {
//     if (error) {
//       throw error
//     }
//     response.status(200).json(results.rows)
//   })
// };


const getCharacterById = (characterId: number): CharacterTypes.CharacterDataType => {
  getCharacterByIdQuery(characterId)
};

const getAllCharactersForUser = (userId: string): string[] => {  //todo does this return all characters, or just name+ids of them?
    
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
