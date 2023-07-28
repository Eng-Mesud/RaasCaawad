import React, { useState } from 'react'
import { BrowserRouter, Link, useNavigate } from 'react-router-dom'
import {IoIosArrowDown} from 'react-icons/io'
import {SlSocialFacebook, SlSocialInstagram} from 'react-icons/sl'
import {HiOutlineMenuAlt3} from 'react-icons/hi'
import {GrFormClose} from 'react-icons/gr'
import {Routes ,Route,Router} from 'react-router-dom'
import { FiChevronLeft } from 'react-icons/fi'
import Search from './Search'
import {BsSearch} from 'react-icons/bs'

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
   <div className='bg-green-400  p-6' >
    {/* <div className="header   space-y-4  md:flex  justify-between  max-w-7xl m-auto   p-4">
      <p></p>
     <Link to='/'> <h1 className="justify-center items-center  text-3xl ">Raas cawad T .CO</h1></Link>

      <div className=' flex space-x-2'>
       
      
        <p>+25225325362</p>

        <a href=""><SlSocialFacebook  fontSize={25}/> </a>

      <a href="">  <SlSocialInstagram  fontSize={25}/></a>
     
        
      </div>


    </div> */}

  


<div className='text-black    w-full'>

<div className="ml-0 text-start md:hidden left-0" onClick={()=>setOpen(!open)}>
                {
                    open ? (
                        <GrFormClose  fontSize={45} className='ml-0 text-start left-0'/>
                        
                    ):(
                        <HiOutlineMenuAlt3  fontSize={45} className='ml-0 text-start left-0'/>
                    )
                }
                 </div>
        <div className='max-w-7xl m-auto'>

            <div className="flex justify-between text-center md:p-4">
                {/* <h1 className='text-2xl text-black'>Logo </h1> */}
                <Link to='/'> <h1 className="justify-center items-center  text-3xl text-black   font-thin">Raas cawad T .CO</h1></Link>
              

                <nav className='text-2xl  text-center text-black   font-thin hidden md:flex'>
                    <ul className='flex space-x-3  text-center'>
                    {/* <!-- menu bar --> */}
                
             
                     <Link to='/about'>About</Link>
                     <Link to='/Products'>Products</Link>
                     <Link to='/Contect'>Contect</Link>
                    </ul>
                </nav>
            </div>





    <div className="  relative max-w-6xl m-auto mt-5">
      {/* <input type="text"  className='form-control  p-3 border w-full md:w-full rounded-lg h-14 text-2xl' placeholder='enter Product search name'/>
      
       */}


     {/* <BrowserRouter> */}
    {/* <Router> */}
    {/* <Routes>
      <Route render={({history}) => <Search history={history} /> } />
      </Routes> */}
    {/* </Router> */}
     {/* </BrowserRouter> */}


                <form action="" onSubmit={searchHandler}>

               <div className="flex ">
               <input type="text" id='search_field' className='form-control relative  p-3 border w-full md:w-full rounded-lg h-14 text-2xl'
                placeholder='Enter product Name ....'  value={keyword}
                onChange={(e) =>setKeyword(e.target.value)} />

                <div className="input-group-append text-end absolute  right-0  p-2 h-14 ">
                    <button id='search_btn' className='btn text-end'  > <BsSearch fontSize={45} /></button>
                </div>
               </div>
                </form>
    </div>









            <nav className= {`" bg-neutral-400 text-2xl absolute w-64 h-full left-0 p-2 flex flex-col  mt-0  md:hidden text-black"
    ${open ? "flex":"hidden"}
  `} >
                    <ul className='flex flex-col-reverse  gap-2 px-1 py-3'>
                    {/* <!-- menu bar --> */}
                
                <div class=" relative">
                    <div className="">
                      <a href="#" class="text-xl hover:text-cyan-500 duration-500   space-x-1 flex rounded-lg"  onClick={()=>setChildMenuOpen(!ChildMenuopen)}>
                        
                       <p> Shoping</p>
                       {
                        ChildMenuopen ?(
                            <IoIosArrowDown fontSize={25} className='mt-1'  />
                            
                        ):(
                            <FiChevronLeft  fontSize={25} className='mt-1'  />
                        )
                     } 
                      </a>
                    </div>
           
                <div class={`"absolute top-1  w-full   left-0  ' ${ChildMenuopen ? "flex":"hidden"}`}>
                    <div class='    '>

                       <div className="categry relative  ml-6  flex flex-col-reverse ">
                       <Link className='flex space-x-1'  onClick={()=>setMenuOpen(!Menuopen)}>
                       
                      <p className='text-1xl'> Drinks</p>
                     {
                        Menuopen ?(
                            <IoIosArrowDown fontSize={20} className='mt-1'  />
                        ):(
                            <FiChevronLeft  fontSize={25} className='mt-1'  />
                            
                        )
                     }
                      {/* FiChevronLeft */}
                      </Link>
                        {/* <Link>Choclate</Link>
                        <Link>Chips</Link> */}

                        <div className={`" absolute top-7 top w-full flex flex-col-reverse  left-0 "  ${Menuopen ? "flex":"hidden"}
  `}>
                        
                       <div className="ml-3">
                       <Link>
                        Dasaani
                        </Link>
                       </div>

                       <div className="ml-3">
                       <Link>
                        Dasaani
                        </Link>
                       </div>


                       <div className="ml-3">
                       <Link>
                        Dasaani
                        </Link>
                       </div>

                       <div className="ml-3">
                       <Link>
                        Dasaani
                        </Link>
                       </div>
                        </div>
                       </div>

                     



</div>



                        </div>
                      


            </div>
                     <Link to='/about'>About</Link>
                     <Link to='/Products'>Products</Link>
                     <Link to='/Contect'>Contect</Link>
                    </ul>
                </nav>


        </div>

    </div>
  
   </div>
  )
}

export default Header