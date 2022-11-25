"use strict";
exports.__esModule = true;
exports.ok = exports.serverError = exports.unauthorized = exports.badRequest = void 0;
var errors_1 = require("../../errors");
var badRequest = function (error) { return ({
    statusCode: 400,
    body: error
}); };
exports.badRequest = badRequest;
var unauthorized = function () { return ({
    statusCode: 401,
    body: new errors_1.UnauthorizedError()
}); };
exports.unauthorized = unauthorized;
var serverError = function (error) { return ({
    statusCode: 500,
    body: new errors_1.ServerError(error.stack)
}); };
exports.serverError = serverError;
var ok = function (data) { return ({
    statusCode: 200,
    body: data
}); };
exports.ok = ok;
