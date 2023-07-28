import React, { useEffect, useState } from 'react'
import newimg from '../../image/five.jpg'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
function ProductsInformation() {
    const [dataProducts,setproducts] = useState([]);
    const [dataProducts_single,setproducts_single] = useState([]);
    const {id} = useParams();


    const [Categreis,setCategreis] = useState([]);
    const [data,setdata] = useState([]);

    useEffect(()=> {
        axios.get('http://localhost:5000/productLetst')
        .then(res => {
            setdata(res.data.productLatest)
        })
        .catch(err => console.log(err))
    },[])


    useEffect(()=> {

        axios.get('http://localhost:5000/productslistId/'+id)
        .then(res => setproducts(res.data.productList))
        .catch(err => console.error(err))
    },[])

    useEffect(() => {
        axios.get('http://localhost:5000/listCaregry')
        .then(res => {
            setCategreis(res.data.categryList)
        })
        .catch(err => console.log(err))
    },[])
   


    useEffect(()=> {

        axios.get('http://localhost:5000/productslistId_list/'+id)
        .then(res => {
            setproducts_single({...dataProducts_single,
               
                test: res.data.productList[0].image,
            }
            
                )

        }
        
        )

        .catch(err => console.error(err))
    },[])


  return (
    <div className='pt-20'>

    <div className=" max-w-7xl m-auto container">
        <h1 className='text-center font-semibold text-5xl '>List Products Information</h1>

      
            <div className="grid md:grid-cols-3 grid-cols-1 gap-3 p-3 mt-10">
            <div className="col-span-2">
                <div className="hear flex space-x-2 m-2">
                    <li>Home</li>
                    <li>All products</li>
                    <li>for test</li>
                </div>
            <img src={`http://localhost:5000/images/${dataProducts_single.test}`} className='w-full h-[600px] rounded' alt="" srcset="" />
            </div>

            <div>
                <div className="bg-white shadow-xl  border p-4 rounded ">
                    <h1>Letest products</h1>

                   

                    {
                    data.map((dataProducts,i) =>(
                      <Link to={`/productslist/${dataProducts.Categry}`} key={i}>

                      <div className="flex space-x-2 mt-4">
                        <img src={`http://localhost:5000/images/${dataProducts.image}`} className='h-20 w-20 rounded-lg' alt="" srcset="" />
                        <h1 className=''> {dataProducts.ProductName}</h1>
                      </div>
                       
                      </Link>
                    ))
                }
                   <div className="Tags mt-2">
                    <h1 className='text-2xl '>Categreis</h1>
                    <div className="Categry mt-3 grid grid-cols-3 gap-4">

                      {
                        Categreis.map((cat,i) =>(
                            <Link to={`/ProductslinkSearch-Categreis/${cat._id}`} className='bg-white border p-2 rounded'>{cat.name}</Link>
                        ))
                      }
                      
                  

                    </div>
                   </div>

                  
                </div>
            </div>

        </div>
      

        <div className="categries mt-4 max-w-5xl m-auto">
            <h1 className="text-2xl font-serif">
                Drink
            </h1>
            <div className="grid md:grid-cols-5 grid-cols-2 gap-4 p-3">
                {/* <div className="">
                    <img src={newimg} className='h-48 w-64 rounded' alt="" srcset="" />
                </div> */}

                {
                    dataProducts.map((dataProducts,i) =>(
                      <Link to={`/productslist/${dataProducts._id}`} key={i}>
                        <div className="">
                        <img src={`http://localhost:5000/images/${dataProducts.image}`} className='h-48 w-64 rounded' alt="" srcset="" />
        
                        <p className="text-2xl">
                           {dataProducts.ProductName}
                        </p>
        
                       </div>
                      </Link>
                    ))
                }
              
            </div>
        </div>

    </div>
    </div>
  )
}

export default ProductsInformation