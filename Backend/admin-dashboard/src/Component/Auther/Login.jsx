import { useState } from "react";
import { useNavigate } from "react-router-dom"
import axios from 'axios';

const Login =()=>{
  const [gmail,setEmail]=useState('');
  const [Password,setPassword] = useState('');
  const navigate = useNavigate()


  const handleLogin = async(e)=>{
    e.preventDefault();
    // navigate('/admin-dashboard');
    /// login
    axios.post('http://localhost:5000/login',{gmail,Password})
     .then(res => {
      if(res.status == 200){
          console.log(res.data.exisisting.email);
          navigate('/admin-dashboard');
          // window.location.href = `/@${res.data.exisisting.email}`
       
      }else{
          // console.log(res);
          alert("eror data");
      }
      
    
      
  })
  .catch(err => console.error(err))

}


    return (
      <div className="loginBage">

      <div className="">
        <div className=" grid md:grid-cols-3 grid-cols-1 ">
        

   <div>
   <div className="bg-white items-center justify-center mt-40  rounded-lg m-6 p-6 border ">
      <div className="header">
        <h1>Login bage</h1>
      </div>

      <div className="forms mt-3">
        <form action="" method="post" onSubmit={handleLogin}>
          <div className="form-control">
            <label htmlFor="">Email</label>
            <input type="text"  className='p-2 border w-full' name="gmail" onChange={e => setEmail(e.target.value)}/>
          </div>


          <div className="form-control mt-2">
            <label htmlFor="">Password</label>
            <input type="password"  className='p-2 border w-full' name="Password" onChange={e => setPassword(e.target.value)}/>
          </div>
          <div className="text-end mt-3">
            <a href="" className='text-rose-300'>forget password</a>
          </div>

          <div className="form-control mt-3">
            <button className='bg-green-400  p-2 w-full'>login</button>
          </div>
        </form>
      </div>

    </div>
   </div>

        </div>

      </div>

      </div>
    )
}

export default Login