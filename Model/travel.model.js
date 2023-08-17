const mongoose = require("mongoose")

const travelSchema = mongoose.Schema({
    
},{
    versionKey:false
})

const Travel = mongoose.model('Travel', travelSchema);


module.exports={
    Travel
}