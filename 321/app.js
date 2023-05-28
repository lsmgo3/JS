"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = require("body-parser");
var helmet = require("helmet");
var cors = require("cors");
var index_1 = require("./router/index");
var App = /** @class */ (function () {
    function App() {
        this.routes = new index_1.default();
    }
    App.prototype.initialize = function () {
        this.defaultApp = express();
        this.config();
        this.setRouter();
        console.log(this.config(), this.setRouter());
    };
    App.prototype.config = function () {
        // support application/json type post data
        this.defaultApp.use(bodyParser.json()); //support application/x-www-form-urlencoded post data
        this.defaultApp.use(bodyParser.urlencoded({ extended: false }));
        this.defaultApp.use(cors());
        this.defaultApp.use(helmet());
    };
    App.prototype.setRouter = function () {
        this.routes.v1Routes(this.defaultApp);
        console.log(this.routes.v1Routes);
    };
    return App;
}());
exports.default = App;
//# sourceMappingURL=app.js.map