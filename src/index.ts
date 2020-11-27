import express from 'express';
import bodyParser from 'body-parser';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../swagger.js';
import * as CharacterQueries from './Queries/CharacterQueries';
import cors from 'cors';

const app = express();
const port = 3000;

//test block for aws secret manager working
// import { getSecret } from "./Utils/AwsSecretManager";
// const testObj = {
//     user: getSecret('dnd-db-user'),
//     host: getSecret('dnd-db-host'),
//     database: getSecret('dnd-db-name'),
//     password: getSecret('dnd-db-user-password'),
//     port: parseInt(getSecret('dnd-db-port')),
// };
// console.log(testObj);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

//swagger implementation
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//enabling CORS
app.use(cors());

app.get('/characters/:characterId', (request, response) => {
  // getCharacterById
  console.log(request.params.characterId);
  console.log('test');
  return response.send("get by character id");
});

app.get('/characters/user/{user_id}', (request, response) => {
  CharacterQueries.getAllCharactersForUser
});

app.post('/characters/', (request, response) => {
  createCharacter
});

app.put('/characters/{character_id}', (request, response) => {
  updateCharacterById
});

app.put('/characters/{character_id}/death_save', (request, response) => {
  updateDeathSaves
  //{successes: int, failures: int}
});

app.put('/characters/{character_id}/known_spells', (request, response) => {
  updateKnownSpells
  //{zero through nine, list of strings}
});

app.put('/characters/{character_id}/known_spells/{level}', (request, response) => {
  updateKnownSpellsAtLevel
  //{zero through nine, list of strings}
});

app.put('/characters/{character_id}/ability_scores', (request, response) => {
  updateAbilityScores
    // strength 	 INT,
    // dexterity    INT,
    // constitution INT,
    // intelligence INT,
    // wisdom		 INT,
    // charisma     INT
});

app.post('/characters/{character_id}/features_and_traits', (request, response) => {  // todo might want to consider bulk update for this too
  addNewFeatureOrTrait
    // title TEXT not null DEFAULT '',
    // body  TEXT not null default ''
});

app.put('/characters/{character_id}/features_and_traits/{id}', (request, response) => {
  updateFeatureOrTrait
    // title TEXT not null DEFAULT '',
    // body  TEXT not null default ''
});

app.delete('/characters/{character_id}/features_and_traits/{id}', (request, response) => {
  deleteFeatureOrTrait
})

app.put('/characters/{character_id}/spell_slots/{level}', (request, response) => {
  updateSpellSlot
  // max
  // used
});

app.put('/characters/{character_id}/treasure/money', (request, response) => {
  updateMoney
  // copper
  // silver
  // gold
  // electrum
});

app.put('/characters/{character_id}/treasure/items/{id}', (request, response) => {
  updateTreasureItem
  // "treasure": {
  //   "type": "array",
  //   "items": {
  //     "type": "object",
  //     "properties": {
  //       "name": { "type": "string" },
  //       "id": { "type": "integer", "uniqueItems": true },
  //       "quantity": { "type": "integer" },
  //       "weight_in_lbs": { "type": "integer" },
  //       "bookmarked": { "type": "boolean" },
  //       "magical": { "type": "boolean" },
  //       "description_text": { "type": "string" },
  //     }
  //   }
  // }
});

app.post('/characters/{character_id}/treasure/items', (request, response) => {
  addNewTreasureItem
  // "treasure": {
  //   "type": "array",
  //   "items": {
  //     "type": "object",
  //     "properties": {
  //       "name": { "type": "string" },
  //       "id": { "type": "integer", "uniqueItems": true },
  //       "quantity": { "type": "integer" },
  //       "weight_in_lbs": { "type": "integer" },
  //       "bookmarked": { "type": "boolean" },
  //       "magical": { "type": "boolean" },
  //       "description_text": { "type": "string" },
  //     }
  //   }
  // }

});

app.delete('/characters/{character_id}/treasure/items/{id}', (request, response) => {
  deleteTreasureItem
});

app.put('/characters/{character_id}/treasure/items/{id}', (request, response) => {
  updateHitDice
});

app.put('/characters/{character_id}/settings', (request, response) => {
  updateCharacterSettings
});

app.post('/characters/{character_id}/hit_dice', (request, response) => {
  addNewHitDice
});

app.delete('/characters/{character_id}/hit_dice/{id}', (request, response) => {
  deleteHitDice
});

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
});
