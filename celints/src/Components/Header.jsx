import React, { useState } from 'react'
import { BrowserRouter, Link, useNavigate } from 'react-router-dom'
import {IoIosArrowDown} from 'react-icons/io'
import {SlSocialFacebook, SlSocialInstagram} from 'react-icons/sl'
import {HiOutlineMenuAlt3} from 'react-icons/hi'
import {GrFacebookOption, GrFormClose} from 'react-icons/gr'
import {Routes ,Route,Router} from 'react-router-dom'
import { FiChevronLeft } from 'react-icons/fi'
import Search from './Search'
import {BsInstagram, BsSearch, BsWhatsapp} from 'react-icons/bs'

import RaasLogo from '../image/RaasCawad_LOGO.png'

function Header({history}) {

    const [keyword,setKeyword] = useState('');

    const navgate =useNavigate()
//    const [form] = Form.useForm();
    const searchHandler =(e) => {
        e.preventDefault();
     
        if(keyword.trim()) {
            navgate(`search/${keyword}`);
            setKeyword("");
        }else{
            navgate('/')
        }
    }

    const [open ,setOpen] =useState(false);
    const [Menuopen ,setMenuOpen] =useState(false);

    const [ChildMenuopen ,setChildMenuOpen] =useState(false);
  return (

  


// <div className='text-black     w-full'>

// <div className="    max-w-6xl m-auto mt-5">



// <form action="" onSubmit={searchHandler}>

// <div className="flex ">
// <input type="text" id='search_field' className='form-control relative  p-2 border w-full md:w-full rounded-lg h-14 text-2xl'
// placeholder='Enter product Name ....'  value={keyword}
// onChange={(e) =>setKeyword(e.target.value)} />

// <div className="input-group-append text-end absolute  right-0  p-2 h-14 ">
//     <button id='search_btn' className='btn text-end'  > <BsSearch fontSize={45} /></button>
// </div>
// </div>
// </form>
// </div>
// <div className="ml-0 text-start md:hidden left-0" onClick={()=>setOpen(!open)}>
//                 {
//                     open ? (
//                         <GrFormClose  fontSize={45} className='ml-0 text-start left-0'/>
                        
//                     ):(
//                         <HiOutlineMenuAlt3  fontSize={45} className='ml-0 text-start left-0'/>
//                     )
//                 }
//                  </div>
//         <div className='max-w-7xl m-auto '>

//             <div className="flex justify-between text-center md:p-4">
//                 {/* <h1 className='text-2xl text-black'>Logo </h1> */}
//                 <Link to='/' className=''><img src={RaasLogo} alt="RAASCAWAD" className='w-24 mt-0 h-24' srcset="" /></Link>
              

//                 <nav className='text-2xl   text-center text-white   font-thin hidden md:flex'>
//                     <ul className='flex space-x-3  text-center'>
//                     {/* <!-- menu bar --> */}
                
             
                    //  <Link to='/about'>About</Link>
                    //  <Link to='/Products'>Products</Link>
                    //  <Link to='/galery'>Galery</Link>
                    //  <Link to='/Contect'>Contect</Link>
//                     </ul>
//                 </nav>
//             </div>














//             <nav className= {`" bg-neutral-400 text-2xl absolute w-64 h-full left-0 p-2 flex flex-col  mt-0  md:hidden text-black"
//     ${open ? "flex":"hidden"}
//   `} >
//                     <ul className='flex flex-col-reverse  gap-2 px-1 py-3'>
//                     {/* <!-- menu bar --> */}
                
//                 <div class=" relative">
//                     <div className="">
//                       <a href="#" class="text-xl hover:text-cyan-500 duration-500   space-x-1 flex rounded-lg"  onClick={()=>setChildMenuOpen(!ChildMenuopen)}>
                        
//                        <p> Shoping</p>
//                        {
//                         ChildMenuopen ?(
//                             <IoIosArrowDown fontSize={25} className='mt-1'  />
                            
//                         ):(
//                             <FiChevronLeft  fontSize={25} className='mt-1'  />
//                         )
//                      } 
//                       </a>
//                     </div>
           
//                 <div class={`"absolute top-1  w-full   left-0  ' ${ChildMenuopen ? "flex":"hidden"}`}>
//                     <div class='    '>

//                        <div className="categry relative  ml-6  flex flex-col-reverse ">
//                        <Link className='flex space-x-1'  onClick={()=>setMenuOpen(!Menuopen)}>
                       
//                       <p className='text-1xl'> Drinks</p>
//                      {
//                         Menuopen ?(
//                             <IoIosArrowDown fontSize={20} className='mt-1'  />
//                         ):(
//                             <FiChevronLeft  fontSize={25} className='mt-1'  />
                            
//                         )
//                      }
//                       {/* FiChevronLeft */}
//                       </Link>
//                         {/* <Link>Choclate</Link>
//                         <Link>Chips</Link> */}

//                         <div className={`" absolute top-7 top w-full flex flex-col-reverse  left-0 "  ${Menuopen ? "flex":"hidden"}
//   `}>
                        
//                        <div className="ml-3">
//                        <Link>
//                         Dasaani
//                         </Link>
//                        </div>

//                        <div className="ml-3">
//                        <Link>
//                         Dasaani
//                         </Link>
//                        </div>


//                        <div className="ml-3">
//                        <Link>
//                         Dasaani
//                         </Link>
//                        </div>

//                        <div className="ml-3">
//                        <Link>
//                         Dasaani
//                         </Link>
//                        </div>
//                         </div>
//                        </div>

                     



// </div>



//                         </div>
                      


//             </div>
//                      <Link to='/about'>About</Link>
//                      <Link to='/Products'>Products</Link>
//                      <Link to='/Contect'>Contect</Link>
//                     </ul>
//                 </nav>


//         </div>

//     </div>
  <div>
   <div className="contect  max-w-6xl m-auto">
    <div className="flex    ">
        <div className='flex space-x-3 p-2  items-centertext-center'>
        <a href="https://wa.me/252610973722"> <p><BsWhatsapp fontSize={25} /></p> </a>
            <a href="https://www.facebook.com/profile.php?id=100093105353671&mibextid=ZbWKwL"><p><GrFacebookOption fontSize={25}  /></p></a>
            
            <p><BsInstagram fontSize={25} /></p>
           <p>phone / 0610912189</p>
           
        </div>


    </div>
   </div>

   <div className="logo and search max-w-5xl m-auto md:flex md:justify-around  ">


    <div className="logo ">
    <Link to='/' className=''><img src={RaasLogo} alt="RAASCAWAD" className='w-14 mt-0 h-14' srcset="" /></Link>
    </div>

    <div className="input items-center p-2 md:max-w-3xl  m-auto sm:flex sm:justify-between ">
      
        <form action="" onSubmit={searchHandler} className=''>

        <div className="relative   flex">
        <input type="text" id='search_field' className='form-control relative  p-6 border w-full md:w-full rounded-lg h-10  text-2xl'
        placeholder='Enter product Name ....'  value={keyword}
        onChange={(e) =>setKeyword(e.target.value)} />

        <div className="input-group-append  absolute  right-0 text-end  p-3  h-8 ">
            <button id='search_btn' className='btn text-end '  > <BsSearch fontSize={25} /></button>
        </div>
        </div>
        </form>

        <div className="ml-0 text-start md:hidden left-0" onClick={()=>setOpen(!open)}>
                 {
                     open ? (
                         <GrFormClose  fontSize={45} className='ml-0 text-start left-0'/>
                        
                     ):(
                         <HiOutlineMenuAlt3  fontSize={45} className='ml-0 text-start left-0'/>
                     )
                 }
                  </div>
    </div>

   

   

    

   </div>

   <div className=" bg-blue-950 hidden md:flex ">
        <nav className="text-center text-white space-x-4 text-2xl max-w-3xl m-auto">
                     <Link to='/about' className='text-center'>About</Link>
                     <Link to='/Products' className='hover:text-sky-300  text-center'>Products</Link>
                     <Link to='/galery'  className='hover:text-sky-300 text-center'>Galery</Link>
                     <Link to='/Contect'  className='hover:text-sky-300 text-center'>Contect</Link>
        </nav>
    </div>



  
 <nav className= {`" bg-blue-950 text-2xl  text-white space-y-5 absolute w-full h-64 left-0 p-2 flex flex-col  mt-0  md:hidden text-black"
    ${open ? "flex":"hidden"}
  `} >
             <Link to='/about' className='text-center'>About</Link>
             <Link to='/Products' className='hover:text-sky-300  text-center'>Products</Link>
             <Link to='/galery'  className='hover:text-sky-300 text-center'>Galery</Link>
             <Link to='/Contect'  className='hover:text-sky-300 text-center'>Contect</Link>
</nav>



  </div>
  
  )
}

export default Header