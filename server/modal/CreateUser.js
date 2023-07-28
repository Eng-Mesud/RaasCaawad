import mongoose from "mongoose";


const Schema =mongoose.Schema;
const CreateSchema =new  Schema({
    firstName:{
        type:String,
        requir:true
    },
    UserName:{
        type:String,
        requir:true
    },
    gmail:{
        type:String,
        requir:true
    },
    Password:{
        type:String,
        requir:true,
        minlength:6
    },
    dateTime :{
        type: Date, default:Date.now,
     

    },
})

export default mongoose.model('user',CreateSchema);