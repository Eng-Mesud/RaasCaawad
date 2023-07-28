import React from 'react'
import testImg from '../image/five.jpg'
import testImg1 from '../image/tharee.jpg'
import testImg2 from '../image/one.jpg'
import {Link}from 'react-router-dom'
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
function Coursel() {
    const scrollLeft = () => {
        document.getElementById("content").scrollLeft -= 400;
    }
    const scrollRight = () => {
        document.getElementById("content").scrollLeft += 400;
    }
  return (
    <div className="relative max-w-7xl m-auto">
    <div className=" py-4  text-xl font-bold">Carousel</div>
    <div className="absolute right-0 top-5   ">
      <button onClick={scrollLeft} className="p-2 m-2 rounded-full bg-sky-300">
        <FiChevronLeft />
      </button>
      <button onClick={scrollRight} className="p-2 m-2 rounded-full bg-sky-300">
        <FiChevronRight />
      </button>
    </div>
    <div id="content" className="carousel p-4 flex items-center justify-start  overflow-x-auto scroll-smooth  max-w-7xl m-auto ">
      <div className=''>
      <Products/>
      </div>
     
   
      </div>
    </div>
  )
}

export  const Products = () => {
    const spade =[
        {
            id:1,
            name:"nick",
            image:<img src={testImg1} className='w-[350px] h-[350px] object-cover  p-2' />
        },
        {
            id:1,
            name:"nick",
            image:<img src={testImg2}  className='w-[350px] h-[350px] object-cover  p-2' />
        },
        {
            id:1,
            name:"nick",
            image:<img src={testImg} className='w-[350px] h-[350px] object-cover  p-2' />
        },
        {
            id:1,
            name:"nick",
            image:<img src={testImg2}  className='w-[350px] h-[350px] object-cover  p-2' />
        },
        {
            id:1,
            name:"nick",
            image:<img src={testImg2}  className='w-[350px] h-[350px] object-cover  p-2' />
        },
    ];
    return (
     <div className="flex ">
    {
        spade.map((products,index) => (

           <Link>
            <div className="   w-[350px] h-[350px] m-3  rounded-lg shadow-lg">
        
         
        <div>
        {products.image}
        {/* <p >{products.name}</p> */}
        </div>
          
              </div>
           </Link>
        ))
    }
     </div>
    )
}

export default Coursel