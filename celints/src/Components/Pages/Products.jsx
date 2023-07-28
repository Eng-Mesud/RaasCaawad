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
    <div className='pt-40'>
        <h1 className='text-4xl text-center mt-2' >Products</h1>


        <div className="container max-w-7xl m-auto mt-5">
            <div className="row grid grid-cols-3 gap-3">
                {
                    data.map((dataProducts,i) =>(
                      <Link to={`/productslist/${dataProducts._id}`} key={i}>
                        <div className="">
                        <img src={`http://localhost:5000/images/${dataProducts.image}`} className='h-96 w-96 rounded-lg' alt="" srcset="" />
        
                        <p className="text-2xl">
                           {dataProducts.ProductName}
                        </p>
        
                       </div>
                      </Link>
                    ))
                }
              

              

              
            </div>

            <div className="text-center mt-3">
                <button className='bg-sky-300 p-2 w-64 rounded'>Se All</button>
            </div>

         
        </div>

       
    </div>
  )
}

export default ProductsDetails