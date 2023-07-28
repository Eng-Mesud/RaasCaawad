import React from 'react'
import Header from './Components/Header'
import Home from './Components/Home'
import Services from './Components/Services'
import Feuture from './Components/Feuture'
import Costomer from './Components/Costomer'
import Footer from './Components/Footer'
import Coursel, { Products } from './Components/Coursel'
import {Routes ,Route,Router} from 'react-router-dom'
import HomeBages from './Components/HomeBages'
import ProductsInformation from './Components/Pages/ProductsInformation'
import ProductsDetails from './Components/Pages/Products'
import SearchCategreis from './Components/Pages/SearchCategreis'
import Search from './Components/Search'
import axios from 'axios'
import Contec from './Components/Pages/Contec'

function App() {
  // axios.defaults.withCredentials=true;
  return (
    <div>
        <Header/>
       
        <Routes>
          <Route path='/' element={<HomeBages/>}/>
          <Route path='/productslist/:id' element={<ProductsInformation/>}/>
          <Route path='/Products' element={<ProductsDetails/>}/>
          <Route path='/search/:keyword' element={<Search/>}/>
          <Route path='/Contect' element={<Contec/>}/>
          <Route path='/ProductslinkSearch-Categreis/:id' element={<SearchCategreis/>}/>

        </Routes>
        <Footer/>


    </div>
  )
}

export default App