const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
    {
        image:{
            type:String
        },
        name:{
            type:String
        },
        price:{
            type:Number
        },
        discount:{
            type:Number,
            default:0
        },
        bgcolor:{
            type:String
        },
        panelcolor:{
            type:String
        },
        textcolor:{
            String
        }
    }
)

module.exports = mongoose.model("product",productSchema);