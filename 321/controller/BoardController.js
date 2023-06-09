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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var class_validator_1 = require("class-validator");
var board_1 = require("../entity/board");
var BoardController = /** @class */ (function () {
    function BoardController() {
    }
    BoardController.prototype.getAll = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var BoardRepository, Boards, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        BoardRepository = typeorm_1.getRepository(board_1.default);
                        return [4 /*yield*/, BoardRepository.find({
                                select: ['number', 'id', 'name', 'topic', 'tag', 'like', 'unlike'],
                            })];
                    case 1:
                        Boards = _a.sent();
                        return [2 /*return*/, res.status(200).json({
                                data: Boards,
                            })];
                    case 2:
                        error_1 = _a.sent();
                        res.status(500).json(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    BoardController.prototype.getOne = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var userRepository, user, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        userRepository = typeorm_1.getRepository(board_1.default);
                        return [4 /*yield*/, userRepository.findOneOrFail(req.params.id, {
                                select: ['number', 'id', 'name', 'topic', 'tag', 'like', 'unlike'],
                            })];
                    case 1:
                        user = _a.sent();
                        return [2 /*return*/, res.status(200).json({
                                data: user,
                            })];
                    case 2:
                        error_2 = _a.sent();
                        res.status(500).json(error_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    BoardController.prototype.create = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var userRepository, board, errors, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        userRepository = typeorm_1.getRepository(board_1.default);
                        board = new board_1.default();
                        board.number = req.body.number;
                        board.contentid = req.body.contentid;
                        board.topic = req.body.topic;
                        board.tag = req.body.tag;
                        return [4 /*yield*/, class_validator_1.validate(board)];
                    case 1:
                        errors = _a.sent();
                        if (errors.length > 0) {
                            res.status(400).send(errors);
                            return [2 /*return*/];
                        }
                        board.hashPassword();
                        return [4 /*yield*/, userRepository.save(board)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, res.status(200).json({
                                data: board,
                                message: 'User saved successfully',
                            })];
                    case 3:
                        error_3 = _a.sent();
                        res.status(500).json(error_3);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    BoardController.prototype.update = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var userRepository, user, dataToUpdate, errors, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        userRepository = typeorm_1.getRepository(board_1.default);
                        return [4 /*yield*/, userRepository.findOneOrFail(req.params.id)];
                    case 1:
                        user = _a.sent();
                        dataToUpdate = __assign({}, req.body);
                        delete dataToUpdate.password;
                        delete dataToUpdate.id;
                        delete dataToUpdate.email;
                        user = __assign(__assign({}, user), dataToUpdate);
                        return [4 /*yield*/, class_validator_1.validate(user)];
                    case 2:
                        errors = _a.sent();
                        if (errors.length > 0) {
                            res.status(400).send(errors);
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, userRepository.save(user)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, res.status(200).send({
                                data: user,
                                message: 'User updated successfully',
                            })];
                    case 4:
                        error_4 = _a.sent();
                        res.status(500).json(error_4);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    BoardController.prototype.remove = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var userRepository, user, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        userRepository = typeorm_1.getRepository(board_1.default);
                        return [4 /*yield*/, userRepository.findOneOrFail(req.params.id)];
                    case 1:
                        user = _a.sent();
                        return [4 /*yield*/, userRepository.remove(user)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, res.status(200).json({
                                data: user,
                            })];
                    case 3:
                        error_5 = _a.sent();
                        res.status(500).json(error_5);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return BoardController;
}());
exports.default = BoardController;
//# sourceMappingURL=BoardController.js.map