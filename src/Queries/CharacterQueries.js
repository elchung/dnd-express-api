"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.getAllCharactersForUser = exports.getCharacterById = void 0;
var pg_1 = require("pg");
var AwsSecretManager_1 = require("../Utils/AwsSecretManager");
var PostgresCharacterQueries_1 = require("./PostgresQueryStrings/PostgresCharacterQueries");
// import { response } from 'express';
var pool = new pg_1.Pool({
    user: await AwsSecretManager_1.getSecret('dnd-db-user'),
    host: await AwsSecretManager_1.getSecret('dnd-db-host'),
    database: await AwsSecretManager_1.getSecret('dnd-db-name'),
    password: await AwsSecretManager_1.getSecret('dnd-db-user-password'),
    port: parseInt(await AwsSecretManager_1.getSecret('dnd-db-port'))
});
var getCharacterById = function (characterId) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, pool.query(PostgresCharacterQueries_1.getCharacterByIdQuery, [characterId])];
    });
}); };
exports.getCharacterById = getCharacterById;
var getAllCharactersForUser = function (userId) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, pool.query(PostgresCharacterQueries_1.getCharacterNamesByUserIdQuery, [userId])];
    });
}); };
exports.getAllCharactersForUser = getAllCharactersForUser;
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
    getCharacterById: exports.getCharacterById
};
