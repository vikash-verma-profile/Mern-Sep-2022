var http=require('http');

var MongoClient=require('mongodb').MongoClient;
var url="mongodb://localhost:27017/"
MongoClient.connect(url,function(err,db){
if(err) throw err;
var dbo=db.db("customerDB");
var customerObj={
    customerCode: "101",
    customerName: "Vikash Verma",
    customerAmount: 100
};
dbo.collection("customers").insertOne(customerObj,function(err,res){

    if(err) throw err;
    db.close();
});
});
http.createServer(function(req,res){
res.end('Vikash Verma');
}).listen(8081);