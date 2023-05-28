"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var lodash_1 = require("lodash");
var index_1 = require("./v1/index");
var checkJWT_1 = require("../middleware/checkJWT");
var Routes = /** @class */ (function () {
    function Routes() {
        this.router = express_1.Router();
    }
    Routes.prototype.v1Routes = function (app) {
        var _this = this;
        app.use('/api/v1', this.router);
        lodash_1.flatMap(Object.entries(index_1.default), function (routeBuilder) {
            var routeBasePath = routeBuilder[0];
            var routeData = routeBuilder[1];
            return routeData.map(function (route) { return (__assign(__assign({}, route), { path: "/" + routeBasePath + route.path })); });
        }).forEach(function (route) {
            var middlewares = [];
            if (route.requiresAuth) {
                middlewares.push(checkJWT_1.checkJWT);
            }
            _this.router[route.method](route.path, middlewares, route.action);
        });
    };
    return Routes;
}());
exports.default = Routes;
//# sourceMappingURL=index.js.map