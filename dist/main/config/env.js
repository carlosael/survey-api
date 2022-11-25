"use strict";
var _a, _b;
exports.__esModule = true;
exports["default"] = {
    mongoUrl: process.env.MONGO_URL || 'mongodb://localhost:27017/clean-node-api',
    port: (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 5050,
    jwtSecret: (_b = process.env.JWT_SECRET) !== null && _b !== void 0 ? _b : 'tj671=-5K'
};
