export default {
  "swagger": "2.0",
  "info": {
    "version": "1.0.0", //version of the OpenAPI Specification
    "title": "Dnd CRUD",
    "description": "My User Project Application API",
    "license": {
      "name": "MIT",
      "url": "https://opensource.org/licenses/MIT"
    }
  },
  "host": "localhost:8000",
  "basePath": "/",
  "tags": [
    {
      "name": "Character",
      "description": "API for characters in the system"
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
    "/characters/{user_id}": {
      "get": {
        "tags": ["Character"],
        "summary": "Get all Characters for user",
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/CharacterListType"
            }
          }
        }
      }
    },
    "/characters/character/{character_id}": {
      "get": {
        "tags": ["Character"],
        "summary": "Get Character based on character id",
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/CharacterType"
            }
          }
        }
      }
    },
    "/characters/death_save/{id}" : {
      "parameters": [
        {
          "name": "id",
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
            "description": "new number of successful and failed death saves.",
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
          }
        }
      }
    }
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
    "DeathSaveType": {
      "successes": { "type": "integer" },
      "failures": { "type": "integer" },
    }
  }
}

