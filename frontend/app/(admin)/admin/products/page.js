import React from 'react'
import axios from 'axios'
import Listproducts from '@/components/admin/Listproducts';

const getProducts=async()=>{
//  const res= await fetch('http://localhost:3001/api/articles', { cache: 'no-store' })
 // const data = await res.json();
 //  return data;
const articles=axios.get("http://localhost:3001/api/articles").then((res)=>{
  return res.data
})

return articles
}



const AdminProducts  = async() => {
    const produits = await getProducts();
   
  return (
    <div>
      <Listproducts  produits={produits} />
    </div>
  )
}

export default AdminProducts 

