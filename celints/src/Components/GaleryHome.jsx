import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';
function GaleryHome() {
  const [data,setdata] = useState([]);

  useEffect(()=> {
      axios.get('http://localhost:5000/productslist')
      .then(res => {
          setdata(res.data.productList)
      })
      .catch(err => console.log(err))
  },[])

  return (
    <div className='mt-10 bg-blue-950'>
      <div className="container">
      

      

    <div className="container max-w-5xl m-auto">
    <div className="header">
          <h1 className='p-5 md:text-4xl  text-white font-bold'>
          RAAS CAWAD GENARAAL TREADING COMPNY
          </h1>
        </div>
   
    </div>
     

      </div>
    </div>
  )
}

export default GaleryHome