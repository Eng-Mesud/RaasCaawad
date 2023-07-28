import CreateCategry from "../modal/CreateCategry.js";


export const AddCategry = async(req,res,next) => {
    const {name} = req.body;
    let exsisting;
    try {
         exsisting = await CreateCategry.findOne({name})
    }catch(err) {
            return console.log(err);
        }

      if(exsisting)  {
        return res.status(404).json({message:"product allrady exists"});
      }

      const categry = new CreateCategry({name})

    try {
        await  categry.save()
     }
     
     catch(err){
      return console.log(err)
     }
     return res.status(200).json({mesage:"Success fully"})
  

}


export const getCategryList=async (req, res, next) => {
    let categryList;


    try {
        categryList =await CreateCategry.find()
    }
    catch(err) {
        return res.status(404).json({message:"Eroro categry"})
    }

    if(!categryList.length >0) {
     return res.status(404).json({message:"table not found"})
    }
    return res.status(200).json({categryList})
}



export const getCategryCount=async (req, res, next) => {
    // let getCategryCount;


    try {
       const  CategryCount =await CreateCategry.find().count();
        return res.status(200).json({CategryCount})
    }
    catch(err) {
        return res.status(404).json({message:"Eroro categry"})
    }

    // if(!getCategryCount.length >0) {
    //  return res.status(404).json({message:"table not found"})
    // }
 
}





export const getCategryOption =async (req, res, next) => {
    let categry;


    try {
        categry = await CreateCategry.find().select("name")
    }
    catch(err) {
        return res.status(404).json({message:"Eroro categry"})
    }

    if(!categry.length >0) {
     return res.status(404).json({message:"table not found"})
    }
    return res.status(200).json({categry})
}



export const SearcupdateCategry = async(req, res) =>{
    try{
     const  id = req.params.id;
 
     const searchId =await CreateCategry.findById({_id:id});
     res.status(200).json({CategryId: searchId});
    }
    catch(err) {
     res.status(404).json({message:err.message});
    }
 
 
 }
 

export const UpdatedCategry = async (req, res, next) => {
  
    

    try {
        // var {id} = req.params;
        const id = req.params.id;
         const cat = await CreateCategry.findByIdAndUpdate({_id:id },{ name: req.body.name});
          res.status(200).json(cat)
     } catch(err) {
            res.status(200).json({msg: err.message});
           }
        }
    




export const deleteCategry = async(req,res) => {
  
    let CategryReading;
  // Categry values
     var {id} = req.params
     try {
        await CreateCategry.deleteOne({_id:id})
        return res.status(200).json({message:"Sucess"})
    }catch(err) {
        return res.status(404).json({message:"eror deleted"});
    }  
   
}