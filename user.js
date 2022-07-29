var express = require('express')
var app = express()
var fs = require('fs')
var data = require("./users.json")
app.set('port',process.env.PORT || 3000)
app.use(express.urlencoded());

app.get("/home",(req,res)=>{
    res.sendFile('signup.html',{root:'.'})
})

app.post("/signup",(req,res)=>{
    var count=Object.keys(data).length+1;
    var userNum="user"+count;
    data[userNum]={"name":req.body.name,
    "userId":"user"+count,
    "contact":req.body.contact,
    "email":req.body.email
}
    res.redirect("/display");
})

app.get("/display",(req,res)=>{
    res.send(data);
})

app.listen(app.get('port'))