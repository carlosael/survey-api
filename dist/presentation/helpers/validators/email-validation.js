"use strict";
exports.__esModule = true;
exports.EmailValidation = void 0;
var errors_1 = require("../../errors");
var EmailValidation = /** @class */ (function () {
    function EmailValidation(fieldName, emailValidator) {
        this.fieldName = fieldName;
        this.emailValidator = emailValidator;
        this.fieldName = fieldName;
        this.emailValidator = emailValidator;
    }
    EmailValidation.prototype.validate = function (input) {
        var isValid = this.emailValidator.isValid(input[this.fieldName]);
        if (!isValid) {
            return new errors_1.InvalidParamError('email');
        }
    };
    return EmailValidation;
}());
exports.EmailValidation = EmailValidation;
