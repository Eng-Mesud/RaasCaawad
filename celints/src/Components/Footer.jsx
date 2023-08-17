import React from 'react'
import {BiLogoWhatsapp} from 'react-icons/bi'
import {BsInstagram, BsSearch, BsWhatsapp} from 'react-icons/bs'
import { GrFacebookOption } from 'react-icons/gr'
function Footer() {
  return (


    <div className='mt-10'>
        <div className="bg-white p-6">
        <div className="container max-w-5xl m-auto">
            <div className="md:flex justify-between ">
                <p className='text-4xl font-bold'>Connect with us</p>
                <div className="icons flex space-x-2">
                <a href="https://wa.me/252610973722"> <p><BsWhatsapp fontSize={25} /></p> </a>
            <a href="https://www.facebook.com/profile.php?id=100093105353671&mibextid=ZbWKwL"><p><GrFacebookOption fontSize={25}  /></p></a>
            
            <p><BsInstagram fontSize={25} /></p>
                   {/* <a href="#"> <BiLogoWhatsapp fontSize={44} /></a>
                   <a href="#"> <BiLogoWhatsapp fontSize={44} /></a> */}
                </div>

            </div>

        </div>
        </div>

        <div className="bg-blue-950 h-full ">

          <div className="container max-w-5xl  m-auto ">
          <div className="row grid grid-cols-2 md:grid-cols-4 p-4 text-white">
         <div>
         <h1 className='text-2xl font-semibold'>About Us</h1>
           <p className="text-1xl ">
            RAAS CAWAD GENARAAL TREADING COMPONY
           </p>
         </div>

         <div>
         <h1 className='text-2xl font-semibold font-extrabold '>Supports </h1>
          <li>bakaaro, 
            Mogadishu, 
            Somalia</li>
      
         </div>

         
         <div>
         <h1 className='text-2xl font-semibold'>Categry </h1>
          <li>Snackers</li>
          <li>tofafo</li>
          <li>wacht</li>
          <li>Snackers</li>
          <li>tofafo</li>
          <li>wacht</li>
          <li>Snackers</li>
          <li>tofafo</li>
          <li>wacht</li>
         </div>

         <div>
         <h1 className='text-2xl font-semibold'>Contect </h1>
         <div className="p-2">
       <p> Tell: +2520610912189</p>
       <p>Bakaaro Sariflaha</p>
         </div>
         </div>

          </div>
          </div>

        </div>
    </div>
  )
}

export default Footer