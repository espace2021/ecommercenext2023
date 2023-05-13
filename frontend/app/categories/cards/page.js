"use client";
import CarouselCards from '@/components/categories/CarouselCards'
import React,{useState} from 'react'


const Liscategories =  () => {

 const [categories,setCategories]=useState()
 
 fetch('http://localhost:3001/api/categories',{cache : "no-store"})
  .then((response) => response.json())
  .then((res) => { 
    setCategories(res) 
  });

 
  return (
    <div>
<CarouselCards cat={categories} />
  
    </div>
  )
}

export default Liscategories
