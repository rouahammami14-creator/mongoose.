const express = require ("express");
const router = express.Router();
const Person = require("../models/personSchema")
router.post("/createperson",async(req,res)=>{
    try{
        const person= new User(req.body)
        await person.save()
        res.status(201).json({msg:"person created succefully",person:person})

    }
    catch(err){
        res.status(500).json({msg:err.msg})
        
    }
})
router.get("/getperson",async(req,res)=>{
    try{
        const person= await Person.find()
        res.status(201).json({msg:"get all users",person:person})

    }
    catch(err){
        res.status(500).json({msg:err.msg})
        
    }
})

module.exports=router