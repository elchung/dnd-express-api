export default {
  "swagger": "2.0",
  "info": {
    "version": "1.0.0", //version of the OpenAPI Specification
    "title": "My User Project CRUD",
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
    "/Characters": {
      "get": {
        "tags": ["Character"],
        "summary": "Get all Characters in system",
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/Users"
            }
          }
        }
      }
    },
    "/Characters/{user_id}": {
      "get": {
        "tags": ["Character"],
        "summary": "Get all Characters for user",
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/Users"
            }
          }
        }
      }
    },
    "/Characters/Character/{character_id}": {
      "get": {
        "tags": ["Character"],
        "summary": "Get Character based on character id",
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/Users"
            }
          }
        }
      }
    }
  },
  "definitions": {
    "User": {
      "required": ["name","_id","companies"],
      "properties": {
        "_id": {"type": "integer","uniqueItems": true},
        "isPublic": {"type": "boolean"},
        "name": {"type": "string"},
        "books": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "name": {"type": "string"},
              "amount": {"type": "number"}
            }
          }
        },
        "companies": {"type": "array","items": {"type": "string"}}
      }
    },
    "Users": {"type": "array","$ref": "#/definitions/User"}
  }
}