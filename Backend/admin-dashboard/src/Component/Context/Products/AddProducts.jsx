import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2'





function AddProducts() {


  const [options,setOptions] = useState([])
  //add products 
 const [ProductName,setProductsName] = useState('');
 const [filedata,setFiledata] = useState();
 const [Productscat,setProductscat] = useState('');
 const [title,setProductstitle] = useState('');
  const data = new FormData();
  data.append('ProductName',ProductName);
  data.append('image',filedata);
  data.append('Categry',Productscat);
  data.append('title',title);

    const getOptionListCategry = async()=>{
        axios.get("http://localhost:5000/listOption")
        .then(res => setOptions(res.data.categry))
        .catch(err => console.log(err));
    }
    useEffect(() =>{
        
        getOptionListCategry();
        },[])


        const handleCategry= async(e)=>{
            e.preventDefault();
      if(ProductName == "" && filedata == ""){
        alert("Please select");
      }else{
        const res = await axios.post('http://localhost:5000/AddProduct',data)
        .then(res => {
            if(res.status === 404){
                alert("All rady exits");
              }else {
                // fetDataCategry();
                setFiledata();
                setProductsName('');
                setProductstitle('');
                setProductscat('');
                
                toast.success('🦄 Success Fully!', {
                  position: "bottom-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                  });
              
    
                
              }
          }).catch (err => {
            if(err.status === 404){
                alert("all rady exits");
            }else{
                alert(err);
            }
          });
     }
      }





const navgate =useNavigate()
      const handleCategryColose= async(e)=>{
        e.preventDefault();
  if(ProductName == "" && filedata == ""){
    alert("Please select");
  }else{
    const res = await axios.post('http://localhost:5000/AddProduct',data)
    .then(res => {
        if(res.status === 404){
            alert("All rady exits");
          }else {
            // fetDataCategry();
            navgate('/admin-dashboard/products')
          

            
          }
      }).catch (err => {
        if(err.status === 404){
            alert("all rady exits");
        }else{
            alert(err);
        }
      });
 }
  }


           

  return (
    <div>

         <div className="from">
                        <form action="" method="post"  onSubmit={handleCategry} encType='multipart/from-data'>
                       <div className="bg-white rounded p-4 space-y-4">
                        <h1>Insert Categry </h1>
                     
                     <div className="grid grid-cols-2 gap-4">
                     <div className="form-control ">
                            <input type="text"  className=' border focus:outline-none p-1 w-full h-12'  placeholder='product name'
                            onChange={e=> setProductsName(e.target.value)} value={ProductName} required/>
                        </div>

                        <div className="form-control ">
                           <select name="" id=""  className=' border focus:outline-none p-1 w-full h-12' value={Productscat} required onChange={e=> setProductscat(e.target.value)} >
                            <option value="">--chose Categry---</option>
                             {
                                options.map((catgery,i)=>(
                                    <option value={catgery._id}>{catgery.name}</option>
                                ))
                             }
                           </select>
                        </div>

                        <div className="form-control ">
                            <input type="text"  className=' border focus:outline-none p-1 w-full h-12' required placeholder='title' value={title} onChange={e=> setProductstitle(e.target.value)}/>
                        </div>
                        <div className="form-control ">
                            <input type="file"  className=' border focus:outline-none p-1 w-full h-12'   required name='image'  multiple onChange={e=> setFiledata(e.target.files[0])}/>
                        </div>
                     </div>
                     <div className="text-end mt-10">
          <button className='bg-green-300 p-2 w-32 m-2' onClick={handleCategryColose}>Save & close</button>
          <button className='bg-green-300 p-2 w-32 m-2'>Save </button>
          <ToastContainer />
        </div>
                     
                       </div>
                       </form>
                        </div>
    </div>
  )
}

export default AddProducts