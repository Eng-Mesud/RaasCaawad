import mongoose from "mongoose";


const  Schema= mongoose.Schema;

const ContectSchema = new  Schema({
     name:{
        type:String,
        required:true,

     },
     gmail:{
        type:String,
        required:true,

     },
     phone:{
        type:String,
        required:true,

     },
     adress:{
        type:String,
        required:true,

     },
     
     message:{
        type:String,
        required:true,

     },

     dateTime :{
        type: Date, default:Date.now,
     

    },
})


export default mongoose.model('Contect',ContectSchema);