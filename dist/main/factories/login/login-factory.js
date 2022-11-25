"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.makeLoginController = void 0;
var env_1 = __importDefault(require("../../config/env"));
var db_authentication_1 = require("../../../data/usecases/authentication/db-authentication");
var bcrypt_adapter_1 = require("../../../infra/criptography/bcrypt-adapter/bcrypt-adapter");
var jwt_adapter_1 = require("../../../infra/criptography/jwt-adapter/jwt-adapter");
var account_mongo_repository_1 = require("../../../infra/db/mongodb/account/account-mongo-repository");
var log_mongo_repository_1 = require("../../../infra/db/mongodb/log/log-mongo-repository");
var login_controller_1 = require("../../../presentation/controllers/login/login-controller");
var log_controller_decorator_1 = require("../../decorators/log-controller-decorator");
var login_validation_factory_1 = require("./login-validation-factory");
var makeLoginController = function () {
    var salt = 12;
    var accountMongoRepository = new account_mongo_repository_1.AccountMongoRepository();
    var jwtAdapter = new jwt_adapter_1.JwtAdapter(env_1["default"].jwtSecret);
    var bcryptAdapter = new bcrypt_adapter_1.BcryptAdapter(salt);
    var dbAuthentication = new db_authentication_1.DbAuthentication(accountMongoRepository, bcryptAdapter, jwtAdapter, accountMongoRepository);
    var loginController = new login_controller_1.LoginController((0, login_validation_factory_1.makeLoginValidation)(), dbAuthentication);
    var logMongoRepository = new log_mongo_repository_1.LogMongoRepository();
    return new log_controller_decorator_1.LogControllerDecorator(loginController, logMongoRepository);
};
exports.makeLoginController = makeLoginController;
