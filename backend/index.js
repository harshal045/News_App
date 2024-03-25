import express from 'express'
import cors from 'cors'
import mongoose, { Mongoose } from 'mongoose'

const app= express()
app.use(express.json())
app.use(cors())

try {
    await mongoose.connect('mongodb://127.0.0.1:27017/myNewsAppDB');
    console.log("Db connected")
  } catch (error) {
    handleError(error);
  }

  const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String
  })

  const User=new mongoose.model("User",userSchema)

  app.post("/login",async(req,res)=>{
    const {email,password}=req.body
    const rslt=await User.findOne({email:email}).exec();
    if(rslt)
    {
        if(password===rslt.password)
        {
            res.send({message:"Login Successfull",user:rslt,name:rslt.name})
        }
        else{
            res.send({message:"Invalid Password"})
        }
    }
    else
    {
        res.send({message:"New User Register Yourself"})
    }
})

app.post("/register",async(req,res)=>{
    
  const {name,email,password}=req.body
 const result= await User.findOne({ email:email}).exec();
 if(result)
 {
    res.send({message:"User already register"})
 }
 else
 {
    const user=new User({
        name,
        email,
        password
      })    
      const doc=await user.save()
      console.log(req.body)    
 }
  
})

app.listen(9002,()=>{
    console.log("Be started at port 9002")
})