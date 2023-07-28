import React, { createContext, useEffect, useState } from 'react'
import Shere from './leyoutBage/Shere'
import {Routes,Route ,Router} from 'react-router-dom'
import OverVivew from './Component/Context/OverVivew'
import Categry from './Component/Context/Categry/Categry'
import Products from './Component/Context/Products/Products'
import AddProducts from './Component/Context/Products/AddProducts'
import Login from './Component/Auther/Login'
import axios from 'axios';
import EditProducts from './Component/Context/Products/EditProducts'
import UpdatedCategry from './Component/Context/Categry/UpdateCategry'
import Contectlist from './Component/Context/Contect/ContectList'
export const userContext=createContext()
function App() {
  const [user ,setUserdata] =useState('')
  // axios.defaults.withCredentials=true;
  useEffect(()=>{
    axios.get('http://localhost:5000')
    .then(res => {
      setUserdata(res.data)
    })
    .catch(err => console.error(err))
  },[]);
  return (
    <div className=''>
        <userContext.Provider value={user}>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
      </Routes>
       <Routes>

        <Route path='/admin-dashboard' element={ <Shere/>}>
            <Route index element={<OverVivew/>}/>
            <Route path="Categry" element={<Categry/>}/>
            <Route path="products" element={<Products/>}/>
            <Route path="Contect" element={<Contectlist/>}/>
            <Route path="Addproducts" element={<AddProducts/>}/>
            <Route path="products/edit/:id" element={<EditProducts/>}/>
            <Route path="/admin-dashboard/Categry/edit/:id" element={<UpdatedCategry/>}/>
        </Route>
       </Routes>
       </userContext.Provider>
    </div>
  )
}

export default App