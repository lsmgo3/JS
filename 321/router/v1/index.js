"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var routes = {};
fs.readdirSync(__dirname + '/').forEach(function (file) {
    if (file.match(/\.ts$/) !== null && file !== 'index.ts') {
        var name = file.replace('.ts', '');
        routes[name] = require('./' + file).default;
    }
});
exports.default = routes;
//# sourceMappingURL=index.js.map