"use strict";
exports.__esModule = true;
exports.contentType = void 0;
var contentType = function (req, res, next) {
    res.type('json');
    next();
};
exports.contentType = contentType;
