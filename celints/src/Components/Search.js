// import { match } from 'assert';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import notfound from '../image/not_found-67b0ab60459a252a50ebc221e99e77f9caf41a31062a7b3efe67388a541a6867.png'

const  Search =({match})  =>{

    const [productsDataFilter ,setProductDataFilter] =useState([]);
     
    // const keyword = match.params.keyword
    const {keyword } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:5000/product_search?keyword=${keyword}`)
        .then(res => setProductDataFilter(res.data.products))
        .catch(err => console.log(err))
    },[])

 return(
    <div className='max-w-7xl m-auto p-2 h-full '>
    {/* <h1 className="text-5xl">Result products <span className="text-rose-300">not founded</span></h1> */}
{
     productsDataFilter.length > 0 ? (

    <div className="row grid grid-cols-3 md:grid-cols-4 gap-4 mt-3 p-2">
                {




 
            productsDataFilter.map((dataProducts,i) =>(
                      <Link to={`/productslist/${dataProducts._id}`} key={i}>
                        <div className="">
                        <img src={`http://localhost:5000/images/${dataProducts.image}`} className='md:h-96 md:w-96 w-64 h-64 rounded-lg' alt="" srcset="" />
        
                        <p className="text-2xl text-center">
                           {dataProducts.ProductName}
                        </p>
        
                       </div>
                      </Link>
                    ))

                }
              

              

              
            </div>

):<img src={notfound} alt=''  className='md:w-40 md:h-40 items-center md:ml-40'/>
            }
</div>
 )
}

export default Search