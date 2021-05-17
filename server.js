const express=require("express");
const bodyParser=require("body-Parser");
const app=express();
app.use(express.urlencoded({extended: true}));
app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res){
    var num1=Number(req.body.n1);
    var num2=Number(req.body.n2);
    var result=num1/(num2*num2);
    res.send("The answer is:"+result);

    res.send("thanks");
});
app.listen(3000,function(){
    console.log("server has started on 3000");
});

