import React from 'react'
import Footer from '../Component/pages/Footer'
import Context from '../Component/pages/Context'
import Sidebar from '../Component/pages/Sidebar'
import { Outlet } from 'react-router-dom'

function Shere() {
  return (
    <>
    <div className='bg-neutral-200 h-screen  overflow-hidden flex flex-row '>
            <Sidebar/>
      
        <div className="flex flex-col flex-1">
          <h1>header</h1>

       


           
   <div className='flex-1 p-4 min-h-0 overflow-auto'>

                {<Outlet/>}
                {/* <Context/> */}

                

          

            </div>

     
       
        </div>
        
        


    </div>


  
  
  </>

  )
}

export default Shere