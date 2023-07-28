import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai'
function OverVivew() {

  const [products,setProducts] = useState([]);
  const [Categry,setCategry] = useState([]);
  const [Unpublished,setUnpublished] = useState([]);
  const [Published,setPublished] = useState([]);
  const resdataproducts= async()=>{
   await axios.get('http://localhost:5000/getProductsCount')
  .then(res => {
   setProducts(res.data.ProductsCount)
  })
  .catch(err => console.log(err));
}


const resdataCategry= async()=>{
  await axios.get('http://localhost:5000/getCategryCount')
 .then(res => {
  setCategry(res.data.CategryCount)
 })
 .catch(err => console.log(err));
}


const resdataUnpublished= async()=>{
  await axios.get('http://localhost:5000/getProductsUnPublishedCount')
 .then(res => {
  setUnpublished(res.data.ProductsUnpublishedCount)
 })
 .catch(err => console.log(err));
}

const resdatapublished= async()=>{
  await axios.get('http://localhost:5000/getProductsPublishedCount')
 .then(res => {
  setPublished(res.data.ProductspublishedCount)
 })
 .catch(err => console.log(err));
}


  useEffect(()=> {
    resdataproducts();
    resdatapublished();
    resdataUnpublished();
    resdataCategry();

  })

  return (
    <div className=''>
      <div className="header">
        <h1 className="text-3">Over Views</h1>
      </div>

      <div className="card grid md:grid-cols-4 grid-cols-1 gap-4">

        <div className="bg-slate-400 p-4 border mt-3">
          <p className="text-5xl"><AiOutlineShoppingCart fontSize={55} /></p>
         <div className="flex justify-between mt-3 text-white">
         <h1 className='text-3xl'>Total Products</h1>
        <p className="text-3xl">{products}</p>
         </div>
        </div>



        <div className="bg-slate-400 p-4 border mt-3">
          <p className="text-5xl"><AiOutlineShoppingCart fontSize={55} /></p>
         <div className="flex justify-between mt-3 text-white">
         <h1 className='text-3xl'>Total Categry</h1>
        <p className="text-3xl">{Categry}</p>
         </div>
        </div>



        <div className="bg-sky-300 p-4 border mt-3">
          <p className="text-5xl"><AiOutlineShoppingCart fontSize={55} /></p>
         <div className="flex justify-between mt-3 text-white">
         <h1 className='text-3xl'>Total Contects</h1>
        <p className="text-3xl">{}</p>
         </div>
        </div>

        <div className="bg-sky-300 p-4 border mt-3">
          <p className="text-5xl"><AiOutlineShoppingCart fontSize={55} /></p>
         <div className="flex justify-between mt-3 text-white">
         <h1 className='text-3xl'>Puplished</h1>
        <p className="text-3xl">{Published}</p>
         </div>
        </div>


        <div className="bg-rose-300 p-4 border mt-3">
          <p className="text-5xl"><AiOutlineShoppingCart fontSize={55} /></p>
         <div className="flex justify-between mt-3 text-white">
         <h1 className='text-3xl'>Un Puplished</h1>
        <p className="text-3xl">{Unpublished}</p>
         </div>
        </div>

      </div>


    </div>
  )
}

export default OverVivew