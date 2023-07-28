import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import {BiEdit} from 'react-icons/bi'
import {MdDelete} from 'react-icons/md'
import { Link, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2'
function Contectlist() {

    const [Categrydata,setCategrydata] = useState([]);
    // const [name,setName] = useState([]);

    const columns = [
        {
            name:"Date",
            selector: row => row.dateTime
            ,
             sortable: true,
        },
        {
            name: "id",
            selector: row => row._id,
             sortable: true,
        },
        {
            name: "Name",
            selector: row => row.name,
             sortable: true,
        },
     
      
        {
            name: "message",
            selector: row => row.message,
             sortable: true,
        },
    
        // {
        //     name: "Action",
        //     cell:row => <div className=' flex space-x-3 p-2'>
        //     <Link className="bg-sky-400 p-3 rounded " to={`/admin-dashboard/Categry/edit/${row._id}`}> <BiEdit  fontSize={34}/> </Link>
        //     <button className='bg-rose-300 p-3 rounded' onClick={e =>handaleDelete(row._id)}>< MdDelete  fontSize={34}/></button>
        //     </div>
        // }
    ]

    const fetDataCategry = async ()=> {
        axios.get('http://localhost:5000/getContectList')
        .then(res => setCategrydata(res.data.ContectList))
        .catch(err => console.log(err));
   }

   useEffect(() =>{
    
   fetDataCategry();
   },[])
  




  



   const {id} =useParams();

//    const getSearchidCategry= async()=>{
//      axios.get("http://localhost:5000/SearcupdateCategry/"+id)
//      .then(res => {
//       // window.location.reload(true)
//        setName(res.data.CategryId.name);
       
     
      
//      })
 
     
//      .catch(err => console.log(err));
//  }
//  useEffect(() =>{
     
//   getSearchidCategry();
//      },[])




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
                
                    <div className="row grid grid-cols-1  gap-4">
                        
               

                        <div className="table ">
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

export default Contectlist