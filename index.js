const { application } = require('express');
const express=require('express');
const path=require('path');
const port=8000;
const app=express();

//template engine view of html
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
//creating parser to read our form data from browser
// also called it middle ware
app.use(express.urlencoded());//it's read the data from form and parse it.
app.use(express.static('assets'));
//making contact list 
var contactList=[
    {
        name:"Tonny kakkar",
        address:"Mumbai",
        phone:"12346"
    }
]
app.get('/',function(req,res){
    return res.render('home',{
        title:"Contacts List",
        contact_list:contactList
    });
})

app.get('/practice',function(req,res){
    return res.render('pract',{
        title:"Let us play with ejs"
    })
});
app.post('/create-contact',function(req,res){
    //console.log(req);
    //return res.redirect('/practice');
    // console.log(req.body);
    // console.log(req.body.name);
    // console.log(req.body.phone);
    // console.log(req.body.address);
    contactList.push(
        // name:req.body.name,
        // phone:req.body.phone,
        // address:req.body.address
        //another to access our data
        req.body
    );
    return res.redirect('back')
    //return res.redirect('/')

});
//for deleting a contact
app.get('/delete-contact',function(req,res){
    // get the query from the url
    let phone=req.query.phone;
    let contactIndex=contactList.findIndex(contact=>contact.phone==phone);
    if(contactIndex!=-1){
        contactList.splice(contactIndex,1);
    }
    return res.redirect('back')
});



app.listen(port,function(err){
    if(err){
        console.log('error in running the server',err);
    }
    console.log('yup! my express server in running on port:',port);
 
});