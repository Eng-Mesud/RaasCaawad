import React from 'react'
import cartoms from '../../image/Cartoms.jpg'
import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Swal from 'sweetalert2'
function Contec() {
    const [name,setName]=useState('');
    const [gmail,setGmail]=useState('');
    const [phone,setPhone]=useState('');
    const [adress,setAdress]=useState('');
    const [message,setMessage]=useState('');
    
    const handleContect =(e) => {
        e.preventDefault();
        // alert("clicked");
        axios.post('http://localhost:5000/addcontect',{name,gmail,phone,adress,message})
        .then(res => {
            toast.success('🦄 Success Fully!', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
            
        })
        .catch(err => console.log(err))
    }
  return (
    <div className='mt-10 '>
        <div className="container max-w-7xl m-auto">
            <div className="row bg-slate-100 border  p-4 rounded grid md:grid-cols-2 grid-cols-1 gap-2">
                <div className="img"> 
              <img src={cartoms} alt="" srcset="" />
                </div>
                
                <div className="left">
                    <h1 className='text-2xl font-thin'>Contect us</h1>
                    <form action="" onSubmit={handleContect}>
                    <div className="row grid grid-cols-2 gap-4">
                        <div className="form-control grid grid-cols-1 ">
                            <label htmlFor="">first Name</label>
                            <input type="text"  className='border p-2' required onChange={e=> setName(e.target.value)}/>
                        </div>

                        <div className="form-control  grid grid-cols-1">
                            <label htmlFor="">email</label>
                            <input type="text"  className='border p-2' required onChange={e=> setGmail(e.target.value)}/>
                        </div>

                        <div className="form-control  grid grid-cols-1">
                            <label htmlFor="">Phone</label>
                            <input type="text"  className='border p-2' required onChange={e=> setPhone(e.target.value)}/>
                        </div>

                        <div className="form-control  grid grid-cols-1">
                            <label htmlFor="">Adress</label>
                            <input type="text"  className='border p-2' required onChange={e=> setAdress(e.target.value)}/>
                        </div>

                        <div className="form-control  grid grid-cols-1 col-span-2">
                            <label htmlFor="">messages</label>
                            <textarea name="" id="" cols="10" rows="10" className='border' required onChange={e=> setMessage(e.target.value)}></textarea>
                        </div>

                    </div>
                    <div className="btn text-end mt-5">
                        <button className='bg-sky-300 w-34 p-2'>Save Contect</button>
                        <ToastContainer />
                    </div>
                    </form>
                   

                </div>


            </div>
            
        </div>
    </div>
  )
}

export default Contec