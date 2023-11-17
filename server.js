const express = require("express");
const app = express(); 
app.get("/",(req,res)=>{
    res.send("x")
})
app.listen(3978,()=>{
    console.log("server is running");
})