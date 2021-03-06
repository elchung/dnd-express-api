//TODO return schema needs to be updated. delete should probably just return ack, etc.
export default {
  "swagger": "2.0",
  "info": {
    "version": "1.0.0", //version of the OpenAPI Specification
    "title": "Dnd CRUD",
    "description": "Dnd Character API",
    "license": {
      "name": "MIT",
      "url": "https://opensource.org/licenses/MIT"
    }
  },
  "host": "localhost:3000",
  "basePath": "/",
  "tags": [
    {
      "name": "Character",
      "description": "API for Characters in the system"
    },
    {
      "name": "Users",
      "description": "API for Users in the system"
    }
  ],
  "schemes": ["http"],
  "consumes": ["application/json"],
  "produces": ["application/json"],
  "paths": {
    "/characters/user/{username}": {
      "parameters": [
        {
          "name": "username",
          "in": "path",
          "required": true,
          "description": "username to get",
          "type": "string"
        }
      ],
      "get": {
        "tags": ["Character"],
        "summary": "Get all Characters for user",
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/CharacterListType"
            }
          },
          "404": {
            "description": "Not Found"
          }
        }
      }
    },
    "/characters/{characterId}": {
      "parameters": [
        {
          "name": "characterId",
          "in": "path",
          "required": true,
          "description": "ID of character to get",
          "type": "integer"
        }
      ],
      "get": {
        "tags": ["Character"],
        "summary": "Get Character based on character id",
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/CharacterType"
            }
          },
          "404": {
            "description": "Not Found"
          }
        }
      }
    },
    "/characters/{characterId}/death_saves": {
      "parameters": [
        {
          "name": "characterId",
          "in": "path",
          "required": true,
          "description": "ID of character to update",
          "type": "integer"
        }
      ],
      "put": {
        "summary": "Update death save for given character",
        "tags": ["Character"],
        "parameters": [
          {
            "name": "death_saves",
            "in": "body",
            "description": "New number of successful and failed death saves.",
            "schema": {
              "$ref": "#/definitions/DeathSaveType"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Death saves are updated",
            "schema": {
              "$ref": "#/definitions/DeathSaveType"
            }
          },
          "404": {
            "description": "Not Found"
          }
        }
      }
    },
    "/characters/{characterId}/known_spells": {
      "parameters": [
        {
          "name": "characterId",
          "in": "path",
          "required": true,
          "description": "ID of character to update",
          "type": "integer"
        }
      ],
      "put": {
        "summary": "Update known spells for given character",
        "tags": ["Character"],
        "parameters": [
          {
            "name": "known_spells",
            "in": "body",
            "description": "New list of known spells for all levels.",
            "schema": {
              "$ref": "#/definitions/KnownSpellsType"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Updated Known Spells",
            "schema": {
              "$ref": "#/definitions/KnownSpellsType"
            }
          },
          "404": {
            "description": "Not Found"
          }
        }
      }
    },
    "/characters/{characterId}/known_spells/{level}": {
      "parameters": [
        {
          "name": "characterId",
          "in": "path",
          "required": true,
          "description": "ID of character to update",
          "type": "integer"
        },
        {
          "name": "level",
          "in": "path",
          "required": true,
          "description": "level of spells to update",
          "type": "integer"
        }
      ],
      "put": {
        "summary": "Update known spells at a specific level for given character",
        "tags": ["Character"],
        "parameters": [
          {
            "name": "known_spells_at_level",
            "in": "body",
            "description": "Updated known Spells for a specific level.",
            "schema": {
              "$ref": "#/definitions/KnownSpellsAtLevelType"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Updated Known Spells",
            "schema": {
              "$ref": "#/definitions/KnownSpellsAtLevelType"
            }
          },
          "404": {
            "description": "Not Found"
          }
        }
      }
    },
    "/characters/{characterId}/ability_scores": {
      "parameters": [
        {
          "name": "characterId",
          "in": "path",
          "required": true,
          "description": "ID of character to update",
          "type": "integer"
        }
      ],
      "put": {
        "summary": "Update ability scores for given character",
        "tags": ["Character"],
        "parameters": [
          {
            "name": "ability_scores",
            "in": "body",
            "description": "Updated ability scores.",
            "schema": {
              "$ref": "#/definitions/AbilityScoreType"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Updated Ability Scores",
            "schema": {
              "$ref": "#/definitions/AbilityScoreType"
            }
          },
          "404": {
            "description": "Not Found"
          }
        }
      }
    },
    "/characters/{characterId}/features_and_traits": {
      "parameters": [
        {
          "name": "characterId",
          "in": "path",
          "required": true,
          "description": "ID of character to add new feature or trait to",
          "type": "integer"
        }
      ],
      "put": {
        "summary": "Update features or traits given character and trait id",
        "tags": ["Character"],
        "parameters": [
          {
            "name": "feature_or_trait",
            "in": "body",
            "description": "Updated feature or trait.",
            "schema": {
              "$ref": "#/definitions/FeaturesAndTraitsType"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Updated feature or trait.",
            "schema": {
              "$ref": "#/definitions/FeaturesAndTraitsType"
            }
          },
          "404": {
            "description": "Not Found"
          }
        }
      },
      "post": {
        "summary": "Add a new feature or trait given character",
        "tags": ["Character"],
        "parameters": [
          {
            "name": "feature_or_trait",
            "in": "body",
            "description": "New feature or trait.",
            "schema": {
              "$ref": "#/definitions/FeaturesAndTraitsType"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Created feature or trait.",
            "schema": {
              "$ref": "#/definitions/FeaturesAndTraitsType"
            }
          },
          "404": {
            "description": "Not Found"
          }
        }
      }
    },
    "/characters/{characterId}/features_and_traits/{fatId}": {
      "parameters": [
        {
          "name": "characterId",
          "in": "path",
          "required": true,
          "description": "ID of character to associated with feature or trait",
          "type": "integer"
        },
        {
          "name": "fatId",
          "in": "path",
          "required": true,
          "description": "ID of feature and trait to delete",
          "type": "integer"
        }
      ],
      "delete": {
        "summary": "Delete a feature or trait given character",
        "tags": ["Character"],
        "responses": {
          "200": {
            "description": "Deleted feature or trait.",
            "schema": {
              "$ref": "#/definitions/FeaturesAndTraitsType"
            }
          },
          "404": {
            "description": "Not Found"
          }
        }
      },
    },
    "/characters/{characterId}/spell_slots/{level}": {
      "parameters": [
        {
          "name": "characterId",
          "in": "path",
          "required": true,
          "description": "ID of character to update",
          "type": "integer"
        },
        {
          "name": "level",
          "in": "path",
          "required": true,
          "description": "level of spell slots to update",
          "type": "integer"
        }
      ],
      "put": {
        "summary": "Update spell slots at a specific level for given character",
        "tags": ["Character"],
        "parameters": [
          {
            "name": "spell_slots_at_level",
            "in": "body",
            "description": "Updated spell slot values for a specific level.",
            "schema": {
              "$ref": "#/definitions/SpellSlotsAtLevelType"
            },
            "examples": {
              "$ref": "#/definitions/SpellSlotsAtLevelType"
            }
          },
        ],
        "responses": {
          "200": {
            "description": "Updated Known Spells",
            "schema": {
              "$ref": "#/definitions/SpellSlotsAtLevelType"
            }
          },
          "404": {
            "description": "Not Found"
          }
        }
      }
    },
    "/characters/{characterId}/treasure/money": {
      "parameters": [
        {
          "name": "characterId",
          "in": "path",
          "required": true,
          "description": "ID of character to update",
          "type": "integer"
        }
      ],
      "put": {
        "summary": "Update money for given character",
        "tags": ["Character"],
        "parameters": [
          {
            "name": "money",
            "in": "body",
            "description": "Updated money.",
            "schema": {
              "$ref": "#/definitions/TreasureMoneyType"
            },
            "examples": {
              "$ref": "#/definitions/TreasureMoneyType"
            }
          },
        ],
        "responses": {
          "200": {
            "description": "Updated Money",
            "schema": {
              "$ref": "#/definitions/TreasureMoneyType"
            }
          },
          "404": {
            "description": "Not Found"
          }
        }
      }
    },
    "/characters/{characterId}/treasure/items/{id}": {

    },
    "/characters/:characterId/treasure/items": {

    },
    "/characters/:characterId/treasure/items/:id": {

    },
    "/characters/:characterId/settings": {

    },
    "/characters/:characterId/hitDice": {

    },
    "/characters/:characterId/hitDice/:id": {

    },
  },
  "definitions": {
    "CharacterType": {
      "character_id": { "type": "integer", "uniqueItems": true },
      "user_name": { "type": "string" },
      "character_name": { "type": "string" },
      "level": { "type": "integer" },
      "class": { "type": "string" },
      "background": { "type": "string" },
      "race": { "type": "string" },
      "spellcasting_ability": { "type": "string" },
      "experience": { "type": "integer" },
      "proficiency_bonus": { "type": "integer" },
      "inspiration": { "type": "integer" },
      "armor_class": { "type": "integer" },
      "initiative": { "type": "integer" },
      "speed": { "type": "integer" },
      "max_hp": { "type": "integer" },
      "temp_hp": { "type": "integer" },
      "current_hp": { "type": "integer" },
      "hp_history": { "type": "array", "items": { "type": "number" } },
      "skill_proficiencies": { "type": "array", "items": { "type": "string" } },
      "saving_throw_proficiencies": { "type": "array", "items": { "type": "string" } },
      "skill_expertise": { "type": "array", "items": { "type": "string" } },
      "general_proficiencies": { "type": "array", "items": { "type": "string" } },
      "known_languages": { "type": "array", "items": { "type": "string" } },
      "tool_and_other_proficiencie": { "type": "array", "items": { "type": "string" } },
      "prepared_spells": { "type": "array", "items": { "type": "string" } },
      "ability_scores": {
        "id": { "type": "integer", "uniqueItems": true },
        "strength": { "type": "integer" },
        "dexterity": { "type": "integer" },
        "constitution": { "type": "integer" },
        "intelligence": { "type": "integer" },
        "wisdom": { "type": "integer" },
        "charisma": { "type": "integer" },
      },
      "death_save": {
        "id": { "type": "integer", "uniqueItems": true },
        "successes": { "type": "integer" },
        "failures": { "type": "integer" },
      },
      "known_spells": {
        "id": { "type": "integer", "uniqueItems": true },
        "zero": { "type": "array", "items": { "type": "string" } },
        "one": { "type": "array", "items": { "type": "string" } },
        "two": { "type": "array", "items": { "type": "string" } },
        "three": { "type": "array", "items": { "type": "string" } },
        "four": { "type": "array", "items": { "type": "string" } },
        "five": { "type": "array", "items": { "type": "string" } },
        "six": { "type": "array", "items": { "type": "string" } },
        "seven": { "type": "array", "items": { "type": "string" } },
        "eight": { "type": "array", "items": { "type": "string" } },
        "nine": { "type": "array", "items": { "type": "string" } },
      },
      "spell_slots": {
        "id": { "type": "integer", "uniqueItems": true },
        "one": {
          "id": { "type": "integer", "uniqueItems": true },
          "max": { "type": "integer" },
          "used": { "type": "integer" },
        },
        "two": {
          "id": { "type": "integer", "uniqueItems": true },
          "max": { "type": "integer" },
          "used": { "type": "integer" },
        },
        "three": {
          "id": { "type": "integer", "uniqueItems": true },
          "max": { "type": "integer" },
          "used": { "type": "integer" },
        },
        "four": {
          "id": { "type": "integer", "uniqueItems": true },
          "max": { "type": "integer" },
          "used": { "type": "integer" },
        },
        "five": {
          "id": { "type": "integer", "uniqueItems": true },
          "max": { "type": "integer" },
          "used": { "type": "integer" },
        },
        "six": {
          "id": { "type": "integer", "uniqueItems": true },
          "max": { "type": "integer" },
          "used": { "type": "integer" },
        },
        "seven": {
          "id": { "type": "integer", "uniqueItems": true },
          "max": { "type": "integer" },
          "used": { "type": "integer" },
        },
        "eight": {
          "id": { "type": "integer", "uniqueItems": true },
          "max": { "type": "integer" },
          "used": { "type": "integer" },
        },
        "nine": {
          "id": { "type": "integer", "uniqueItems": true },
          "max": { "type": "integer" },
          "used": { "type": "integer" },
        },
      },
      "features_and_traits": {
        "id": { "type": "integer", "uniqueItems": true },
        "title": { "type": "string" },
        "body": { "type": "string" }
      },
      "treasure": {
        "id": { "type": "integer", "uniqueItems": true },
        "treasure": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "name": { "type": "string" },
              "id": { "type": "integer", "uniqueItems": true },
              "quantity": { "type": "integer" },
              "weight_in_lbs": { "type": "integer" },
              "bookmarked": { "type": "boolean" },
              "magical": { "type": "boolean" },
              "description_text": { "type": "string" },
            }
          }
        },
        "money": {
          "id": { "type": "integer", "uniqueItems": true },
          "gold": { "type": "integer" },
          "silver": { "type": "integer" },
          "electrum": { "type": "integer" },
          "copper": { "type": "integer" },
        },
      },
      "_settings": {
        "id": { "type": "integer", "uniqueItems": true },
        "ability_score_on_top": { "type": "boolean" },
      }
    },
    "CharacterListType": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "name": { "type": "string" },
          "id": { "type": "integer", "uniqueItems": true }
        }
      },
    },
    "HitDiceType": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": { "type": "integer" },
          "num_dice": { "type": "integer" },
          "dice_type": { "type": "integer" },
          "num_used": { "type": "integer" },
        },
      },
    },
    "DeathSaveType": {
      "successes": { "type": "integer" },
      "failures": { "type": "integer" },
    },
    "AbilityScoreType": {
      "strength": { "type": "integer" },
      "dexterity": { "type": "integer" },
      "constitution": { "type": "integer" },
      "intelligence": { "type": "integer" },
      "wisdom": { "type": "integer" },
      "charisma": { "type": "integer" },
    },
    "KnownSpellsType": {
      "zero": { "type": "array", "items": { "type": "string" } },
      "one": { "type": "array", "items": { "type": "string" } },
      "two": { "type": "array", "items": { "type": "string" } },
      "three": { "type": "array", "items": { "type": "string" } },
      "four": { "type": "array", "items": { "type": "string" } },
      "five": { "type": "array", "items": { "type": "string" } },
      "six": { "type": "array", "items": { "type": "string" } },
      "seven": { "type": "array", "items": { "type": "string" } },
      "eight": { "type": "array", "items": { "type": "string" } },
      "nine": { "type": "array", "items": { "type": "string" } },
    },
    "KnownSpellAtLevelType": {
      "type": "array",
      "items": { "type": "string" },
    },
    "FeaturesAndTraitsType": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "title": { "type": "string" },
          "body": { "type": "string" },
          "index": { "type": "number"},
          "id": { "type": "integer", "uniqueItems": true },
        }
      },
    },
    "SpellSlotsAtLevelType": {
      "max": { "type": "integer" },
      "used": { "type": "integer" },
    },
    "TreasureItemsType": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "name": { "type": "string" },
          "id": { "type": "integer", "uniqueItems": true },
          "quantity": { "type": "integer" },
          "weight_in_lbs": { "type": "integer" },
          "bookmarked": { "type": "boolean" },
          "magical": { "type": "boolean" },
          "description_text": { "type": "string" },
        }
      }
    },
    "TreasureMoneyType": {
      "gold": { "type": "integer" },
      "silver": { "type": "integer" },
      "electrum": { "type": "integer" },
      "copper": { "type": "integer" },
    },
    "CharacterSettingsType": {
      "ability_score_on_top": { "type": "boolean" },
    }
  }
}



