import React,{useEffect, useState} from 'react'
import axios from 'axios'

const Electronic = () =>{
  const API = 'https://dummyjson.com/products/categories';

  const {loading,setLoading} = useState(false);
  const {data,setData} = useState([]);

useEffect(()=>{
  setLoading(true);

  axios({
    method:"GET",
    url:"https://dummyjson.com/products';"
  }).then(res=>{
    console.log(res.data)
    setData(res.data)
  }).catch(e=>console.log(e))
  .finally(()=>setLoading(false));

},[])
  return (
    <div className='electronicProduct'>
      {loading && <div><h1>Loading...</h1></div>}
    </div>
  )
}

export default Electronic

