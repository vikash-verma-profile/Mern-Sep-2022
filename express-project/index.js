const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    res.send("Helllo");
});

app.listen(process.env.port || 3000);
console.log("server is running at 3000");