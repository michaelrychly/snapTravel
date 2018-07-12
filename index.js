"use strict";

const express = require('express');
const PORT = process.env.PORT || 8080
let app = express();
const pg = require('pg');

const pool = new pg.Pool({
user: 'final',
host: '127.0.0.1',
database: 'final',
password: 'final',
port: '5432'});

pool.query("SELECT * from snaptravel", (err, res) => {
res.rows.forEach(row=>{
      console.log(row);
    });
pool.end();
});

//app.get('/', function (req, res) {
//  res.sendFile('index.html');
//});

app.use(express.static('public'));

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
