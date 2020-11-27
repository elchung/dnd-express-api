import * as express from 'express';
import bodyParser from 'body-parser';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../swagger.js';
import * as CharacterQueries from './Queries/CharacterQueries';
import cors from 'cors';

const app = express();
const port = 3000;

// const AWS = require('aws-sdk'),
//   region = "us-east-2",
//   secretName = "dnd-db-admin", // TODO might want to update to user with not all permissions!!!!!!!!!!!
//   secret,
//   decodedBinarySecret;
// // Create a Secrets Manager client
// var client = new AWS.SecretsManager({
//     region: region
// });
// // In this sample we only handle the specific exceptions for the 'GetSecretValue' API.
// // See https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_GetSecretValue.html
// // We rethrow the exception by default.
// client.getSecretValue({SecretId: secretName}, function(err, data) {
//     if (err) {
//         if (err.code === 'DecryptionFailureException')
//             // Secrets Manager can't decrypt the protected secret text using the provided KMS key.
//             // Deal with the exception here, and/or rethrow at your discretion.
//             throw err;
//         else if (err.code === 'InternalServiceErrorException')
//             // An error occurred on the server side.
//             // Deal with the exception here, and/or rethrow at your discretion.
//             throw err;
//         else if (err.code === 'InvalidParameterException')
//             // You provided an invalid value for a parameter.
//             // Deal with the exception here, and/or rethrow at your discretion.
//             throw err;
//         else if (err.code === 'InvalidRequestException')
//             // You provided a parameter value that is not valid for the current state of the resource.
//             // Deal with the exception here, and/or rethrow at your discretion.
//             throw err;
//         else if (err.code === 'ResourceNotFoundException')
//             // We can't find the resource that you asked for.
//             // Deal with the exception here, and/or rethrow at your discretion.
//             throw err;
//     }
//     else {
//         // Decrypts secret using the associated KMS CMK.
//         // Depending on whether the secret is a string or binary, one of these fields will be populated.
//         if ('SecretString' in data) {
//             secret = data.SecretString;
//         } else {
//             let buff = new Buffer(data.SecretBinary, 'base64');
//             decodedBinarySecret = buff.toString('ascii');
//         }
//     }
//     // Your code goes here.
// });

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
