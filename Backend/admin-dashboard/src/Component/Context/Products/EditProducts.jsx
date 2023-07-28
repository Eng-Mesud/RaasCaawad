import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom';

function EditProducts() {

  const [filedata,setImage]= useState('');
  const [ProductName,setProductsName] = useState('');
  // const [filedata,setFiledata] = useState();
  const [Productscat,setProductscat] = useState('');
  const [title,setProductstitle] = useState('');
  const [published,setProductPublished] =useState('');
  // const [values,setProductvalue] = useState({
  //   ProductName:'',
  //   title:'',
  //   published:"",
    
  // });

  const data = new FormData();
  data.append('ProductName',ProductName);
  data.append('image',filedata);
  // data.append('Categry',Productscat);
  data.append('title',title);
  data.append('published',published);

  // const handleInput =(event)=>{
  //   setProductvalue(prev => ({...prev,[event.target.name]:  [event.target.value]}))
  //  }
  const {id} =useParams();

  const getSearchidProducts = async()=>{
    axios.get("http://localhost:5000/Searcupdateid/"+id)
    .then(res => {
      setImage(res.data.image)
      setProductsName(res.data.ProductName)
      setProductstitle(res.data.title)
      setProductPublished(res.data.published)
      // setProductsName(res.data.ProductName)

      // setProductvalue({ ...values,
      //   ProductName: res.data.ProductName,
      //   title: res.data.title,
      //   published: res.data.published
      //   ,
  
      // })
     
    })

    
    .catch(err => console.log(err));
}
useEffect(() =>{
    
    getSearchidProducts();
    },[])


    const handleUpdated= async(e)=>{
      e.preventDefault();

      const res = await axios.put('http://localhost:5000/Updated_published/'+id,data)
      .then(res => 
     console.log(res)
      ).catch (err => console.log(err));
     
     
   }


  //  const hiddenFileInput = useRef();
  // const handleClick = (event) => {
  //   event.preventDefault();
  //   hiddenFileInput.current.click();
  // };
  // const handleImageChange = (event) => {
  //   const file = event.target.files[0];
  //   console.log(file);
  //   setImage(event.target.files[0]);
  //   // const imgname = event.target.files[0].name;

  // }

  return (
    <div>
      <div className="bg-white p-4 rounded ">
        <div className="header">
          <h1 className='text-3xl font-serif'> Edit products  </h1>

        </div>
 <form onSubmit={handleUpdated}>

 
        <div className="row grid grid-cols-1 md:grid-cols-3 mt-4 gap-4">
        <div className="form-control ">
                            <input type="text"  className=' border focus:outline-none p-1 w-full h-12' placeholder='title' name='ProductName' value={ProductName}   onChange={e => setProductsName(e.target.value)} />
                        </div>

                        <div className="form-control ">
                            <input type="text"  className=' border focus:outline-none p-1 w-full h-12' name='titale' placeholder='title'  onChange={e => setProductstitle(e.target.value)} />
                        </div>


                        <div className="form-control ">
                            <input type="text"  className=' border focus:outline-none p-1 w-full h-12' value={title} placeholder='title'   />
                        </div>


                        <div className="form-control ">
                            <select className=' border focus:outline-none p-1 w-full h-12' placeholder='published' value={published}  onChange={e => setProductPublished(e.target.value)}>

                              <option value="">--chose published ---</option>
                              <option value="yes">Yes</option>
                              <option value="no">No</option>
                               </select>
                        </div>



          <div className="form-control">
            <div className="img border-slate-950 border rounded p-4 w-64 h-full "   style={{ cursor: "pointer" }}>
            <img src={`http://localhost:5000/images/${filedata}`} className='   w-64 h-64' alt="" srcset="" /> 
               {/* {image ? (
           <h1>helo</h1>
                // <img src={URL.createObjectURL(image)} alt="" />
               ):(
                // <img src={URL.createObjectURL(image)} alt="" />
               
                <img src={`http://localhost:5000/images/${image}`} className=' rounded-full' alt="" srcset="" /> 
               )
               } */}
         
        </div>
        <input
            id="image-upload-input"
            type="file"
            onChange={e=> setImage(e.target.files[0])}
            //  ref={hiddenFileInput}
            
          />

      


          </div>

       

        </div>

        <div className="text-end mt-10">
          <button className='bg-slate-300 p-2 w-32'>Save edit</button>
        </div>

        </form>

      </div>
    </div>
  )
}

export default EditProducts