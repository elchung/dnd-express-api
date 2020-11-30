import * as CharacterTypes from '../../Types/CharacterTypes';

const numberWords = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const numToIdName = ['_', 'one_id', 'two_id', 'three_id', 'four_id', 'five_id', 'six_id', 'seven_id', 'eight_id', 'nine_id'];

export const getCharacterByIdQuery = (characterId: string): string =>
  ` select
    json_build_object(
      'character_id', cd.character_id,
      'user_name', cd.user_name,
      'character_name', cd.character_name,
      'level', cd.level,
      'class', cd.class,
      'background', cd.background,
      'race', cd.race,
      'spellcasting_ability', cd.spellcasting_ability,
      'experience', cd.experience,
      'proficiency_bonus', cd.proficiency_bonus,
      'inspiration', cd.inspiration,
      'armor_class', cd.armor_class,
      'initiative', cd.initiative,
      'speed', cd.speed,
      'max_hp', cd.max_hp,
      'temp_hp', cd.temp_hp,
      'current_hp', cd.current_hp,
      'hp_history', cd.hp_history,
      'skill_proficiencies', cd.skill_proficiencies,
      'saving_throw_proficiencies', cd.saving_throw_proficiencies,
      'skill_expertise', cd.skill_expertise,
      'general_proficiencies', cd.general_proficiencies,
      'known_languages', cd.known_languages,
      'tool_and_other_proficiencie', cd.tool_and_other_proficiencies,
      'prepared_spells', cd.prepared_spells,
      'ability_scores', json_build_object(
        'id', ability_scores.id,
        'strength', ability_scores.strength,
        'dexterity', ability_scores.dexterity,
        'constitution', ability_scores.constitution,
        'intelligence', ability_scores.intelligence,
        'wisdom', ability_scores.wisdom,
        'charisma', ability_scores.charisma
      ),
      'hit_die', json_agg(
        json_build_object(
          'id', hit_dice.id,
          'num_dice', hit_dice.num_dice,
          'dice_type', hit_dice.dice_type,
          'num_used', hit_dice.num_used,
        )
      ),
      'death_save', json_build_object(
        'id', death_saves.id,
        'successes', death_saves.successes,
        'failures', death_saves.failures
      ),
      'known_spells', json_build_object(
        'id', known_spells.id,
        'zero', known_spells.zero,
        'one', known_spells.one,
        'two', known_spells.two,
        'three', known_spells.three,
        'four', known_spells.four,
        'five', known_spells.five,
        'six', known_spells.six,
        'seven', known_spells.seven,
        'eight', known_spells.eight,
        'nine', known_spells.nine
      ),
      'spell_slots', json_build_object(
        'id', spell_slots.id,
        'one', json_build_object(
          'max', spell_slots.one_max,
          'used', spell_slots.one_used
        ),
        'two', json_build_object(
          'max', spell_slots.two_max,
          'used', spell_slots.two_used
        ),
        'three', json_build_object(
          'max', spell_slots.three_max,
          'used', spell_slots.three_used
        ),
        'four', json_build_object(
          'max', spell_slots.four_max,
          'used', spell_slots.four_used
        ),
        'five', json_build_object(
          'max', spell_slots.five_max,
          'used', spell_slots.five_used
        ),
        'six', json_build_object(
          'max', spell_slots.six_max,
          'used', spell_slots.six_used
        ),
        'seven', json_build_object(
          'max', spell_slots.seven_max,
          'used', spell_slots.seven_used
        ),
        'eight', json_build_object(
          'max', spell_slots.eight_max,
          'used', spell_slots.eight_used
        ),
        'nine', json_build_object(
          'max', spell_slots.nine_max,
          'used', spell_slots.nine_used
        )
      ),
      'treasure', json_build_object(
        'id', treasure_table.id,
        'treasure', json_agg(
          json_build_object(
            'id', treasure_items.id,
            'name', treasure_items.name,
            'quantity', treasure_items.quantity,
            'weight_in_lbs', treasure_items.weight_in_lbs,
            'bookmarked', treasure_items.bookmarked,
            'magical', treasure_items.magical,
            'description_text', treasure_items.description_text
          )
        ),
        'money', json_build_object(
          'id', money_table.id,
          'gold', money_table.gold,
          'silver', money_table.silver,
          'electrum', money_table.electrum,
          'copper', money_table.copper
        )
      ),
      'features_and_traits', json_agg(
        json_build_object(
          'title', features_and_traits.title,
          'body', features_and_traits.body,
          'index', features_and_traits.index
        )
      ),
      '_settings', json_build_object(
        'id', settings.id,
        'ability_score_on_top', settings.ability_score_on_top
      )
    )
    from character_data cd
    inner join character_treasure treasure_table on treasure_table.id = cd.character_treasure_id
    inner join character_treasure_money money_table on money_table.id = treasure_table.id
    inner join character_sheet_settings settings on settings.id = cd.character_sheet_settings_id
    inner join character_known_spells known_spells on known_spells.id = cd.character_known_spells_id
    inner join character_death_saves death_saves on death_saves.id = cd.character_death_save_id
    inner join character_ability_scores ability_scores on ability_scores.id = cd.character_ability_scores_id
    inner join character_spell_slots spell_slots on spell_slots.id = cd.character_spell_slots_id
    inner join character_hit_dice hit_dice on hit_dice.character_id = cd.character_id
    inner join character_treasure_items treasure_items on treasure_items.treasure_id = treasure_table.id
    inner join character_features_and_traits features_and_traits on features_and_traits.character_id = cd.character_id
    WHERE cd.character_id = 1
    GROUP BY
    cd.character_id,
      ability_scores.id,
      death_saves.id,
      known_spells.id,
      spell_slots.id,
      treasure_items.id,
      money_table.id,
      treasure_table.id,
      hit_dice.id,
      settings.id;`;

