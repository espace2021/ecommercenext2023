import NewProduct from "@/components/admin/NewProduct";
import React from "react";
import axios from 'axios'

const getSCategories=async()=>{

  const scategories=axios.get("http://localhost:3001/api/scategories").then((res)=>{
    return res.data
  })
  
  return scategories
  }

const NewProductPage = async () => {

  const scategories = await getSCategories();

  return <NewProduct scategories ={scategories} />;
};

export default NewProductPage;