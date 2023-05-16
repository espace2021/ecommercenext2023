import React from 'react'
import ProductCard from '../../../components/user/ProductCard'
import axios from 'axios'
const getProducts=async()=>{
  const {data}=await axios.get(`${process.env.API_URL}/api/articles`)
  return data;
}
const ProductPage = async() => {
  const produits = await getProducts();
  return (
    <div className="flex flex-wrap gap-4 p-2">
      
<ProductCard produits={produits}/>

    </div>
  )
}

export default ProductPage
