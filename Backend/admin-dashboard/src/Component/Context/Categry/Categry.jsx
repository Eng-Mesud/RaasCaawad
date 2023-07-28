import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import {BiEdit} from 'react-icons/bi'
import {MdDelete} from 'react-icons/md'
import { Link, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2'
function Categry() {

    const [Categrydata,setCategrydata] = useState([]);
    const [name,setName] = useState([]);

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
        {
            name: "Action",
            cell:row => <div className=' flex space-x-3 p-2'>
            <Link className="bg-sky-400 p-3 rounded " to={`/admin-dashboard/Categry/edit/${row._id}`}> <BiEdit  fontSize={34}/> </Link>
            <button className='bg-rose-300 p-3 rounded' onClick={e =>handaleDelete(row._id)}>< MdDelete  fontSize={34}/></button>
            </div>
        }
    ]

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
    
      const res = await axios.post('http://localhost:5000/Categry',{name})
      .then(res => {
        if(res.status === 404){
            alert("All rady exits");
          }else {
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
          

            
          }
      }).catch (err => {
        if(err.status === 404){
            alert("all rady exits");
        }else{
            alert(err);
        }
      });
     
     
   }




   const {id} =useParams();

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




   const handaleDelete =(id)=>{
    // let ansawer = window.prompt("Are you sure want to delete this Item  ?")
    // if(!ansawer) return ;
    axios.delete('http://localhost:5000/deletedCategry/'+id)
    .then(res => {
    //   if (res.data.Status === 200) {

      
    if(res.status === 404){
        alert("All rady exits");
      }else {
        
          // alert("Suceess fully");
          Swal.fire(
            'Good job!',
            'You clicked the button!',
            'success',
            fetDataCategry()
          )

      }

    //   }else {
    //     alert("error deleting users")
    //   }
    })
    .catch (err => {
        if(err.status === 404){
            alert("all rady exits");
        }else{
            alert(err);
        }
      });
    }
  return (
    <div>
        <div className="container">
            <div className="card bg-white p-4 flex justify-between">
                <h1>helo Categry </h1>
                <div className="fle">
                    <p>Count Categry :55</p>
                </div>
            </div>

           <div className="mt-4">
           <div className="card   p-4">
                  <div className="container">
                    <div className="row grid grid-cols-1 md:grid-cols-3 gap-4">
                        
                        <div className="from">
                        <form action="" method="post" onSubmit={handleCategry}>
                       <div className="bg-white rounded p-4 space-y-4">
                        <h1>Insert Categry </h1>
                     
                       <div className="form-control ">
                            <input type="text"  className=' border focus:outline-none p-1 w-full ' onChange={e => setName(e.target.value)} value={name}/>
                        </div>
                        <div className="text-end">
                            <button className='bg-green-500 p-2  rounded'>Insert</button>
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

export default Categry