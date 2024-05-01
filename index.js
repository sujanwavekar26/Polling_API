const Port=3000
const express=require('express')
const bodyParser=require('body-parser')
const app=express();
app.use(bodyParser.urlencoded({extended:true}))
const mongoose=require('./config/mongoose');

// Routes
app.use('/',require('./routes/index'));

mongoose.connect('mongodb://127.0.0.1:27017/test')
  .then(() => console.log('Connected!'));   

app.listen(Port,function(err){
    if(err){
        console.log(err);
    }
    console.log("server is runing ...",Port);
})