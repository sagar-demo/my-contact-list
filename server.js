const { Router } = require('express');
const express=require('express');
const port=8000;
const app=express();
const path=require('path');
const router=express.Router();

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
});



app.use('/',router)
app.listen(port,function(err){
    if(err){
        console.log('error in running the server',err);
    }
    console.log('yup! my express server in running on port:',port);
 
});