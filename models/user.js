let mongoose=require("mongoose");

let userSchema=new mongoose.Schema({
    firstName:String,
    lastName:String,
    email:String,
    password:String,
    list:[]
})

mongoose.model("User",userSchema);