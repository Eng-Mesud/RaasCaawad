import multer from "multer";
import CreateProducts from "../modal/CreateProducts.js";
import path from "path";
import fs from "fs";
import APIFeatures from "./ApiFeautures.js";



var storage =  multer.diskStorage({
    destination: function(req,file,cb){
        cb(null, './upload/images' )
    },
    filename: function(req,file,cb){
        let ext = path.extname(file.originalname)
        cb(null, file.fieldname + "_" +   Date.now() + ext)
    }
})
// image.feildname + "_" + 

export const upload = multer({
    storage: storage,
    // fileFilter: function(req,file,callback){
    //     if(
    //         file.mimetype == "image/png" ||
    //         file.mimetype == "image/jpg"
    //     ){
    //         callback(null,true)
    //     }else {
    //         console.log("only jpg & png file supported!")
    //         callback(null,false)
    //     }
    // },
    // limits:{
    //     fileSize : 1024 * 1024 * 2
    // }
})


 



export const AddProducts =  async(req,res,next) =>{
   
    let { ProductName,Categry,title,published} = req.body;
     
    if(ProductName=="" && Categry == "" && title=="" && published=="" && image =="")  {
       
        return res.status(404).send({message:"fill inpput "})
    }
   
   
    // if(req.file){
    //     products.image = req.file.path
    // }
    try {
        const products = new CreateProducts({ProductName,Categry,title,published:"Yes", image:req.file.filename});
        await  products.save()
     }
     
     catch(err){
      return res.status(404).send({err: "you message eror"})
     }
     return res.status(200).send({message:"Success full information"})
}

export const getProductsList = async (req, res, next) => {
    let productList;


    try {
        productList =await CreateProducts.find()
    }
    catch(err) {
        return res.status(404).json({message:"Eroro product"})
    }

    if(!productList.length >0) {
     return res.status(404).json({message:"table not found"})
    }
    return res.status(200).json({productList})
}


export const imagegetId = async (req, res, next) => {
     let imagesId;
    const images =req.params.id

    try {
        imagesId =await CreateProducts.findById({image:images})
    }
    catch(err) {
        return res.status(404).json({message:"Eroro product"})
    }

    if(!imagesId.length >0) {
     return res.status(404).json({message:"table not found"})
    }
    return res.status(200).json({imagesId})
}



//homebage

export const getProductsListHomebageslimit20 = async (req, res, next) => {
    let productListLimit;


    try {
        productListLimit =await CreateProducts.find().limit(12)
    }
    catch(err) {
        return res.status(404).json({message:"Eroro product"})
    }

    if(!productListLimit.length >0) {
     return res.status(404).json({message:"table not found"})
    }
    return res.status(200).json({productListLimit})
}

//count

export const getProductsCount=async (req, res, next) => {
  


    try {
       const  ProductsCount =await CreateProducts.find().count();
        return res.status(200).json({ProductsCount})
    }
    catch(err) {
        return res.status(404).json({message:"Eroro Products"})
    }

 
 
}




export const getProductsPublishedCount=async (req, res, next) => {
  


    try {
       const  ProductspublishedCount =await CreateProducts.find( {published:'Yes'}).count();
        return res.status(200).json({ProductspublishedCount})
    }
    catch(err) {
        return res.status(404).json({message:"Eroro Products"})
    }

 
 
}



export const getProductsUnPublishedCount=async (req, res, next) => {
  


    try {
       const  ProductsUnpublishedCount =await CreateProducts.find( {published:'no'}).count();
        return res.status(200).json({ProductsUnpublishedCount})
    }
    catch(err) {
        return res.status(404).json({message:"Eroro Products"})
    }

 
 
}


//


export const getProductsListLets_INFORMATION = async (req, res, next) => {
    let productLatest;


    try {
        productLatest =await CreateProducts.find().limit(5)
    }
    catch(err) {
        return res.status(404).json({message:"Eroro product"})
    }

    if(!productLatest.length >0) {
     return res.status(404).json({message:"table not found"})
    }
    return res.status(200).json({productLatest})
}





//products categry list

export const getProduct_id = async (req, res, next) => {
    let productList;
     var {id} = req.params

    try {
        productList =await CreateProducts.find({Categry:id})
        .populate( 'Categry'). select('image')
    }

    catch(err) {
        return res.status(404).json({message:"Eroro product"})
    }

    if(!productList.length >0) {
     return res.status(404).json({message:"table not found"})
    }
    return res.status(200).json({productList})
}


export const publishedUpdated = async(req,res,next) => {
  try {
    const id = req.params.id


    const PublishedUpdate =await CreateProducts.findByIdAndUpdate({_id:id },{ProductName:req.body.ProductName,title:req.body.title, published:req.body.published,image:req.file.filename});
    res.status(200).json(PublishedUpdate)

}

   catch(err) {
    res.status(200).json({msg: err.message})
   }
}

export const getProduct_id_Inf = async (req, res, next) => {
    let productList;
     var {id} = req.params

    try {
        productList =await CreateProducts.find({_id:id})
        
    }

    catch(err) {
        return res.status(404).json({message:"Eroro product"})
    }

    if(!productList.length >0) {
     return res.status(404).json({message:"table not found"})
    }
    return res.status(200).json({productList})
}

export const getImage = async (req, res, next) => {
    let productList;
    var {images} = req.params


    try {
        productList = await CreateProducts.findOne({image:images})
    }
    catch(err) {
        return res.status(404).json({message:"Eroro product"})
    }

    if(!productList.length >0) {
     return res.status(404).json({message:"table not found"})
    }
    return res.status(200).json({productList})
}

// export const getDelete = async(req,res) => {
//    let body =req.body;

//    await CreateProducts.findOne({_id:body.id})
   
//    if(isExists.length > 0) {
      
//      await CreateProducts.deleteOne({_id: body.id})
//      .then(() =>  
//    }

// }



// get api 
// export const ProductsSearch = catchAsyncErrors(async(req,res,next) => {
export const ProductsSearch = async(req,res,next) => {
    const API = new APIFeatures(CreateProducts.find(),req.query)
             .search()
    const products  = await API.query;
          
    if(!products.length > 0) {
        return res.status(404).json({message:"table not found"})
       }
    // res.status(200).json({
    //     success:true,
    //     count: products.length,
        
    //     products
    // })

   
       return res.status(200).json({
        success:true,
        count: products.length,
        products
    
    })
   
}



export const Searcupdateid = async(req, res) =>{
   try{
    const  id = req.params.id;

    const searchId =await CreateProducts.findById({_id:id});
    res.status(200).json(searchId);
   }
   catch(err) {
    res.status(404).json({message:err.message});
   }


}



export const deleteProducts = async(req,res) => {
  
   
   let filePath  = req.file
   
     var {id} = req.params
   
        await CreateProducts.find({_id:id}).then(async(isExists) => {

     
          if(isExists.length >0 ){
            await CreateProducts.deleteOne({_id:id})
            .then((result) => {

            
            if(result.deletedCount > 0){

        
            if(isExists[0].filePath ){

                
                fs.unlink(isExists[0].filePath,(err) => {
                 if(err) {
                     res.send("waa cilad badanaa dhacdo")
                 }
                   else {
                     res.send("deleted Successfully")
                   }
                 })
        }
      
           
           
            
           

           

        else{
          res.send("Successfully deleted");
        }
        
     

    } 
    else {
        res.send("empty data")
    }
    
})
}else{
    res.send("data not deleted")

}
})

}

