"use strict";
exports.__esModule = true;
exports.makeSignUpValidation = void 0;
var index_1 = require("../../../presentation/helpers/validators/index");
var email_validation_1 = require("../../../presentation/helpers/validators/email-validation");
var email_validator_adapter_1 = require("../../adapters/validators/email-validator-adapter");
var makeSignUpValidation = function () {
    var validations = [];
    for (var _i = 0, _a = ['name', 'email', 'password', 'passwordConfirmation']; _i < _a.length; _i++) {
        var field = _a[_i];
        validations.push(new index_1.RequiredFieldsValidation(field));
    }
    validations.push(new index_1.CompareFieldsValidation('password', 'passwordConfirmation'));
    validations.push(new email_validation_1.EmailValidation('email', new email_validator_adapter_1.EmailValidatorAdapter()));
    return new index_1.ValidationComposite(validations);
};
exports.makeSignUpValidation = makeSignUpValidation;
