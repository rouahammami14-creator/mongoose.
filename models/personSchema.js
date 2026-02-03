const mongoose = require("mongoose")
const personSchema = mongoose.Schema({
    name:String,
    email:{type:String,required:true},
    password:String
})
const Person = mongoose.model("person",personSchema)
module.exports = person;