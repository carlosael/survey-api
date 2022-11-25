"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var middlewares_1 = __importDefault(require("./middlewares"));
var routes_1 = __importDefault(require("./routes"));
var app = (0, express_1["default"])();
(0, middlewares_1["default"])(app);
(0, routes_1["default"])(app);
exports["default"] = app;
