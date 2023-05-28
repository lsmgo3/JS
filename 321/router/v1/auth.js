"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AuthController_1 = require("../../controller/AuthController");
var authController = new AuthController_1.default();
var AuthRoutes = [
    {
        path: '/login',
        method: 'post',
        action: authController.logIn,
    },
];
exports.default = AuthRoutes;
//# sourceMappingURL=auth.js.map