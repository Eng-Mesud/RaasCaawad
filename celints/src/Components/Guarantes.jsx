import React from 'react'
import { GrDeliver } from 'react-icons/gr'
import { FaCertificate } from 'react-icons/fa'
import { CiTimer } from 'react-icons/ci'
function Guarantes() {
  return (
    <div className='pt-20'>
        <div className="container max-w-2xl m-auto">
            <div className="header">
                <h1 className='text-center text-2xl'>Our Guarantes</h1>
            </div>
            <div className="row grid grid-cols-2 gap-6 items-center mt-5">
                <div className='flex space-x-3'>
                    <FaCertificate  fontSize={45} />
                   <div className="">
                    <p>Quantity</p>
                   <p>You Can Trust</p>
                   </div>
                </div>

                <div className='flex space-x-3'>
                    <GrDeliver  fontSize={45} />
                   <div>
                   <p>Free</p>
                   <p>Delivery </p>
                   </div>
                </div>


                <div className='flex space-x-3'>
                    <CiTimer  fontSize={45} />
                   <div className="">
                    <p>Ontime</p>
                   <p>guateres</p>
                   </div>
                </div>

                <div className='flex space-x-3'>
                    <GrDeliver  fontSize={45} />
                   <div>
                   <p>No quetion asked</p>
                   <p>Return </p>
                   </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Guarantes