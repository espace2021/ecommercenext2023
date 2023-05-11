import CarouselCards from '@/components/categories/CarouselCards'
import React from 'react'

async function getCategories(){
 
    const res= await fetch('http://localhost:3001/api/categories',{cache : "no-store"})
    const categories = await res.json();
    return categories;
}

const Liscategories = async () => {
  const categories = await getCategories();
  return (
    <div>
        <CarouselCards cat={categories} />
    </div>
  )
}

export default Liscategories
