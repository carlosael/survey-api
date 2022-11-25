"use strict";
exports.__esModule = true;
exports.RequiredFieldsValidation = void 0;
var errors_1 = require("../../errors");
var RequiredFieldsValidation = /** @class */ (function () {
    function RequiredFieldsValidation(fieldName) {
        this.fieldName = fieldName;
        this.fieldName = fieldName;
    }
    RequiredFieldsValidation.prototype.validate = function (input) {
        if (!input[this.fieldName]) {
            return new errors_1.MissingParamError(this.fieldName);
        }
    };
    return RequiredFieldsValidation;
}());
exports.RequiredFieldsValidation = RequiredFieldsValidation;
