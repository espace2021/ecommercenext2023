import React from 'react'
import axios from "axios";
import UpdateProduct from '@/components/admin/UpdateProduct';

async function getProductDetails(id){
    try {
     const res = await axios.get(`http://localhost:3001/api/articles/${id}`)
     const product = await res.data;
     return product;
    }
    catch (error) {
        console.log(error);
    }
}

const getSCategories=async()=>{

    try {
        const res = await axios.get(`http://localhost:3001/api/scategories`)
        const scategories = await res.data;
        return scategories;
       }
       catch (error) {
           console.log(error);
       }
    }

const UpdateProductPage = async ({params}) => {

 const scategories = await getSCategories();  

 const product = await getProductDetails(params.id);
  
    
return (
  <UpdateProduct prod={product} scategories={scategories} />
  );
};

export default UpdateProductPage;