//"use client"
import React  from 'react'
//import Axios from '../../pages/api/axios-client';
import ProductList from '../../components/products/productList'

import { AuthGetApi } from "lib/fetchApi";
import { getServerSession } from "next-auth";
import { authOptions } from "pages/api/auth/[...nextauth]";

function getProducts(){
  const res = AuthGetApi('/articles')
 //const res = Axios.get('/articles')
  .then((res)=>{return res.data})
  .catch((err)=>{console.log(err) ; return null })
 return res;  
}

const Listproduct =  async() => {

 /* const [products,setProducts]=useState()

   getProducts().then((response) => {setProducts(response) })
  

  return (
   <ProductList products={products} />
  )*/

  const posts = await AuthGetApi("/articles");

  return <div>{JSON.stringify(posts)}</div>;
}

export default Listproduct
