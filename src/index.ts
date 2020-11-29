import * as dotenv from 'dotenv';
if(process.env.NODE_ENV !== 'production') dotenv.config({ path: __dirname+'/../../.env' });

import express from 'express';
import bodyParser from 'body-parser';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../swagger.js';
import * as CharacterQueries from './Queries/CharacterQueries';
import * as CharacterTypes from './Types/CharacterTypes';
import cors from 'cors';
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
  createFeatureOrTraitQuery,
  updateFeaturesOrTraits,
  deleteFeatureOrTrait,
} from './Queries/PostgresQueryStrings/PostgresCharacterQueries';

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

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(cors());

app.get('/characters/:characterId', async (request, response) => { // todo might want to try catch and return error
  const result = await pool.query(getCharacterByIdQuery(request.params.characterId));
  return response.status(200).send(result.rows[0].json_build_object);
});

app.get('/characters/user/:username', async (request, response) => { // todo might want to try catch and return error
  const result = await pool.query(getCharacterNamesByUserIdQuery(request.params.username));
  return response.status(200).send(result.rows[0].json_agg);
});

// app.post('/characters/', async (request, response) => {
//   createCharacter
// });

// app.put('/characters/:characterId', (request, response) => {
//   updateCharacterById
// });

app.put('/characters/:characterId/death_saves', async (request, response) => {
  try {
    const result = await pool.query(updateDeathSavesQuery(request.params.characterId, request.body.successes, request.body.failures));
    return response.status(200).send(result.rows[0]);
  } catch (err) {
    console.error(err.error);
    return response.status(400).send(err);
  }
});

app.put('/characters/:characterId/known_spells', async (request, response) => {
  try {  
    const result = await pool.query(updateKnownSpellsQuery(request.params.characterId, request.body));
    return response.status(200).send(result.rows[0]);
  } catch (err) {
    console.error(err.error);
    return response.status(400).send(err);
  }
});

app.put('/characters/:characterId/known_spells/:level', async (request, response) => {
  try {
    const result = await pool.query(updateKnownSpellsAtLevelQuery(request.params.characterId, request.params.level, request.body));
    return response.status(200).send(result.rows[0]);
  } catch (err) {
    console.error(err.error);
    return response.status(400).send(err);
  }
});

app.put('/characters/:characterId/ability_scores', async (request, response) => { // passed in array, auto bulk updated
  try {
    const result = await pool.query(updateAbilityScoresQuery(request.params.characterId, request.body));
    return response.status(200).send(result.rows[0]);
  } catch (err) {
    console.error(err.error);
    return response.status(400).send(err);
  }
});

app.post('/characters/:characterId/features_and_traits', async (request, response) => { 
  try {
    console.error('query not working yet');  
    const result = await pool.query(createFeatureOrTraitQuery(request.params.characterId, request.body));
    return response.status(200).send(result.rows[0]);
  } catch (err) {
    console.error(err);
    return response.status(400).send(err);
  }
});

//plural
app.put('/characters/:characterId/features_and_traits/', async (request, response) => {
  try {
    console.error('query not working yet');  
    const result = await pool.query(updateFeaturesOrTraits(request.params.characterId, request.body));
    return response.status(200).send(result.rows[0].json_agg);
  } catch (err) {
    console.error(err);
    return response.status(400).send(err);
  }
});

app.delete('/characters/:characterId/features_and_traits/', async (request, response) => {
  try {
    console.error('query not working yet');  
    const result = await pool.query(deleteFeatureOrTrait(request.params.characterId, request.body));
    return response.status(200).send(result.rows[0]);
  } catch (err) {
    console.error(err);
    return response.status(400).send(err);
  }
})

app.put('/characters/:characterId/spell_slots/', async (request, response) => {  // TODO need to figure this out
  try {
    console.error('query not working yet');  
    const result = await pool.query(updateSpellSlotsQuery(request.params.characterId, request.body));
    return response.status(200).send(result.rows[0]);
  } catch (err) {
    console.error(err);
    return response.status(400).send(err);
  }
});

app.put('/characters/:characterId/spell_slots/:level', async (request, response) => {
  try {
    const result = await pool.query(updateSpellSlotAtLevelQuery(request.params.characterId, request.params.level, request.body));
    return response.status(200).send(result.rows[0]);
  } catch (err) {
    console.error(err);
    return response.status(400).send(err);
  }
});

app.put('/characters/:characterId/treasure/money', async (request, response) => {
  try {
    const result = await pool.query(updateMoneyQuery(request.params.characterId, request.body));
    return response.status(200).send(result.rows[0]);
  } catch (err) {
    console.error(err);
    return response.status(400).send(err);
  }
});

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
