import CarouselCards from '@/components/categories/CarouselCards'
import React from 'react'

const getCategories=async ()=>{
 
    const res= await fetch('http://localhost:3001/api/categories',{cache : "no-store"})
    const categories = await res.json();
    return categories;
}

const Liscategories = async ({show}) => {
  const categories = await getCategories();
  return (
    <div>
    {show ? <CarouselCards cat={categories} /> :null } 
    </div>
  )
}

export default Liscategories
