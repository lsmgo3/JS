var express = require("express");
require('dotenv').config();
var mysql = require("mysql");
var app = express();
var port = 3000;
var con = mysql.createConnection({
    host: process.env.TYPEORM_HOST,
    user: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
});
con.connect(function (err) {
    if (err)
        throw err;
    console.log(process.env.TYPEORM_DATABASE);
});
// app.get('/' , (req,res) => res.send('ehelel'))
// app.listen(port, () => console.log(`ekmlksdflamsf ${port}!`))
//# sourceMappingURL=test.js.map