import mongoose from "mongoose";


const Schema =mongoose.Schema;

const CreateProductSchema =new  Schema({
    ProductName:{
        type:String,
        required:true,

    },
    image:{
        type:String,
        // contentType:String,
        // data:Buffer,
         required:true,

    },
    Categry:{
        type: mongoose.Schema.Types.ObjectId,ref:'categry'
    },

    title:{
        type:String,
         required:true,

    },

    published:{
        type:String,
         required:true,

    },

    dateTime :{
        type: Date, default:Date.now,
     

    },

});

export default mongoose.model('products',CreateProductSchema);