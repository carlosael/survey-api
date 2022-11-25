"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.EmailValidatorAdapter = void 0;
var validator_1 = __importDefault(require("validator"));
var EmailValidatorAdapter = /** @class */ (function () {
    function EmailValidatorAdapter() {
    }
    EmailValidatorAdapter.prototype.isValid = function (email) {
        return validator_1["default"].isEmail(email);
    };
    return EmailValidatorAdapter;
}());
exports.EmailValidatorAdapter = EmailValidatorAdapter;
