import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import {BiEdit} from 'react-icons/bi'
import {MdDelete} from 'react-icons/md'
import { Link, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2'
function UpdatedCategry() {

    const [Categrydata,setCategrydata] = useState([]);
    const [name,setName] = useState('');

    const columns = [
        {
            name: "id",
            selector: row => row._id,
             sortable: true,
        },
        {
            name: "Categry",
            selector: row => row.name,
             sortable: true,
        },
        {
            name:"Date",
            selector: row => row.dateTime
            ,
             sortable: true,
        },
      
    ]
    const {id} =useParams();
    const fetDataCategry = async ()=> {
        axios.get('http://localhost:5000/listCaregry')
        .then(res => setCategrydata(res.data.categryList))
        .catch(err => console.log(err));
   }

   useEffect(() =>{
    
   fetDataCategry();
   },[])
  




   const handleCategry= async(e)=>{
      e.preventDefault();
    
      const res = await axios.put('http://localhost:5000/updatedCategry/'+id,{name})
      .then(res => {
       
            fetDataCategry();
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
          

        
      }).catch (err => {
        if(err.status === 404){
            alert("all rady exits");
        }else{
            alert(err);
        }
      });
     
     
   }




 

   const getSearchidCategry= async()=>{
     axios.get("http://localhost:5000/SearcupdateCategry/"+id)
     .then(res => {
      // window.location.reload(true)
       setName(res.data.CategryId.name);
       
     
      
     })
 
     
     .catch(err => console.log(err));
 }
 useEffect(() =>{
     
  getSearchidCategry();
     },[])




  
  return (
    <div>
        <div className="container">
           

           <div className="mt-4">
           <div className="card   p-4">
                  <div className="container">
                    <div className="row grid grid-cols-1 md:grid-cols-3 gap-4">
                        
                        <div className="from">
                        <form action="" method="post" onSubmit={handleCategry}>
                       <div className="bg-white rounded p-4 space-y-4">
                        <h1>Updated Categry </h1>
                     
                       <div className="form-control ">
                            <input type="text"  className=' border focus:outline-none p-1 w-full ' onChange={e => setName(e.target.value)} value={name}/>
                        </div>
                        <div className="text-end">
                            <button className='bg-green-500 p-2  rounded'>Updated categry</button>
                            <ToastContainer />
                        </div>
                     
                       </div>
                       </form>
                        </div>

                        <div className="table col-span-2">
                         <div className="bg-white border p-4">
                      <h1>Information Categry</h1>

                      <div className="table-responsive">
                     <DataTable
                      columns = {columns}
                      data = {Categrydata}
                    //   selectableRows  
                      pagination
                     >


                     </DataTable>
                      </div>
                         </div>
                        </div>

                    </div>
                  </div>
                </div>

           </div>
        </div>
    </div>
  )
}

export default UpdatedCategry