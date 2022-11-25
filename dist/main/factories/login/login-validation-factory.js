"use strict";
exports.__esModule = true;
exports.makeLoginValidation = void 0;
var index_1 = require("../../../presentation/helpers/validators/index");
var email_validator_adapter_1 = require("../../adapters/validators/email-validator-adapter");
var makeLoginValidation = function () {
    var validations = [];
    for (var _i = 0, _a = ['email', 'password']; _i < _a.length; _i++) {
        var field = _a[_i];
        validations.push(new index_1.RequiredFieldsValidation(field));
    }
    validations.push(new index_1.EmailValidation('email', new email_validator_adapter_1.EmailValidatorAdapter()));
    return new index_1.ValidationComposite(validations);
};
exports.makeLoginValidation = makeLoginValidation;
