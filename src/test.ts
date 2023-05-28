const express  = require("express")
require('dotenv').config();
const mysql  = require("mysql")
const app  = express()
const port = 3000


const con = mysql.createConnection({
    host : process.env.TYPEORM_HOST,
    user : process.env.TYPEORM_USERNAME,
    password : process.env.TYPEORM_PASSWORD,
    database : process.env.TYPEORM_DATABASE,
   
})

con.connect(function(err) {
    if (err) throw err;
    console.log(process.env.TYPEORM_DATABASE,__dirname,'../')
} )



app.get('/', function(req, res) {
    console.log(__dirname + '../../fronted/main.ts')
    //   res.sendfile(__dirname + '../../fronted/src/main.ts');
});

app.listen(port); 


// app.get('/' , (req,res) => res.send('ehelel'))

// app.listen(port, () => console.log(`ekmlksdflamsf ${port}!`))

