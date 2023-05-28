"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BoardController_1 = require("../../controller/BoardController");
var boardController = new BoardController_1.default();
var BoardRoutes = [
    {
        path: '/',
        method: 'get',
        action: boardController.getAll,
        requiresAuth: true,
    },
    {
        path: '/:id',
        method: 'get',
        action: boardController.getOne,
    },
    {
        path: '/',
        method: 'post',
        action: boardController.create,
    },
    {
        path: '/:id',
        method: 'put',
        action: boardController.update,
    },
    {
        path: '/:id',
        method: 'delete',
        action: boardController.remove,
    },
];
exports.default = BoardRoutes;
//# sourceMappingURL=board.js.map