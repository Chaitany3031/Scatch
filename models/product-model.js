const mongoose = require('mongoose')


const productSchema = mongoose.Schema({
    image:String,
    name:String,
    bgcolor:String,
    discount:{type:Number,default:0},
    panelcolor:String,
    price:Number,
    textcolor:String
})

module.exports = mongoose.model('product',productSchema)