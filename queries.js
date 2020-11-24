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

const updateDeathSaves = (request, response) => {
  //{successes: int, failures: int}
};

const updateKnownSpells = (request, response) => {
  //{zero through nine, list of strings + character id }
}

const updateAbilityScores = (request, response) => {
  strength 	 INT,
    dexterity    INT,
    constitution INT,
    intelligence INT,
    wisdom		 INT,
    charisma     INT
}

const addNewFeatureOrTrait = (request, response) => {
  characterid
  title TEXT not null DEFAULT '',
    body  TEXT not null default ''
}

const updateFeatureOrTrait = (request, response) => {
  characterid
  trait_id
  title TEXT not null DEFAULT '',
    body  TEXT not null default ''
}

const deleteFeatureOrTrait = (request, response) => {

}

const updateSpellSlot = (request, response) => {
  character id
  spell level
  max
  used
}

const updateMoney= (request, response) => {

}

const updateTreasureItem = (request, response) => {

}

const addNewTreasureItem = (request, response) => {

}

const deleteTreasureItem = (request, response) => {

}

const updateCharacterSettings = (request, response) => {
  field to update, character id
}

const updateHitDice = (request, response) => {

}

const addNewHitDice = (request, response) => {

}

const deleteHitDice = (request, response) => {

}


// const createUser = (request, response) => {
//   const { name, email } = request.body

//   pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email], (error, results) => {
//     if (error) {
//       throw error
//     }
//     response.status(201).send(`User added with ID: ${result.insertId}`)
//   })
// }

// const updateUser = (request, response) => {
//   const id = parseInt(request.params.id)
//   const { name, email } = request.body

//   pool.query(
//     'UPDATE users SET name = $1, email = $2 WHERE id = $3',
//     [name, email, id],
//     (error, results) => {
//       if (error) {
//         throw error
//       }
//       response.status(200).send(`User modified with ID: ${id}`)
//     }
//   )
// }

// const deleteUser = (request, response) => {
//   const id = parseInt(request.params.id)

//   pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
//     if (error) {
//       throw error
//     }
//     response.status(200).send(`User deleted with ID: ${id}`)
//   })
// }

// module.exports = {
//   getUsers,
//   getUserById,
//   createUser,
//   updateUser,
//   deleteUser,
// }
