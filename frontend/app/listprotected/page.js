"use client"
import React from 'react'
import Axios from '../../pages/api/axios-client';

async function getProducts(){
 
 const res = await Axios.get('/articles')
  .then((res)=>{return res.data})
  .catch((err)=>{console.log(err) ; return null })
 return res;  
}

const Listproduct =  async() => {
  const products =  await getProducts();

  return (
    <div>
     { products?.map((product,index) =>{
       return <div key={index}>{product.designation}</div>
          })
        }
    </div>
  )
}

export default Listproduct
