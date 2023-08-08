import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';
import { productsdataAll } from '../data/Data';
function Galery() {
  const [data,setdata] = useState([]);

  useEffect(()=> {
      axios.get('http://localhost:5000/productslist')
      .then(res => {
          setdata(res.data.productList)
      })
      .catch(err => console.log(err))
  },[])

  return (
    <div className='pt-20 '>
      <div className="container">
      

      

    <div className="container max-w-5xl m-auto">
    <div className="header">
          <h1 className='p-5 text-4xl text-sky-800 font-bold'>
            Spical Gelary Raas cawad Products
          </h1>
        </div>
    <div className="row grid grid-cols-3 md:grid-cols-6 gap-4  p-2">
                {/* {

                    data.map((dataProducts,i) =>(
                      <Link to={`/productslist/${dataProducts._id}`} key={i}>
                        <div className="">
                        <img src={`http://localhost:5000/images/${dataProducts.image}`} className='md:h-64 rounded-2xl md:w-64 w-64 h-64 ' alt="" srcset="" />
        
                       
                       </div>
                      </Link>
                    ))
                } */}


                              {

                              productsdataAll.map((dataProducts,i) =>(
                                <Link  key={i}>
                                  <div className="">
                                  <img src={dataProducts.image} className='md:h-64 rounded-2xl md:w-64 w-64 h-64 ' alt="" srcset="" />

                                
                                </div>
                                </Link>
                              ))
                              }
              

              

              
            </div>
    </div>
     

      </div>
    </div>
  )
}

export default Galery