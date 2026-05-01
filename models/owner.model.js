const mongoose = require('mongoose');



const ownerSchema = mongoose.Schema(
    {
        fullname :{
            type:String,
            trim:true
        },
        email:{
            type:String
        },
        password:{
            type:String
        },
        products:{
            type:Array,
            default:[]
        },
        gstin:{
            type:String
        },
        picture:{
            type:String
        }
    }
)

module.exports = mongoose.model("owner",ownerSchema);