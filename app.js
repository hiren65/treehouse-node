//create web server
var http = require('http');
var router = require('./router.js');
http.createServer(function(req,res){

//res.write('whatever you right \n');
    router.home(req,res);
    router.user(req,res);

}).listen(3000);

console.log('server running on port 3000');
//create web server
///////

// var http = require('http');
// var router = require('./router.js');
// http.createServer(function(req,res){
//
// //res.write('whatever you right \n');
//     router.home(req,res);
//     router.user(req,res);
//
// }).listen(3000);
//
// console.log('server running on port 3000');
