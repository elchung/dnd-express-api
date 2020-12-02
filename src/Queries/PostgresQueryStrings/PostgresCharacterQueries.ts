import * as CharacterTypes from '../../Types/CharacterTypes';

const numberWords = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const numToIdName = ['', 'oneId', 'twoId', 'threeId', 'fourId', 'fiveId', 'sixId', 'sevenId', 'eightId', 'nineId'];
const abilityScores = ['strength', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma'];
const spellSlotKeys = ["oneMax", "oneUsed", "twoMax", "twoUsed", "threeMax", "threeUsed", "fourMax", "fourUsed", "fiveMax", "fiveUsed", "sixMax", "sixUsed", "sevenMax", "sevenUsed", "eightMax", "eightUsed", "nineMax", "nineUsed"]
const characterTextKeys = [
  {dtoName: "username", type: 'text', entityName: 'username'},
  {dtoName: "characterName", type: 'text', entityName: 'characterName'},
  {dtoName: "level", type: 'text', entityName: 'level'},
  {dtoName: "class", type: 'text', entityName: 'class'},
  {dtoName: "background", type: 'text', entityName: 'background'},
  {dtoName: "race", type: 'text', entityName: 'race'},
  {dtoName: "spellcastingAbility", type: 'text', entityName: 'spellcastingAbility'},
]
const characterIntKeys = [
  "experience",
  "proficiencyBonus",
  "inspiration",
  "armorClass",
  "initiative",
  "speed",
  "maxHp",
  "tempHp",
  "currentHp",
]

const characterIntListKeys = [
  "hpHistory",
]
const characterTextListKeys = [
  "skillProficiencies",
  "savingThrowProficiencies",
  "skillExpertise",
  "generalProficiencies",
  "knownLanguages",
  "toolAndOtherProficiencies",
  "preparedSpells",
]
const characterReferenceKeys = [
  "abilityScores",
  "hitDice",
  "deathSaves",
  "knownSpells",
  "spellSlots",
  "featuresAndTraits",
  "treasure",
  "Settings",
]



export const getCharacterByIdQuery = (characterId: string): string =>
  ` select
    json_build_object(
      'characterId', cd.characterId,
      'username', cd.username,
      'characterName', cd.characterName,
      'level', cd.level,
      'class', cd.class,
      'background', cd.background,
      'race', cd.race,
      'spellcastingAbility', cd.spellcastingAbility,
      'experience', cd.experience,
      'proficiencyBonus', cd.proficiencyBonus,
      'inspiration', cd.inspiration,
      'armorClass', cd.armorClass,
      'initiative', cd.initiative,
      'speed', cd.speed,
      'maxHp', cd.maxHp,
      'tempHp', cd.tempHp,
      'currentHp', cd.currentHp,
      'hpHistory', cd.hpHistory,
      'skillProficiencies', cd.skillProficiencies,
      'savingThrowProficiencies', cd.savingThrowProficiencies,
      'skillExpertise', cd.skillExpertise,
      'generalProficiencies', cd.generalProficiencies,
      'knownLanguages', cd.knownLanguages,
      'toolAndOtherProficiencie', cd.toolAndOtherProficiencies,
      'preparedSpells', cd.preparedSpells,
      'abilityScores', json_build_object(
        'id', abilityScores.id,
        'strength', abilityScores.strength,
        'dexterity', abilityScores.dexterity,
        'constitution', abilityScores.constitution,
        'intelligence', abilityScores.intelligence,
        'wisdom', abilityScores.wisdom,
        'charisma', abilityScores.charisma
      ),
      'hitDie', json_agg(
        json_build_object(
          'id', hitDice.id,
          'numDice', hitDice.numDice,
          'diceType', hitDice.diceType,
          'numUsed', hitDice.numUsed,
        )
      ),
      'deathSave', json_build_object(
        'id', deathSaves.id,
        'successes', deathSaves.successes,
        'failures', deathSaves.failures
      ),
      'knownSpells', json_build_object(
        'id', knownSpells.id,
        'zero', knownSpells.zero,
        'one', knownSpells.one,
        'two', knownSpells.two,
        'three', knownSpells.three,
        'four', knownSpells.four,
        'five', knownSpells.five,
        'six', knownSpells.six,
        'seven', knownSpells.seven,
        'eight', knownSpells.eight,
        'nine', knownSpells.nine
      ),
      'spellSlots', json_build_object(
        'id', spellSlots.id,
        'oneMax', spellSlots.oneMax,
        'oneUsed', spellSlots.oneUsed,
        'twoMax', spellSlots.twoMax,
        'twoUsed', spellSlots.twoUsed,
        'threeMax', spellSlots.threeMax,
        'threeUsed', spellSlots.threeUsed,
        'fourMax', spellSlots.fourMax,
        'fourUsed', spellSlots.fourUsed,
        'fiveMax', spellSlots.fiveMax,
        'fiveUsed', spellSlots.fiveUsed,
        'sixMax', spellSlots.sixMax,
        'sixUsed', spellSlots.sixUsed,
        'sevenMax', spellSlots.sevenMax,
        'sevenUsed', spellSlots.sevenUsed,
        'eightMax', spellSlots.eightMax,
        'eightUsed', spellSlots.eightUsed,
        'nineMax', spellSlots.nineMax,
        'nineUsed', spellSlots.nineUsed
      ),
      'treasure', json_build_object(
        'id', treasureTable.id,
        'treasure', json_agg(
          json_build_object(
            'id', treasureItems.id,
            'name', treasureItems.name,
            'quantity', treasureItems.quantity,
            'weightInLbs', treasureItems.weightInLbs,
            'bookmarked', treasureItems.bookmarked,
            'magical', treasureItems.magical,
            'descriptionText', treasureItems.descriptionText
          )
        ),
        'money', json_build_object(
          'id', moneyTable.id,
          'gold', moneyTable.gold,
          'silver', moneyTable.silver,
          'electrum', moneyTable.electrum,
          'copper', moneyTable.copper
        )
      ),
      'featuresAndTraits', json_agg(
        json_build_object(
          'title', featuresAndTraits.title,
          'body', featuresAndTraits.body,
          'index', featuresAndTraits.index
        )
      ),
      'Settings', json_build_object(
        'id', settings.id,
        'abilityScoreOnTop', settings.abilityScoreOnTop
      )
    )
    from characterData cd
    inner join characterTreasure treasureTable on treasureTable.id = cd.characterTreasureId
    inner join characterTreasureMoney moneyTable on moneyTable.id = treasureTable.id
    inner join characterSheetSettings settings on settings.id = cd.characterSheetSettingsId
    inner join characterKnownSpells knownSpells on knownSpells.id = cd.characterKnownSpellsId
    inner join characterDeathSaves deathSaves on deathSaves.id = cd.characterDeathSaveId
    inner join characterAbilityScores abilityScores on abilityScores.id = cd.characterAbilityScoresId
    inner join characterSpellSlots spellSlots on spellSlots.id = cd.characterSpellSlotsId
    inner join characterHitDice hitDice on hitDice.characterId = cd.characterId
    inner join characterTreasureItems treasureItems on treasureItems.treasureId = treasureTable.id
    inner join characterFeaturesAndTraits featuresAndTraits on featuresAndTraits.characterId = cd.characterId
    WHERE cd.characterId = 1
    GROUP BY
    cd.characterId,
      abilityScores.id,
      deathSaves.id,
      knownSpells.id,
      spellSlots.id,
      treasureItems.id,
      moneyTable.id,
      treasureTable.id,
      hitDice.id,
      settings.id;`;

export const createCharacterQuery = (newCharacter: CharacterTypes.CharacterDataType): string =>
  `WITH characterAbilityScoresQuery as (
    INSERT INTO characterAbilityScores ( 
        strength, dexterity, constitution, intelligence, wisdom, charisma 
    ) VALUES (
        ${abilityScores.map(score => newCharacter.abilityScores?.[score] != null ? newCharacter.abilityScores[score] : "null").join(", ")}
    ) RETURNING id
), characterDeathSavesQuery as (
    INSERT INTO characterDeathSaves (
         successes, failures
    ) VALUES (
        ${newCharacter.deathSaves?.successes }, 
        ${newCharacter.deathSaves?.failures}
    ) RETURNING id
), characterKnownSpellsQuery as (
    INSERT INTO characterKnownSpells (
      zero, one, two, three, four, five, six, seven, eight, nine
    ) VALUES (
        ${numberWords.map(num => newCharacter.knownSpells?.[num] != null ? `'{${newCharacter.knownSpells[num].join(", ")}}'` : "null").join(", ")}
    ) RETURNING id
), characterSheetSettingsQuery as (
    INSERT INTO characterSheetSettings (
        abilityScoreOnTop
    ) VALUES (
        ${newCharacter.Settings.abilityScoreOnTop}
    ) RETURNING id
), characterSpellSlotsQuery as (
    INSERT INTO characterSpellSlots (
        ${spellSlotKeys.join(", ")}     
    ) VALUES (
        ${spellSlotKeys.map(slotName => newCharacter.spellSlots?.[slotName] != null ? newCharacter.spellSlots[slotName] : "null").join(", ")}
    ) RETURNING id
), characterTreasureMoneyQuery as (  --will insert items later
    INSERT INTO characterTreasureMoney (
        gold, silver, electrum, copper
    ) VALUES (
        ${['gold', 'silver', 'electrum', 'copper'].map(moneyType => newCharacter.treasure?.[moneyType] != null ? newCharacter.treasure[moneyType] : "null").join(", ")}
    ) RETURNING id
), characterTreasureQuery as (
    INSERT INTO characterTreasure (
        moneyId
    ) VALUES (
       (SELECT id from characterTreasureMoneyQuery)
    ) RETURNING id
), characterDataQuery as (
    INSERT INTO characterData (
        username,
        characterName,
        level,
        class,
        background,
        race,
        spellcastingAbility,
        experience,
        proficiencyBonus,
        inspiration,
        armorClass,
        initiative,
        speed,
        maxHp,
        tempHp,
        currentHp,
        skillProficiencies,
        savingThrowProficiencies,
        generalProficiencies,
        knownLanguages,
        preparedSpells,
        characterAbilityScoresId,
        characterDeathSaveId,
        characterKnownSpellsId,
        characterSpellSlotsId,
        characterTreasureId,
        characterSheetSettingsId
    ) VALUES (
        'elchung',
        'Binky',
        4,
        'Wizard',
        'Haunted One',
        'Human (Variant)',
        'Intelligence',
        2700,
        2,
        0,
        12,
        7,
        30,
        18,  --maxHp
        0,  --tempHp
        0,  --currentHp
        '{Arcana, Investigation, Medicine, Religion}',  --skillProficiencies
        '{Intelligence, Wisdom}',  --savingThrowProficiencies
        '{Dagger, Dart, Light Crossbow, Quarterstaff, Sling}',  --generalProficiencies
        '{Elvish, Gnome, Halfing, Draconic}', --knownLanguages
        '{Charm Person, Fog Cloud, Magic Missile, Shield, Invisibiity, Web}',  --preparedSpells
        (SELECT id from characterAbilityScoresQuery),  --characterAbilityScoresId
        (SELECT id from characterDeathSavesQuery), --characterDeathSaveId
        (SELECT id from characterKnownSpellsQuery), --characterKnownSpellsId
        (SELECT id from characterSpellSlotsQuery), --characterSpellSlotsId
        (SELECT id from characterTreasureQuery), --characterTreasureId
        (SELECT id from characterSheetSettingsQuery) --characterSheetSettingsId
        )
    RETURNING characterId
), characterFeaturesAndTraitsQuery as (
  INSERT INTO characterFeaturesAndTraits (characterId, index, title, body)
      VALUES (
          (SELECT characterId from characterDataQuery),
          0,
          'Alert',
        'You can''t be surprised while conscious. You have a +5 bonus to initiative rolls. Other creatures also don''t gain advantage on attack rolls against you as a result of being hidden from you.'
      )
)
INSERT INTO characterHitDice (numDice, diceType, numUsed, characterId)
    VALUES (4, 6, 0, (SELECT characterId from characterDataQuery));
`

export const getCharacterNamesByUserIdQuery = (userId: string): string =>
  `  SELECT
         json_agg(
             json_build_object(
                 'name', cd.characterName,
                 'id', cd.characterId
             )
         )
     FROM characterData cd
     WHERE cd.username = '${userId}'
     GROUP BY cd.characterId;`;

export const updateDeathSavesQuery = (characterId: string, successes: string, failures: string ): string =>
  `UPDATE characterDeathSaves
   SET successes = ${successes},
       failures = ${failures}
   FROM characterData cd
   WHERE cd.characterId = ${characterId} and cd.characterDeathSaveId = characterDeathSaves.id
   RETURNING characterDeathSaves.successes, characterDeathSaves.failures;`;

export const updateKnownSpellsQuery = (characterId: string, newKnownSpells: CharacterTypes.KnownSpellsType): string =>
  `UPDATE characterKnownSpells
   SET zero='{${newKnownSpells.zero.join()}}',
       one='{${newKnownSpells.one.join()}}',
       two='{${newKnownSpells.two.join()}}',
       three='{${newKnownSpells.three.join()}}',
       four='{${newKnownSpells.four.join()}}',
       five='{${newKnownSpells.five.join()}}',
       six='{${newKnownSpells.six.join()}}',
       seven='{${newKnownSpells.seven.join()}}',
       eight='{${newKnownSpells.eight.join()}}',
       nine='{${newKnownSpells.nine.join()}}'
   FROM characterData cd
   WHERE cd.characterId = ${characterId} and cd.characterKnownSpellsId = characterKnownSpells.id
   RETURNING characterKnownSpells.zero,
       characterKnownSpells.one,
       characterKnownSpells.two,
       characterKnownSpells.three,
       characterKnownSpells.four,
       characterKnownSpells.five,
       characterKnownSpells.six,
       characterKnownSpells.seven,
       characterKnownSpells.eight,
       characterKnownSpells.nine;`;

export const updateKnownSpellsAtLevelQuery = (characterId: string, level: string, newKnownSpells: string[]): string =>
  `UPDATE characterKnownSpells
   SET ${numberWords[+level]}='{${newKnownSpells.join()}}'
   FROM characterData cd
   WHERE cd.characterId = ${characterId} and cd.characterKnownSpellsId = characterKnownSpells.id
   RETURNING characterKnownSpells.${numberWords[+level]};`;

export const updateAbilityScoresQuery = (characterId: string, newAbilityScores: CharacterTypes.AbilityScoresType): string =>
  `UPDATE characterAbilityScores
   SET strength=${newAbilityScores.strength},
       dexterity=${newAbilityScores.dexterity},
       constitution=${newAbilityScores.constitution},
       intelligence=${newAbilityScores.intelligence},
       wisdom=${newAbilityScores.wisdom},
       charisma=${newAbilityScores.charisma}
    FROM characterData cd
    WHERE cd.characterId = ${characterId} and cd.characterAbilityScoresId = characterAbilityScores.id
    RETURNING characterAbilityScores.strength,
        characterAbilityScores.dexterity,
        characterAbilityScores.constitution,
        characterAbilityScores.intelligence,
        characterAbilityScores.wisdom,
        characterAbilityScores.charisma;`;

//TODO this works, bulk inserts all rows but opting ot use more flexible update
// export const bulkUpdateSpellSlotsQuery = (characterId: string, newSpellSlots: CharacterTypes.SpellSlotsType): string =>
//     `UPDATE characterSpellSlots css
//      SET oneMax=${newSpellSlots.oneMax}, oneUsed=${newSpellSlots.oneUsed},
//          twoMax=${newSpellSlots.twoMax}, twoUsed=${newSpellSlots.twoUsed},
//          threeMax=${newSpellSlots.threeMax}, threeUsed=${newSpellSlots.threeUsed},
//          fourMax=${newSpellSlots.fourMax}, fourUsed=${newSpellSlots.fourUsed},
//          fiveMax=${newSpellSlots.fiveMax}, fiveUsed=${newSpellSlots.fiveUsed},
//          sixMax=${newSpellSlots.sixMax}, sixUsed=${newSpellSlots.sixUsed},
//          sevenMax=${newSpellSlots.sevenMax}, sevenUsed=${newSpellSlots.sevenUsed},
//          eightMax=${newSpellSlots.eightMax}, eightUsed=${newSpellSlots.eightUsed},
//          nineMax=${newSpellSlots.nineMax}, nineUsed=${newSpellSlots.nineUsed}
//     FROM characterData cd
//     WHERE cd.characterSpellSlotsId=css.id;`;

export const bulkUpdateSpellSlotsQuery = (characterId: string, newSpellSlots: CharacterTypes.SpellSlotsType): string => {
  const queryPrefix = `UPDATE characterSpellSlots css SET`;
  const queryValues = Object.keys(newSpellSlots).map(newKey => `${newKey}=${newSpellSlots[newKey]}`).join(", ")
  const querySuffix = ` FROM characterData cd WHERE cd.characterSpellSlotsId=${characterId}`;
  return queryPrefix + queryValues + querySuffix;
}

export const updateSpellSlotAtLevelQuery = (characterId: string, level: string, newSpellSlots: CharacterTypes.SpellSlotsAtLevelType): string =>
  `UPDATE characterSpellSlotData
   SET ${numberWords[+level]}Max=${newSpellSlots.max}, ${numberWords[+level]}Used=${newSpellSlots.used}
   FROM characterData cd, characterSpellSlots spellSlots
   WHERE cd.characterId=${characterId}
       AND cd.characterSpellSlotsId=spellSlots.id
       AND spellSlots.${numToIdName[+level]}=characterSpellSlotData.id
   RETURNING characterSpellSlotData.max, characterSpellSlotData.used;`;

export const updateMoneyQuery = (characterId: string, newMoney: CharacterTypes.TreasureMoneyType): string =>
  `UPDATE characterTreasureMoney
   SET gold=${newMoney.gold}, silver=${newMoney.silver}, electrum=${newMoney.electrum}, copper=${newMoney.copper}
   FROM characterData cd, characterTreasure treasure
   WHERE cd.characterId=${characterId}
       AND cd.characterTreasureId=treasure.id
       AND treasure.moneyId=characterTreasureMoney.id
   RETURNING characterTreasureMoney.gold,
       characterTreasureMoney.silver,
       characterTreasureMoney.electrum,
       characterTreasureMoney.copper;`;

export const createFeatureOrTraitQuery = (characterId: string, newItem: CharacterTypes.FeatureAndTraitsType): string =>
  `INSERT INTO characterFeaturesAndTraits (characterId, index, title, body)
   VALUES (${characterId}, ${newItem.index}, ${newItem.title}, ${newItem.body})
   RETURNING characterId, index, title, body;`;

export const bulkCreateFeatureOrTraitQuery = (characterId: string, newItems: CharacterTypes.BulkFeaturesAndTraitsType): string => {
  const queryPrefix = "INSERT INTO characterFeaturesAndTraits (characterId, index, title, body) VALUES ";
  const queryValues = newItems.map(item => `(${characterId}, ${item.index}, ${item.title}, ${item.body})`).join(", ")
  const querySuffix = " RETURNING characterId, index, title, body";
  return queryPrefix + queryValues + querySuffix;
}

export const updateFeaturesOrTraitsQuery = (updatedItem: CharacterTypes.FeatureAndTraitsType): string =>
  `UPDATE characterFeaturesAndTraits cfat
   SET index=${updatedItem.index}, title=${updatedItem.title}, body=${updatedItem.body}
   WHERE cfat.id=${updatedItem.id};`;

export const bulkUpdateFeaturesOrTraitsQuery = (characterId: string, updatedItems: CharacterTypes.BulkFeaturesAndTraitsType): string => {
  const queryPrefix = `UPDATE characterFeaturesAndTraits AS cfat 
    SET index=c.index, title=c.title, body=c.body
    FROM (values `;
  const queryValues = updatedItems.map(item => `(${item.id}, ${item.index}, ${item.title}, ${item.body})`).join(", ");
  const querySuffix = `) AS c(id, index, title, body)
    WHERE cfat.id=c.id
    RETURNING cfat.id, cfat.characterId, cfat.index, cfat.title, cfat.body;`;
  return queryPrefix + queryValues + querySuffix;
}

export const getCharIdForFat = (itemId: string): string =>
  `SELECT cfat.characterId
   FROM characterFeaturesAndTraits cfat
   WHERE cfat.id=${itemId};`;

export const deleteFeatureOrTraitQuery = (itemId: string): string =>
  `DELETE from characterFeaturesAndTraits cfat
   WHERE cfat.id=${itemId}; `;

//todo need to test
export const updateTreasureItemQuery = (itemId: string, newItem: CharacterTypes.TreasureItemType): string => {
  const queryPrefix = `UPDATE characterTreasureItems cti SET `;
  const querySet = Object.keys(newItem).map(itemKey => `${itemKey}=${newItem[itemKey]}`).join(", ");
  const querySuffix = ` WHERE cti.id=${itemId};`
  return queryPrefix + querySet + querySuffix;
 };

//todo need to test
export const createTreasureItemQuery = (characterId: string, newItem: CharacterTypes.TreasureItemType): string => {
  const queryPre = `INSERT INTO characterTreasureItems cti (`;
  const queryInsert = Object.keys(newItem).join(", ");
  const queryPrefix = `${queryPre}${queryInsert}) VALUES (`;
  const queryValues = Object.keys(newItem).map(itemKey => newItem[itemKey]).join(", ");
  const querySuffix = "RETURNING cti.id, cti.id, cti.quantity, cti.weightInLbs, cti.bookmarked, cti.magical, cti.descriptionText;"
  return queryPrefix + queryValues + querySuffix;
};

//todo need to test
export const deleteTreasureItemQuery = (itemId: string): string =>
  `DELETE from characterTreasureItems cti
   WHERE cti.id=${itemId}; `;

//todo need to test
export const updateHitDiceQuery = (newHitDie: CharacterTypes.HitDieType): string =>
  `UPDATE characterHitDice
   SET numDice=${newHitDie.numDice}, diceType=${newHitDie.diceType}, numUsed=${newHitDie.numUsed}
   WHERE characterHitDice.id=${newHitDie.id};
  `;

//todo need to test
export const addHitDieQuery = (characterId: string, hitDie: CharacterTypes.HitDieType): string =>
  `INSERT INTO characterHitDice (numDice, diceType, numUsed, characterId)
   VALUES (${hitDie.numDice}, ${hitDie.diceType}, ${hitDie.numUsed}, ${characterId})
   RETURNING characterId, numUsed, diceType, numDice;`;

//todo need to test
export const deleteHitDieQuery = (hitDieId: string): string =>
  `DELETE from characterHitDice chd
   WHERE chd.id=${hitDieId}; `;

//todo need to test
export const updateCharacterSettings = (characterId: string, settings: CharacterTypes.SettingsType): string => {
  const queryPrefix = `UPDATE characterSheetSettings css SET`;
  const queryValues = Object.keys(settings).map(newKey => `${newKey}=${settings[newKey]}`).join(", ")
  const querySuffix = ` FROM characterData cd WHERE cd.characterId=${characterId} and cd.characterSheetSettingsId=css.id`;
  return queryPrefix + queryValues + querySuffix;
};
