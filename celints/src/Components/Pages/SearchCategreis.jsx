import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function SearchCategreis() {
  const [dataProducts,setproducts] = useState([]);
  const {id} = useParams();
  useEffect(()=> {

    axios.get('http://localhost:5000/productslistId/'+id)
    .then(res => setproducts(res.data.productList))
    .catch(err => console.error(err))
},[])
  return (
    <div className='pt-20 h-screen'>
        
        <div className="items-center bg-white border p-4 justify-center">
          <h1 className='text-center'>Product Search Drinks</h1>
        </div>

        <div className="container max-w-7xl m-auto mt-2">

       <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
       {
                    dataProducts.map((dataProducts,i) =>(
                      <Link to={`/productslist/${dataProducts.Categry._id}`} key={i}>
                        <div className="p-2">
                        <img src={`http://localhost:5000/images/${dataProducts.image}`} className='h-48 w-64 rounded' alt="" srcset="" />
        
                        <p className="text-2xl">
                           {dataProducts.ProductName}
                        </p>
        
                       </div>
                      </Link>
                    ))
                }
       </div>

        </div>
    </div>
  )
}

export default SearchCategreis