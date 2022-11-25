"use strict";
exports.__esModule = true;
var index_1 = require("../middlewares/index");
exports["default"] = (function (app) {
    app.use(index_1.bodyParser);
    app.use(index_1.cors);
    app.use(index_1.contentType);
});
