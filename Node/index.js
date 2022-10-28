var http = require('http');
var express=require('express');
var app=express();

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/"

app.get('/customers',function(req,res){
    var data;
    MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            var dbo = db.db("customerDB");
            dbo.collection("customers").findOne({}, function (err, res) {
                if (err) throw err;
                data=res;
                console.log(res);
                db.close();
            });
        });
    res.end(data);
});
//for insertion
// MongoClient.connect(url,function(err,db){
// if(err) throw err;
// var dbo=db.db("customerDB");
// var customerObj={
//     customerCode: "101",
//     customerName: "Vikash Verma",
//     customerAmount: 100
// };
// dbo.collection("customers").insertOne(customerObj,function(err,res){

//     if(err) throw err;
//     db.close();
// });
// });

//for finding the record
// MongoClient.connect(url, function (err, db) {
//     if (err) throw err;
//     var dbo = db.db("customerDB");
//     dbo.collection("customers").findOne({}, function (err, res) {
//         if (err) throw err;
//         console.log(res.customerName);
//         db.close();
//     });
// });

//for querting a specific detail
// MongoClient.connect(url, function (err, db) {
//     if (err) throw err;
//     var dbo = db.db("customerDB");
//     var query={customerName:"Vikash Verma"}
//     dbo.collection("customers").find(query).toArray(function (err, res) {
//         if (err) throw err;
//         console.log(res);
//         db.close();
//     });
// });

// http.createServer(function (req, res) {
//     res.end('Vikash Verma');
// }).listen(8081);

var server=app.listen(8081,function(){
    // var host=server.address().address
    // var port=server.address.port
});