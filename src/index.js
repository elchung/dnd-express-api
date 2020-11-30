"use strict";
exports.__esModule = true;
var express_1 = require("express");
var body_parser_1 = require("body-parser");
var swagger_ui_express_1 = require("swagger-ui-express");
var swagger_js_1 = require("../swagger.js");
var CharacterQueries = require("./Queries/CharacterQueries");
var cors_1 = require("cors");
var dotenv_1 = require("dotenv");
if (process.env.NODE_ENV !== 'production') {
    dotenv_1["default"].config();
}
var app = express_1["default"]();
var port = process.env.PORT;
// test block for aws secret manager working
var AwsSecretManager_1 = require("./Utils/AwsSecretManager");
AwsSecretManager_1.getSecret('dnd-db-user').then(function (res) { return console.log(res); }),
    AwsSecretManager_1.getSecret('dnd-db-host').then(function (res) { return console.log(res); }),
    AwsSecretManager_1.getSecret('dnd-db-name').then(function (res) { return console.log(res); }),
    AwsSecretManager_1.getSecret('dnd-db-user-password').then(function (res) { return console.log(res); }),
    AwsSecretManager_1.getSecret('dnd-db-port').then(function (res) { return console.log(res); }),
    app.use(body_parser_1["default"].json());
app.use(body_parser_1["default"].urlencoded({
    extended: true
}));
app.use('/docs', swagger_ui_express_1["default"].serve, swagger_ui_express_1["default"].setup(swagger_js_1["default"]));
app.use(cors_1["default"]());
app.get('/characters/:characterId', function (request, response) {
    console.log(request.params);
    return response.send(CharacterQueries.getCharacterById(request.params.characterId));
});
app.get('/characters/user/{user_id}', function (request, response) {
    return response.send(CharacterQueries.getAllCharactersForUser(request.params.userId));
});
// app.post('/characters/', (request, response) => {
//   createCharacter
// });
// app.put('/characters/{character_id}', (request, response) => {
//   updateCharacterById
// });
// app.put('/characters/{character_id}/death_save', (request, response) => {
//   updateDeathSaves
//   //{successes: int, failures: int}
// });
// app.put('/characters/{character_id}/known_spells', (request, response) => {
//   updateKnownSpells
//   //{zero through nine, list of strings}
// });
// app.put('/characters/{character_id}/known_spells/{level}', (request, response) => {
//   updateKnownSpellsAtLevel
//   //{zero through nine, list of strings}
// });
// app.put('/characters/{character_id}/ability_scores', (request, response) => {
//   updateAbilityScores
//     // strength 	 INT,
//     // dexterity    INT,
//     // constitution INT,
//     // intelligence INT,
//     // wisdom		 INT,
//     // charisma     INT
// });
// app.post('/characters/{character_id}/features_and_traits', (request, response) => {  // todo might want to consider bulk update for this too
//   addNewFeatureOrTrait
//     // title TEXT not null DEFAULT '',
//     // body  TEXT not null default ''
// });
// app.put('/characters/{character_id}/features_and_traits/{id}', (request, response) => {
//   updateFeatureOrTrait
//     // title TEXT not null DEFAULT '',
//     // body  TEXT not null default ''
// });
// app.delete('/characters/{character_id}/features_and_traits/{id}', (request, response) => {
//   deleteFeatureOrTrait
// })
// app.put('/characters/{character_id}/spell_slots/{level}', (request, response) => {
//   updateSpellSlot
//   // max
//   // used
// });
// app.put('/characters/{character_id}/treasure/money', (request, response) => {
//   updateMoney
//   // copper
//   // silver
//   // gold
//   // electrum
// });
// app.put('/characters/{character_id}/treasure/items/{id}', (request, response) => {
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
// app.post('/characters/{character_id}/treasure/items', (request, response) => {
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
// app.delete('/characters/{character_id}/treasure/items/{id}', (request, response) => {
//   deleteTreasureItem
// });
// app.put('/characters/{character_id}/treasure/items/{id}', (request, response) => {
//   updateHitDice
// });
// app.put('/characters/{character_id}/settings', (request, response) => {
//   updateCharacterSettings
// });
// app.post('/characters/{character_id}/hit_dice', (request, response) => {
//   addNewHitDice
// });
// app.delete('/characters/{character_id}/hit_dice/{id}', (request, response) => {
//   deleteHitDice
// });
app.listen(port, function () {
    console.log("App running on port " + port + ".");
});
