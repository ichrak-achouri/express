const express = require('express')
const app=express();
const port = 5000;
const {workingTime}=require('./Middlewear')

app.use(express.static(__dirname +'/public'));
app.get("/",workingTime,(req,res,next)=>{
    res.sendFile(__dirname+ "/public/Home.html");
})

app.get("/contact",workingTime,(req,res,next)=>{
    res.sendFile(__dirname +"/public/ContactUs.html")
})
app.get("/service",workingTime,(req,res,next)=>{
    res.sendFile(__dirname +"/public/OurService.html")
})












app.listen(port,(err)=>{
    (err)? console.log(err): console.log(`Go to the port,${port}`)

})

