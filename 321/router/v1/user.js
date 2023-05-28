"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserController_1 = require("../../controller/UserController");
var userController = new UserController_1.default();
var UserRoutes = [
    {
        path: '/',
        method: 'get',
        action: userController.getAll,
        requiresAuth: true,
    },
    {
        path: '/:id',
        method: 'get',
        action: userController.getOne,
    },
    {
        path: '/',
        method: 'post',
        action: userController.create,
    },
    {
        path: '/:id',
        method: 'put',
        action: userController.update,
    },
    {
        path: '/:id',
        method: 'delete',
        action: userController.remove,
    },
];
exports.default = UserRoutes;
//# sourceMappingURL=user.js.map