let express=require("express"),
    mongoose=require("mongoose"),
    userRouter=require("./routes/userRouter"),
    body_parser=require("body-parser").json();
    let app=express();

const port=process.env.PORT || 8080;
app.listen(port,()=>{
    console.log("I'm listining")
})

app.use(body_parser);

mongoose.connect("mongodb://localhost:27017/TodoList",{ useNewUrlParser: true });

app.use("/api/user",userRouter);
