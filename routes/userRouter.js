let express=require("express"),
    userRouter=express.Router(),
    mongoose=require("mongoose");

require("../models/user");
let userModel=mongoose.model("User");



//Enable CORS
userRouter.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
    });


userRouter.post("/register",(req,res,next)=>{

    let newUser=userModel({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email,
        password:req.body.password
    })
    newUser.save((error,result)=>{
        if(!error)
        {
            res.status(201).send(result);
        }
        else
        {
            res.status(400).send('error with database');
            console.log(err.message)
        }
    })
})

userRouter.post("/login",(req,res,next)=>{

    userModel.findOne({email:req.body.email,password:req.body.password},(error,result)=>{

        if(!error){
            if(result)
            {
                res.status(200).send(result);
            }
            else
            {
                res.status(404).send('Sorry cant find that!');;
            }
        }
        else
        {
            console.log(error.message);
            res.status(400).send('error with database!');

        }
    })
})

userRouter.post("/addItem/:item/:id",(req,res,next)=>{
    
    userModel.update(
        { _id: req.params.id }, 
        { $push: { list: req.params.item } },(error,result)=>{

            if(!error)
            {
                if(result)
                {
                    res.status(201).send(result);
                }
                else
                {
                    res.status(404).send('Sorry cant find that!');
                }
            }
            else
            {
                console.log(error.message);
                res.status(400).send('error with database!');;
            }
        });
    })



module.exports=userRouter;
