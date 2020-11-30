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
exports.getSecret = void 0;
var aws_sdk_1 = require("aws-sdk");
var region = "us-east-2";
var client = new aws_sdk_1["default"].SecretsManager({
    region: region
});
var getSecret = function (secretName) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, client.getSecretValue({ SecretId: secretName }, function (err, data) {
                if (err) {
                    if (err.code === 'DecryptionFailureException') {
                        console.error("AWS Secrets Manager can't decrypt the protected secret text using the provided KMS key.");
                    }
                    else if (err.code === 'InternalServiceErrorException') {
                        console.error("An error occurred on the server side.");
                    }
                    else if (err.code === 'InvalidParameterException') {
                        console.error("You provided an invalid value for a parameter.");
                    }
                    else if (err.code === 'InvalidRequestException') {
                        console.error("Provided parameter value is not valid for the current state of the resource.");
                    }
                    else if (err.code === 'ResourceNotFoundException') {
                        console.error("AWS can't find the requested resource.");
                    }
                    throw err;
                }
                else {
                    // Decrypts secret using the associated KMS CMK.
                    // Depending on whether the secret is a string or binary, one of these fields will be populated.
                    if ('SecretString' in data) {
                        return data.SecretString;
                    }
                    else {
                        console.error('using secret binary not supported....');
                        throw new Error('Usage of secret binary not yet supported.');
                        // const buff = new Buffer(data.SecretBinary, 'base64');  // TODO look into type differences with secretbinary and buffers
                        // return buff.toString('ascii');
                    }
                }
            })];
    });
}); };
exports.getSecret = getSecret;
exports["default"] = exports.getSecret;
