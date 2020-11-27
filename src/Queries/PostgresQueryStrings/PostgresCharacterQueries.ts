export const getCharacterByIdQuery = ( characterId: number ): string => "select " + 
    "json_build_object( " +
    "'character_id', cd.character_id, " +
    "'user_name', cd.user_name, " +
    "'character_name', cd.character_name, " +
    "'level', cd.level, " +
    "'class', cd.class, " +
    "'background', cd.background, " +
    "'race', cd.race, " +
    "'spellcasting_ability', cd.spellcasting_ability, " +
    "'experience', cd.experience, " +
    "'proficiency_bonus', cd.proficiency_bonus, " +
    "'inspiration', cd.inspiration, " +
    "'armor_class', cd.armor_class, " +
    "'initiative', cd.initiative, " +
    "'speed', cd.speed, " +
    "'max_hp', cd.max_hp, " +
    "'temp_hp', cd.temp_hp, " +
    "'current_hp', cd.current_hp, " +
    "'hp_history', cd.hp_history, " +
    "'skill_proficiencies', cd.skill_proficiencies, " +
    "'saving_throw_proficiencies', cd.saving_throw_proficiencies, " +
    "'skill_expertise', cd.skill_expertise, " +
    "'general_proficiencies', cd.general_proficiencies, " +
    "'known_languages', cd.known_languages, " +
    "'tool_and_other_proficiencie', cd.tool_and_other_proficiencies, " +
    "'prepared_spells', cd.prepared_spells, " +
    "'ability_scores', json_build_object( " +
        "'id', ability_scores.id, " +
        "'strength', ability_scores.strength, " +
        "'dexterity', ability_scores.dexterity, " +
        "'constitution', ability_scores.constitution, " +
        "'intelligence', ability_scores.intelligence, " +
        "'wisdom', ability_scores.wisdom, " +
        "'charisma', ability_scores.charisma " +
    "), " +
    "'death_save', json_build_object( " +
        "'id', death_saves.id, " +
        "'successes', death_saves.successes, " +
        "'failures', death_saves.failures " +
        "), " +
    "'hit_die', json_agg( " +
        "json_build_object( " +
        "'id', hit_dice.id, " +
        "'num_dice', hit_dice.num_dice, " +
        "'dice_type', hit_dice.dice_type, " +
        "'num_used', hit_dice.num_used, " +
        ") " +
    "), " +
    "'known_spells', json_build_object( " +
        "'id', known_spells.id, " +
        "'zero', known_spells.zero, " +
        "'one', known_spells.one, " +
        "'two', known_spells.two, " +
        "'three', known_spells.three, " +
        "'four', known_spells.four, " +
        "'five', known_spells.five, " +
        "'six', known_spells.six, " +
        "'seven', known_spells.seven, " +
        "'eight', known_spells.eight, " +
        "'nine', known_spells.nine " +
    "), " +
    "'spell_slots', json_build_object( " +
        "'id', spell_slots.id, " +
        "'one', json_build_object( " +
        "'id', spell_slot_data_one.id, " +
        "'max', spell_slot_data_one.max, " +
        "'used', spell_slot_data_one.used " +
        "), " +
        "'two', json_build_object( " +
        "'id', spell_slot_data_two.id, " +
        "'max', spell_slot_data_two.max, " +
        "'used', spell_slot_data_two.used " +
        "), " +
        "'three', json_build_object( " +
        "'id', spell_slot_data_three.id, " +
        "'max', spell_slot_data_three.max, " +
        "'used', spell_slot_data_three.used " +
        "), " +
        "'four', json_build_object( " +
        "'id', spell_slot_data_four.id, " +
        "'max', spell_slot_data_four.max, " +
        "'used', spell_slot_data_four.used " +
        "), " +
        "'five', json_build_object( " +
        "'id', spell_slot_data_five.id, " +
        "'max', spell_slot_data_five.max, " +
        "'used', spell_slot_data_five.used " +
        "), " +
        "'six', json_build_object( " +
        "'id', spell_slot_data_six.id, " +
        "'max', spell_slot_data_six.max, " +
        "'used', spell_slot_data_six.used " +
        "), " +
        "'seven', json_build_object( " +
        "'id', spell_slot_data_seven.id, " +
        "'max', spell_slot_data_seven.max, " +
        "'used', spell_slot_data_seven.used " +
        "), " +
        "'eight', json_build_object( " +
        "'id', spell_slot_data_eight.id, " +
        "'max', spell_slot_data_eight.max, " +
        "'used', spell_slot_data_eight.used " +
        "), " +
        "'nine', json_build_object( " +
        "'id', spell_slot_data_nine.id, " +
        "'max', spell_slot_data_nine.max, " +
        "'used', spell_slot_data_nine.used " +
        ") " +
    "), " +
    "'treasure', json_build_object( " +
        "'id', treasure_table.id, " +
        "'treasure', json_agg( " +
        "json_build_object( " +
            "'id', treasure_items.id, " +
            "'name', treasure_items.name, " +
            "'quantity', treasure_items.quantity, " +
            "'weight_in_lbs', treasure_items.weight_in_lbs, " +
            "'bookmarked', treasure_items.bookmarked, " +
            "'magical', treasure_items.magical, " +
            "'description_text', treasure_items.description_text " +
        ")  " +
        "), " +
        "'money', json_build_object( " +
        "'id', money_table.id, " +
        "'gold', money_table.gold, " +
        "'silver', money_table.silver, " +
        "'electrum', money_table.electrum, " +
        "'copper', money_table.copper " +
        ") " +
    "), " +
    "'features_and_traits', json_agg( " +
        "json_build_object( " +
        "'title', features_and_traits_description.title, " +
        "'body', features_and_traits_description.body " +
        ") " +
    "), " +
    "'_settings', json_build_object( " +
        "'id', settings.id, " +
        "'ability_score_on_top', settings.ability_score_on_top " +
    ") " +
    ") " +
    "from character_data cd " +
    "inner join character_treasure treasure_table on treasure_table.id = cd.character_treasure_id " +
    "inner join character_treasure_money money_table on money_table.id = treasure_table.id " +
    "inner join character_sheet_settings settings on settings.id = cd.character_sheet_settings_id " +
    "inner join character_known_spells known_spells on known_spells.id = cd.character_known_spells_id " +
    "inner join character_death_saves death_saves on death_saves.id = cd.character_death_save_id " +
    "inner join character_ability_scores ability_scores on ability_scores.id = cd.character_ability_scores_id " +
    "inner join character_spell_slots spell_slots on spell_slots.id = cd.character_spell_slots_id " +
    "inner join character_hit_dice hit_dice on hit_dice.character_id = cd.character_id " +
    "inner join character_spell_slot_data spell_slot_data_one on spell_slot_data_one.id = spell_slots.one_id and spell_slots.id = cd.character_spell_slots_id " +
    "inner join character_spell_slot_data spell_slot_data_two on spell_slot_data_two.id = spell_slots.two_id and spell_slots.id = cd.character_spell_slots_id " +
    "inner join character_spell_slot_data spell_slot_data_three on spell_slot_data_three.id = spell_slots.three_id and spell_slots.id = cd.character_spell_slots_id " +
    "inner join character_spell_slot_data spell_slot_data_four on spell_slot_data_four.id = spell_slots.four_id and spell_slots.id = cd.character_spell_slots_id " +
    "inner join character_spell_slot_data spell_slot_data_five on spell_slot_data_five.id = spell_slots.five_id and spell_slots.id = cd.character_spell_slots_id " +
    "inner join character_spell_slot_data spell_slot_data_six on spell_slot_data_six.id = spell_slots.six_id and spell_slots.id = cd.character_spell_slots_id " +
    "inner join character_spell_slot_data spell_slot_data_seven on spell_slot_data_seven.id = spell_slots.seven_id and spell_slots.id = cd.character_spell_slots_id " +
    "inner join character_spell_slot_data spell_slot_data_eight on spell_slot_data_eight.id = spell_slots.eight_id and spell_slots.id = cd.character_spell_slots_id " +
    "inner join character_spell_slot_data spell_slot_data_nine on spell_slot_data_nine.id = spell_slots.nine_id and spell_slots.id = cd.character_spell_slots_id " +
    "inner join character_treasure_items treasure_items on treasure_items.treasure_id = treasure_table.id " +
    "inner join character_features_and_traits features_and_traits on features_and_traits.character_id = cd.character_id " +
    "inner join character_features_and_traits_description features_and_traits_description on features_and_traits_description.id = features_and_traits.character_features_and_traits_description_id and features_and_traits.character_id = cd.character_id " +
    `WHERE cd.character_id = ${characterId} ` +
    "GROUP BY  " +
    "cd.character_id,  " +
    "ability_scores.id,  " +
    "death_saves.id,  " +
    "known_spells.id,  " +
    "spell_slots.id,  " +
    "spell_slot_data_one.id, " +
    "spell_slot_data_two.id, " +
    "spell_slot_data_three.id, " +
    "spell_slot_data_four.id, " +
    "spell_slot_data_five.id, " +
    "spell_slot_data_six.id, " +
    "spell_slot_data_seven.id, " +
    "spell_slot_data_eight.id, " +
    "spell_slot_data_nine.id, " +
    "treasure_items.id, " +
    "money_table.id, " +
    "treasure_table.id, " +
    "hit_die.id, " + 
    "settings.id;"
