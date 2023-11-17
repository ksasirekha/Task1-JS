const express=require("express");
const app=express();
const path=require("path");

app.get("/sasi",(req,res)=>{
    res.sendFile(path.join(__dirname,"1.html"));
})
app.get("/rekha",(req,res)=>{
    res.sendFile(path.join(__dirname,"2.html"));
})
app.get("/sisa",(req,res)=>{
    res.sendFile(path.join(__dirname,"3.html"));
})
app.listen(3978 ,()=>{
    console.log("server is running");
})