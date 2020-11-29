import * as dotenv from 'dotenv';
if(process.env.NODE_ENV !== 'production') dotenv.config({ path: __dirname+'/../../.env' });

import express from 'express';
import bodyParser from 'body-parser';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../swagger.js';
import * as CharacterQueries from './Queries/CharacterQueries';
import cors from 'cors';

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(cors());

app.get('/characters/:characterId', async (request, response) => { // todo might want to try catch and return error
  const res = await CharacterQueries.getCharacterById(request.params.characterId);
  return response.status(200).send(res);
});

app.get('/characters/user/:username', async (request, response) => { // todo might want to try catch and return error
  const res = await CharacterQueries.getAllCharactersForUser(request.params.username);
  return response.status(200).send(res);
});

// app.post('/characters/', async (request, response) => {
//   createCharacter
// });

// app.put('/characters/:characterId', (request, response) => {
//   updateCharacterById
// });

app.put('/characters/:characterId/death_saves', async (request, response) => {
  try {
    const res = await CharacterQueries.updateDeathSaves(request.params.characterId, request.body.successes, request.body.failures);
    return response.status(200).send(res);
  } catch (err) {
    console.error(err.error);
    return response.status(400).send(err);
  }
});

app.put('/characters/:characterId/known_spells', async (request, response) => {
  try {
    const res = await CharacterQueries.updateKnownSpells(request.params.characterId, request.body);
    return response.status(200).send(res);
  } catch (err) {
    console.error(err.error);
    return response.status(400).send(err);
  }
});

// app.put('/characters/:characterId/known_spells/:level', async (request, response) => {
//   updateKnownSpellsAtLevel
//   //{zero through nine, list of strings}
// });

// app.put('/characters/:characterId/ability_scores', async (request, response) => {
//   updateAbilityScores
//     // strength 	 INT,
//     // dexterity    INT,
//     // constitution INT,
//     // intelligence INT,
//     // wisdom		 INT,
//     // charisma     INT
// });

// app.post('/characters/:characterId/features_and_traits', async (request, response) => {  // todo might want to consider bulk update for this too
//   addNewFeatureOrTrait
//     // title TEXT not null DEFAULT '',
//     // body  TEXT not null default ''
// });

// app.put('/characters/:characterId/features_and_traits/:id', async (request, response) => {
//   updateFeatureOrTrait
//     // title TEXT not null DEFAULT '',
//     // body  TEXT not null default ''
// });

// app.delete('/characters/:characterId/features_and_traits/:id', async (request, response) => {
//   deleteFeatureOrTrait
// })

// app.put('/characters/:characterId/spell_slots/:level', async (request, response) => {
//   updateSpellSlot
//   // max
//   // used
// });

// app.put('/characters/:characterId/treasure/money', async (request, response) => {
//   updateMoney
//   // copper
//   // silver
//   // gold
//   // electrum
// });

// app.put('/characters/:characterId/treasure/items/:id', async (request, response) => {
//   updateTreasureItem
//   // "treasure": {
//   //   "type": "array",
//   //   "items": {
//   //     "type": "object",
//   //     "properties": {
//   //       "name": { "type": "string" },
//   //       "id": { "type": "integer", "uniqueItems": true },
//   //       "quantity": { "type": "integer" },
//   //       "weight_in_lbs": { "type": "integer" },
//   //       "bookmarked": { "type": "boolean" },
//   //       "magical": { "type": "boolean" },
//   //       "description_text": { "type": "string" },
//   //     }
//   //   }
//   // }
// });

// app.post('/characters/:characterId/treasure/items', async (request, response) => {
//   addNewTreasureItem
//   // "treasure": {
//   //   "type": "array",
//   //   "items": {
//   //     "type": "object",
//   //     "properties": {
//   //       "name": { "type": "string" },
//   //       "id": { "type": "integer", "uniqueItems": true },
//   //       "quantity": { "type": "integer" },
//   //       "weight_in_lbs": { "type": "integer" },
//   //       "bookmarked": { "type": "boolean" },
//   //       "magical": { "type": "boolean" },
//   //       "description_text": { "type": "string" },
//   //     }
//   //   }
//   // }

// });

// app.delete('/characters/:characterId/treasure/items/:id', async (request, response) => {
//   deleteTreasureItem
// });

// app.put('/characters/:characterId/treasure/items/:id', async (request, response) => {
//   updateHitDice
// });

// app.put('/characters/:characterId/settings', async (request, response) => {
//   updateCharacterSettings
// });

// app.post('/characters/:characterId/hit_dice', async (request, response) => {
//   addNewHitDice
// });

// app.delete('/characters/:characterId/hit_dice/:id', async (request, response) => {
//   deleteHitDice
// });

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
});
