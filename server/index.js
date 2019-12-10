const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const nodemailer = require('nodemailer');
const Port = process.env.PORT
const app = express();
const mongoose = require('mongoose')
const user = require('./schema');
const bcrypt =require('bcrypt')

const corsOption = {
    origin: 'http://127.0.0.1:5500'
}

mongoose.connect('mongodb+srv://Chidiebere:1amChidi@cluster0-6dkm7.mongodb.net/charlyx?retryWrites=true&w=majority',{useNewUrlParser:true}, (err,db)=>{
    if(err){
        console.log(err)
    }else{
        console.log('connected')
    }
})

app.use(cors());
app.options('*', cors());
app.use(cors(corsOption));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json())
   

    app.post('/add-user', async (req,res)=>{
        
        try{
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(req.body.password, salt)
            console.log(req.body.email)
            const alreadyRegistered = await user.findOne({
                email:req.body.email
    
            })
        
            console.log(alreadyRegistered, "ere")
           
            if(alreadyRegistered){
                console.log('your mail dey there already')
                return res.status(400).json({massege:'you can only register once'})
            }

             await user.create({
                firstName:req.body.firstName,
                lastName:req.body.lastName,
                phone:req.body.phone,
                password:hashedPassword,
                email:req.body.email
            })
            
             const transporter = nodemailer.createTransport({
                service:'Gmail',
                host:'smtp.gmail.com',  
                secure:false,
                auth:{
                    user:'docufix49@gmail.com',
                    pass:'docufixapp'
                }
            });
             const mailOption ={
                 from:'docufix49@gmail.com',
                 to:req.body.email,
                 subject:'Welcome',
                 html:`Thanks for Subscribing, we will send you notifications on our latest functionalities`}
             
                 transporter.sendMail(mailOption, err =>{
                 if(err){
                     console.log(err)
                 }
             })
             return res.status(201).json({massege:'Registered successfully'})
        }catch(err){
            console.log(err)
            return res.status(500).json('Not your fault ... but ours please try again')
        }
       
     })

app.listen(Port || 2010, () => {
    console.log('server is running on port 2010')
})