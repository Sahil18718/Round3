const mongoose = require("mongoose")

const travelSchema = mongoose.Schema({
    name: String,
    email: String,
    destination: String,
    travelers: Number,
    budget: Number,
},{
    versionKey:false
})

const Travel = mongoose.model('Travel', travelSchema);


module.exports={
    Travel
}