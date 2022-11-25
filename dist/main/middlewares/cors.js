"use strict";
exports.__esModule = true;
exports.cors = void 0;
var cors = function (req, res, next) {
    res.set('access-control-allow-origin', '*');
    res.set('access-control-allow-headers', '*');
    res.set('access-control-allow-methods', '*');
    next();
};
exports.cors = cors;
