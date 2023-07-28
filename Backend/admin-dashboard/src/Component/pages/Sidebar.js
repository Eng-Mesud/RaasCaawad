import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import imageProfile from '../../Image/user-1.jpg';
import {FaTachometerAlt} from 'react-icons/fa'
import {BsCart3} from 'react-icons/bs'
import {AiOutlineFilePdf} from 'react-icons/ai'
import {FcConferenceCall} from 'react-icons/fc'
import { userContext } from '../../App';
function Sidebar() {
  const User=useContext(userContext)
  return (
    <div className='bg-white w-52 p-4  md:flex hidden'>
       {
          User.gmail ?
      <div className="header mt-3 flex space-x-5 ">
        <img src={imageProfile} className='w-12 h-12 rounded-full' alt="" srcset="" />
        <p>{User.firstName}</p>
      </div>:""
      }

  <div className="mt-4">
  <hr />
  </div>

  <div className="nav p-5">
    <nav className=' '>
        <ul>

            <Link to='/admin-dashboard' className='flex space-x-3 p-2 '> 
            <FaTachometerAlt fontSize={20}/> 
            <p>Preview</p>
            </Link>
            <Link to='products' className='flex space-x-3 p-2 '> 
            <BsCart3 fontSize={20}/> 
            <p>Products</p>
            </Link>

            <Link to='Categry' className='flex space-x-3 p-2 '> 
            <AiOutlineFilePdf fontSize={20}/> 
            <p>Categry</p>
            </Link>


            <Link  to='Contect' className='flex space-x-3 p-2 '> 
            <FcConferenceCall fontSize={20}/> 
            <p>Contects</p>
            </Link>
        </ul>

    </nav>
  </div>
    </div>
  )
}

export default Sidebar