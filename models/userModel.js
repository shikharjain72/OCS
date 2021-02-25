const mongoose=require("mongoose");

const userSchema=mongoose.Schema(
    {
        username:String,
        password:String,
        plan:String,
        duration:Number
    })

const userModel=mongoose.model("user",userSchema);

module.exports=userModel;