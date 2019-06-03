var express = require('express');
var app = express();
var fs = require("fs");

app.get('/getBooks', function (req, res) {
   fs.readFile("books-test-collection-2.json", 'utf8', function (err, data) {
      console.log( data );
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.end( data );
   });
})

app.get('/:id', function (req, res) {
    // First read existing users.
    fs.readFile("books-test-collection-1.json", 'utf8', function (err, data) {
       var users = JSON.parse( data );
       var user = users["primary_isbn" + req.params.primary_isbn] 
       console.log( user );
       res.end( JSON.stringify(user));
    });
 })

var server = app.listen(8001, function () {
   var host = server.address().address
   var port = server.address().port
   //cconsole.log("Example app listening at http://%s:%s", host, port)
})