export const getCharacterNamesByUserIdQuery = (userId: string): string =>
  `  SELECT
         json_agg(
             json_build_object(
                 'name', cd.character_name,
                 'id', cd.character_id
             )
         )
     FROM character_data cd
     WHERE cd.user_name = '${userId}'
     GROUP BY cd.character_id;`;

export const updateDeathSavesQuery = (characterId: string, successes: string, failures: string ): string =>
  `UPDATE character_death_saves
   SET successes = ${successes},
       failures = ${failures}
   FROM character_data cd
   WHERE cd.character_id = ${characterId} and cd.character_death_save_id = character_death_saves.id
   RETURNING character_death_saves.successes, character_death_saves.failures;`;

export const updateKnownSpellsQuery = (characterId: string, newKnownSpells: CharacterTypes.KnownSpellsType): string =>
  `UPDATE character_known_spells
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
   FROM character_data cd
   WHERE cd.character_id = ${characterId} and cd.character_known_spells_id = character_known_spells.id
   RETURNING character_known_spells.zero,
       character_known_spells.one,
       character_known_spells.two,
       character_known_spells.three,
       character_known_spells.four,
       character_known_spells.five,
       character_known_spells.six,
       character_known_spells.seven,
       character_known_spells.eight,
       character_known_spells.nine;`;

export const updateKnownSpellsAtLevelQuery = (characterId: string, level: string, newKnownSpells: string[]): string =>
  `UPDATE character_known_spells
   SET ${numberWords[+level]}='{${newKnownSpells.join()}}'
   FROM character_data cd
   WHERE cd.character_id = ${characterId} and cd.character_known_spells_id = character_known_spells.id
   RETURNING character_known_spells.${numberWords[+level]};`;

export const updateAbilityScoresQuery = (characterId: string, newAbilityScores: CharacterTypes.AbilityScoresType): string =>
  `UPDATE character_ability_scores
   SET strength=${newAbilityScores.strength},
       dexterity=${newAbilityScores.dexterity},
       constitution=${newAbilityScores.constitution},
       intelligence=${newAbilityScores.intelligence},
       wisdom=${newAbilityScores.wisdom},
       charisma=${newAbilityScores.charisma}
    FROM character_data cd
    WHERE cd.character_id = ${characterId} and cd.character_ability_scores_id = character_ability_scores.id
    RETURNING character_ability_scores.strength,
        character_ability_scores.dexterity,
        character_ability_scores.constitution,
        character_ability_scores.intelligence,
        character_ability_scores.wisdom,
        character_ability_scores.charisma;`;

//TODO make this work, bulk insert
export const bulkUpdateSpellSlotsQuery = (characterId: string, newSpellSlots: CharacterTypes.SpellSlotsType): string =>
    `UPDATE character_spell_slot_data cssd
     SET one_max=${newSpellSlots.one_max}, one_used=${newSpellSlots.one_used},
         two_max=${newSpellSlots.two_max}, two_used=${newSpellSlots.two_used},
         three_max=${newSpellSlots.three_max}, three_used=${newSpellSlots.three_used},
         four_max=${newSpellSlots.four_max}, four_used=${newSpellSlots.four_used},
         five_max=${newSpellSlots.five_max}, five_used=${newSpellSlots.five_used},
         six_max=${newSpellSlots.six_max}, six_used=${newSpellSlots.six_used},
         seven_max=${newSpellSlots.seven_max}, seven_used=${newSpellSlots.seven_used},
         eight_max=${newSpellSlots.eight_max}, eight_used=${newSpellSlots.eight_used},
         nine_max=${newSpellSlots.nine_max}, nine_used=${newSpellSlots.nine_used}
    FROM character_data cd
    WHERE cd.character_spell_slots_id=cssd.id;`;

