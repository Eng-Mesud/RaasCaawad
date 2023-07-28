import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
import {BiEdit} from 'react-icons/bi'
import {MdDelete} from 'react-icons/md'
import {BsBag} from 'react-icons/bs'
import Swal from 'sweetalert2'
import {GrFilter} from 'react-icons/gr'
import {AiOutlinePrinter} from 'react-icons/ai'
function Products() {

    const [Categrydata,setCategrydata] = useState([]);
   const [userInfo,setfilepreview] = useState({
    fileperiview:null
   });

    const columns = [
      {
        name: "id",
        selector: row => row._id,
         sortable: true,
    },
    {
      name: "image",
      selector: row =><img src={`http://localhost:5000/images/${row.image}`} className='h-10 w-10 rounded-full' alt="" srcset="" />  ,
      sortable: true,
  },
        {
            name: "ProductName",
            selector: row => row.ProductName,
            sortable: true,
        },
        
        // {
        //     name:"Categry",
        //     selector: row => row.Categry,
        //      sortable: true,
        // },
        {
          name:"title",
          selector: row => row.title,
           sortable: true,
      },
      {
        
        name: "Published",
        cell:row => <div className='flex p-1 space-x-3'>
          { 
             row.published == 'yes' ?  (
              <button className='bg-green-300 p-1 w-28 rounded text-2xl' onClick={e =>handlePublished(row._id)}>{row.published}</button>
             ):
             (
              <button className='bg-rose-300 p-1 w-28 rounded text-2xl' onClick={e =>handlePublished(row._id)}>{row.published}</button>
             )

             
          }
       
          
      


       
       </div>
      },
    //   {
    //     name:"date",
    //     selector: row => row.dateTime,
    //      sortable: true,
    // },
        {
            name: "Action",
            cell:row => <div className='flex p-2 space-x-3'>
            <Link className=" p-2 " to={`/admin-dashboard/products/edit/${row._id}`}><BiEdit  fontSize={34}/></Link>
            <button className=' p-2 ' onClick={e =>handaleDelete(row._id)}>< MdDelete  fontSize={34}/></button>
            </div>
        }
    ]

    const fetDataCategry = async ()=> {
        axios.get('http://localhost:5000/productslist')
        .then(res => setCategrydata(res.data.productList))
        .catch(err => console.log(err));
   }

   useEffect(() =>{
    
   fetDataCategry();
   },[])
  

   const handlePublished =(id) =>{
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
   }
     
  
   const handaleDelete =(id)=>{
    axios.delete('http://localhost:5000/Productsdeleted/'+id)
    .then(res => {
    //   if (res.data.Status === 200) {

      
    if(res.status === 404){
        alert("All rady exits");
      }else {
        fetDataCategry();
          alert("Suceess fully");
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
        <div className="container p-4 scroll-my-2.5">
            <div className="card bg-white p-4 flex justify-between">
                <h1>Manege Products </h1>
                <div className="fle">
                    <p>Count Categry :55</p>
                    <img src="" alt="" srcset="" />
                </div>
            </div>

           <div className="mt-4">
           <div className="card   p-4">
                  <div className="container">
                    <div className="row grid md:grid-cols-1 gap-4">
                        
                      

                        <div className="table">
                         <div className="bg-white border p-4 rounded ">
                          <div className='flex justify-between'>
                         <div className="leg flex space-x-2">
                          <p className='p-2 rounded'>< BsBag  className='bg-black' fontSize={24}/></p>
                          <p className='p-2 rounded'> < GrFilter fontSize={24} /></p>
                          <p className='p-2 rounded'> < AiOutlinePrinter fontSize={24} /></p>
                         </div>
                          <Link to="/admin-dashboard/Addproducts" className='bg-sky-400 p-2 '>Add new Products</Link>
                          </div>
                     

                     

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

export default Products