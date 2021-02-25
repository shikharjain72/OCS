const express=require("express");
const userModel=require("./models/userModel");
const app=express();

app.use(express.json());
app.use(express.text());

//Create User
app.post("/create",async (req,res)=>{

})

//Update User-Plan
app.post("/update/username/:username",async (req,res)=>{

})

//Update User-Duration
app.post("/update/username/:username",async (req,res)=>{

})



