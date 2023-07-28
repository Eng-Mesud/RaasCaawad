import mongoose from "mongoose";


const  Schema= mongoose.Schema;

const CategrySchema = new  Schema({
     name:{
        type:String,
        required:true,

     },
     dateTime :{
        type: Date, default:Date.now,
     

    },
})


export default mongoose.model('categry',CategrySchema);