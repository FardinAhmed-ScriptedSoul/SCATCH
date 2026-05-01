const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1.27017/scatch");

const userSchema = mongoose.Schema(
    {
        fullname :{
            type:String,
            trim:true,
            minLength:3
        },
        email:{
            type:String
        },
        password:{
            type:String
        },
        cart:{
            type:Array,
            default:[]
        },
        isAdmin:{
            type:Boolean
        },
        orders:{
            type:Array,
            default:[]
        },
        contact:{
            type:Number
        },
        picture:{
            type:String
        }
    }
)

module.exports = mongoose.model("user",userSchema);