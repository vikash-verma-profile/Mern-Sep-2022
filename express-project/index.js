const express=require('express');
const app=express();

app.set('view engine','jade')

app.get('/',function(req,res){
res.render('index');
});
app.get('/home',(req,res)=>{
    res.send("Helllo, This is home router");
});
app.get('/login',(req,res)=>{
    res.send("Helllo, This is login router");
});
app.get('/profile',(req,res)=>{
    res.send("Helllo, This is profile router");
});

app.listen(process.env.port || 3000);
console.log("server is running at 3000");