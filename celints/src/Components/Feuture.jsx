import React from 'react'
import homeBageImg from '../image/four.jpg'
import homeBageImg1 from '../image/Cartoms.jpg'
function Feuture() {
  return (
    <div className='bg-slate-50 mt-10'>
        <div className="container max-w-7xl m-auto">
            <div className="row grid grid-cols-1 md:grid-cols-2">
                {/* <div className="p-4 m-5 relative">
                    <img src={homeBageImg} className='h-96 w-96 rounded-lg' alt="" srcset="" />
                    <div className=" absolute top-10  ml-52">
                    <img src={homeBageImg1} className='h-96 w-96 rounded-lg' alt="" srcset="" />
                    </div>
                </div> */}

                <div className="p-4 m-5 ">
                <img src={homeBageImg1} className=' rounded-lg' alt="" srcset="" />
                    </div>
                <div className="ml-10 ">
                    <h1 className='md:text-5xl font-semibold text-sky-300'>RaasCaawad Genaral Treading</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure accusantium assumenda est, laudantium obcaecati consectetur.
                         Ut nulla harum ducimus earum ab explicabo quidem dolore, nam optio eligendi libero voluptates unde.</p>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Feuture