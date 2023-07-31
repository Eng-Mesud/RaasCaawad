import React, { useEffect, useState } from 'react'
// import testImg from '../image/five.jpg'
// import testImg1 from '../image/tharee.jpg'
// import testImg2 from '../image/one.jpg'
import {Link} from 'react-router-dom'
import axios from 'axios';
function ProductsDetails() {
    const [data,setdata] = useState([]);

    useEffect(()=> {
        axios.get('http://localhost:5000/productslist')
        .then(res => {
            setdata(res.data.productList)
        })
        .catch(err => console.log(err))
    },[])
  return (
    <div className='pt-10'>
        <h1 className='text-4xl text-center mt-2' >Products</h1>


        <div className="container max-w-7xl m-auto mt-5">
            <div className="row grid  grid-cols-1 md:grid-cols-4 gap-3 p-2">
                {
                    data.map((dataProducts,i) =>(
                      <Link to={`/productslist/${dataProducts._id}`} key={i}>
                        <div className="bg-slate-100 border ">
                        <img src={`http://localhost:5000/images/${dataProducts.image}`} className='h-96 w-96 rounded-lg' alt="" srcset="" />
        
                        <p className="text-2xl p-2">
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

export default ProductsDetails