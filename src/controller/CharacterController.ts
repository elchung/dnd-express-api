import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {CharacterData} from "../db/Entity/CharacterData";
import {CharacterAbilityScores} from "../db/Entity/CharacterAbilityScores";
import {CharacterTreasure} from "../db/Entity/CharacterTreasure";
import {CharacterFeaturesAndTraits} from "../db/Entity/CharacterFeaturesAndTraits";
import {CharacterSpellSlots} from "../db/Entity/CharacterSpellSlots";
import {CharacterKnownSpells} from "../db/Entity/CharacterKnownSpells";
import {CharacterDeathSaves} from "../db/Entity/CharacterDeathSaves";
import {CharacterSettings} from "../db/Entity/CharacterSheetSettings";
import {CharacterHitDice} from "../db/Entity/CharacterHitDice";
import {CharacterTreasureItem} from "../db/Entity/CharacterTreasureItems";
import {CharacterTreasureMoney} from "../db/Entity/CharacterTreasureMoney";

export class CharacterController {
  private characterRepository = getRepository(CharacterData);
  private abilityScoreRepository = getRepository(CharacterAbilityScores);
  private treasureRepository = getRepository(CharacterTreasure);
  private featuresAndTraitsRepository = getRepository(CharacterFeaturesAndTraits);
  private spellSlotsRepository = getRepository(CharacterSpellSlots);
  private knownSpellsRepository = getRepository(CharacterKnownSpells);
  private deathSavesRepository = getRepository(CharacterDeathSaves);
  private settingsRepository = getRepository(CharacterSettings);
  private hitDiceRepository = getRepository(CharacterHitDice);
  private treasureItemsRepository = getRepository(CharacterTreasureItem);
  private treasureMoneyRepository = getRepository(CharacterTreasureMoney);

  //TODO test
  getCharacterById = async (request: Request, response: Response, next: NextFunction) => {
    return this.characterRepository.findOne(request.params.characterId);
  };

  //TODO test
  getCharactersByUsername = async (request: Request, response: Response, next: NextFunction) => {
    return this.characterRepository.find({username: request.params.username})
  };

  //TODO test
  createCharacter = async (request: Request, response: Response, next: NextFunction) => {

  };

  //TODO test
  updateCharacterById = async (request: Request, response: Response, next: NextFunction) => {
    // let updatedCharacter = this.characterRepository.find(request.params.characterId);
    // //need to figure out if we give full update skeleton or not
    // // do update magic
    // //
    //
    // this.characterRepository.save(updatedCharacter);
  };

  //TODO test
  updateCharacterDeathSaves = async (request: Request, response: Response, next: NextFunction) => {
    // let deathSaves = this.deathSavesRepository.find({character.characterId: request.params.characterId})
  };

  //TODO test
  updateKnownSpells = async (request: Request, response: Response, next: NextFunction) => {

  };

  //TODO test
  updateKnownSpellsAtLevel = async (request: Request, response: Response, next: NextFunction) => {

  };

  //TODO test
  updateAbilityScores = async (request: Request, response: Response, next: NextFunction) => {

  };

  //TODO test
  createFeatureAndTrait = async (request: Request, response: Response, next: NextFunction) => {

  };

  //TODO test
  createFeaturesAndTraits = async (request: Request, response: Response, next: NextFunction) => {

  };

  //TODO test
  updateFeatureAndTrait = async (request: Request, response: Response, next: NextFunction) => {

  };

  //TODO test
  updateFeaturesAndTraits = async (request: Request, response: Response, next: NextFunction) => {

  };

  //TODO test
  deleteFeatureAndTrait = async (request: Request, response: Response, next: NextFunction) => {

  };

  //TODO test
  updateSpellSlots = async (request: Request, response: Response, next: NextFunction) => {

  };

  //TODO test
  updateSpellSlotsAtLevel = async (request: Request, response: Response, next: NextFunction) => {

  };

  //TODO test
  updateTreasureMoney = async (request: Request, response: Response, next: NextFunction) => {

  };

  //TODO test
  updateTreasureItem = async (request: Request, response: Response, next: NextFunction) => {

  };

  //TODO test
  createTreasureItem = async (request: Request, response: Response, next: NextFunction) => {

  };

  //TODO test
  deleteTreasureItem = async (request: Request, response: Response, next: NextFunction) => {

  };

  //TODO test
  updateCharacterSettings = async (request: Request, response: Response, next: NextFunction) => {

  };

  //TODO test
  createHitDice = async (request: Request, response: Response, next: NextFunction) => {

  };

  //TODO test
  deleteHitDice = async (request: Request, response: Response, next: NextFunction) => {

  };

  //TODO test
  updateHitDice = async (request: Request, response: Response, next: NextFunction) => {

  };
};
