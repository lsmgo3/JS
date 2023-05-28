"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkJWT = void 0;
var jwt = require("jsonwebtoken");
var config_1 = require("../config/config");
exports.checkJWT = function (req, res, next) {
    //Get the jwt token from the head
    var token = req.headers['authorization'];
    var jwtPayload;
    //Try to validate the token and get data
    try {
        jwtPayload = jwt.verify(token, config_1.default.jwtSecret);
        res.locals.jwtPayload = jwtPayload;
    }
    catch (error) {
        //If token is not valid, respond with 401 (unauthorized)
        res.status(401).send();
        return;
    }
    //The token is valid for 1 hour
    //We want to send a new token on every request
    var userId = jwtPayload.userId, email = jwtPayload.email;
    var newToken = jwt.sign({ userId: userId, email: email }, config_1.default.jwtSecret, {
        expiresIn: '1h',
    });
    res.setHeader('token', newToken);
    //Call the next middleware or controller
    next();
};
//# sourceMappingURL=checkJWT.js.map