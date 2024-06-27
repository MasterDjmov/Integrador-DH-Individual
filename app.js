const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'));

const port = process.env.PORT || 3001;
app.listen(port,(error)=>{
    if(error){
        console.log("error:"+error)
}else
console.log("Server iniciado en localhot:"+port);   
})

app.get('/',(req,res)=>{
    res.sendFile(path.resolve("./views/home.html"));
})
app.get('/register',(req,res)=>{
    res.sendFile(path.resolve("./views/register.html"));
})
app.get('/login',(req,res)=>{
    res.sendFile(path.resolve("./views/login.html"));
})

