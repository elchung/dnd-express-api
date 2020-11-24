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

const getCharacterById = (request, response) => {  // modify to be getCharacter
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM character_data WHERE character_id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
};


  getCharacterById

  getAllCharactersForUser

  createCharacter

  updateCharacterById

  updateDeathSaves

  updateKnownSpells

  updateKnownSpellsAtLevel

  updateAbilityScores

  addNewFeatureOrTrait

  updateFeatureOrTrait

  deleteFeatureOrTrait

  updateSpellSlot

  updateMoney

  updateTreasureItem

  addNewTreasureItem

  deleteTreasureItem

  updateHitDice

  updateCharacterSettings

  addNewHitDice

  deleteHitDice



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
