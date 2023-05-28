"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
require("reflect-metadata");
var app_1 = require("./app");
var PORT = process.env.PORT || 3000;
var typeorm_1 = require("typeorm");
typeorm_1.createConnection()
    .then(function () {
    console.log('Connected to the db.');
    var app = new app_1.default();
    app.initialize();
    app.defaultApp.listen(PORT, function () {
        console.log('Express server listening on port ' + PORT);
    });
})
    .catch(function (error) { return console.log(error); });
//# sourceMappingURL=server.js.map