import ContectModal from "../modal/ContectModal.js";




export const AddContect= async(req,res,next) => {
    const {name,gmail,phone,adress,message} = req.body;
    
      const contect = new ContectModal({name,gmail,phone,adress,message})

    try {
        await  contect.save()
     }
     
     catch(err){
      return console.log(err)
     }
     return res.status(200).json({mesage:"Success fully"})
  

}



export const getContectCount=async (req, res, next) => {
  


    try {
       const  ContectCount =await ContectModal.find().count();
        return res.status(200).json({ContectCount})
    }
    catch(err) {
        return res.status(404).json({message:"Eroro Contect"})
    }

 
 
}

export const getContectList=async (req, res, next) => {
    let ContectList;


    try {
        ContectList =await ContectModal.find()
    }
    catch(err) {
        return res.status(404).json({message:"Eroro contect"})
    }

    if(!ContectList.length >0) {
     return res.status(404).json({message:"table not found"})
    }
    return res.status(200).json({ContectList})
}
