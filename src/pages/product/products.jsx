import React,{useEffect} from 'react'
import {getPosts} from "./api/api.js"

const products = () => {
  return (
    useEffect(()=>{
        getPosts().then(posts => console.log(posts))
    },[])
  )
}

export default products