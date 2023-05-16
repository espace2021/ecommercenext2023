"use client"
import React,{useState} from 'react'
import Axios from '../../pages/api/axios-client';
import ProductList from '../../components/products/productList'
function getProducts(){
 
 const res = Axios.get('/articles')
  .then((res)=>{return res.data})
  .catch((err)=>{console.log(err) ; return null })
 return res;  
}

const Listproduct =  () => {

  const [products,setProducts]=useState()

   getProducts().then((response) => {setProducts(response) })
  

  return (
   <ProductList products={products} />
  )
}

export default Listproduct