export const updateSpellSlotAtLevelQuery = (characterId: string, level: string, newSpellSlots: CharacterTypes.SpellSlotsAtLevelType): string =>
  `UPDATE character_spell_slot_data
   SET ${numberWords[+level]}_max=${newSpellSlots.max}, ${numberWords[+level]}_used=${newSpellSlots.used}
   FROM character_data cd, character_spell_slots spell_slots
   WHERE cd.character_id=${characterId}
       AND cd.character_spell_slots_id=spell_slots.id
       AND spell_slots.${numToIdName[+level]}=character_spell_slot_data.id
   RETURNING character_spell_slot_data.max, character_spell_slot_data.used;`;

export const updateMoneyQuery = (characterId: string, newMoney: CharacterTypes.TreasureMoneyType): string =>
  `UPDATE character_treasure_money
   SET gold=${newMoney.gold}, silver=${newMoney.silver}, electrum=${newMoney.electrum}, copper=${newMoney.copper}
   FROM character_data cd, character_treasure treasure
   WHERE cd.character_id=${characterId}
       AND cd.character_treasure_id=treasure.id
       AND treasure.money_id=character_treasure_money.id
   RETURNING character_treasure_money.gold,
       character_treasure_money.silver,
       character_treasure_money.electrum,
       character_treasure_money.copper;`;

export const createFeatureOrTraitQuery = (characterId: string, newItem: CharacterTypes.FeatureAndTraitsType): string =>
  `INSERT INTO character_features_and_traits (character_id, index, title, body)
   VALUES (${characterId}, ${newItem.index}, ${newItem.title}, ${newItem.body})
   RETURNING character_id, index, title, body;`;

export const bulkCreateFeatureOrTraitQuery = (characterId: string, newItems: CharacterTypes.BulkFeaturesAndTraitsType): string => {
  const queryPrefix = "INSERT INTO character_features_and_traits (character_id, index, title, body) VALUES";
  const parsedVals = newItems.map(item => `(${characterId}, ${item.index}, ${item.title}, ${item.body})`)
  return  `${queryPrefix} ${parsedVals.join(", ")} RETURNING character_id, index, title, body;`;
}

export const updateFeaturesOrTraitsQuery = (updatedItem: CharacterTypes.FeatureAndTraitsType): string =>
  `UPDATE character_features_and_traits cfat
   SET index=${updatedItem.index}, title=${updatedItem.title}, body=${updatedItem.body}
   WHERE cfat.id=${updatedItem.id};`;

//TODO works, but can clean this up
export const bulkUpdateFeaturesOrTraitsQuery = (characterId: string, updatedItems: CharacterTypes.BulkFeaturesAndTraitsType): string => {
  let queryString = `UPDATE character_features_and_traits AS cfat 
    SET index=c.index, title=c.title, body=c.body
    FROM (values `;
  const parsedVals = updatedItems.map(item => `(${item.id}, ${item.index}, ${item.title}, ${item.body})`);
  queryString += parsedVals.join(", ")
  queryString += `) AS c(id, index, title, body)
    WHERE cfat.id=c.id
    RETURNING cfat.id, cfat.character_id, cfat.index, cfat.title, cfat.body;`;
  return queryString;
}

export const getCharIdForFat = (itemId: string): string =>
  `SELECT cfat.character_id
   FROM character_features_and_traits cfat
   WHERE cfat.id=${itemId};`;

export const deleteFeatureOrTraitQuery = (itemId: string): string =>
  `DELETE from character_features_and_traits cfat
   WHERE cfat.id=${itemId}; `;

export const updateTreasureItemQuery = (itemId: string): string =>
  ``;

export const createTreasureItemQuery = (characterId: string, newItem: CharacterTypes.TreasureItemType): string =>
  ``;

export const deleteTreasureItemQuery = (itemId: string): string =>
  ``;

export const updateHitDiceQuery = (hitDieId: string): string =>
  ``;

export const addHitDieQuery = (characterId: string, hitDie: CharacterTypes.HitDieType): string =>
  ``;

export const deleteHitDieQuery = (hitDieId: string): string =>
  ``;

export const updateCharacterSettings = (settings: CharacterTypes.CharacterSettingsType) string =>
  ``;
