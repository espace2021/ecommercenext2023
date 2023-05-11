import CarouselCards from '@/components/products/CarouselCards'
import React from 'react'

async function getProducts(){
 
    const res= await fetch('http://localhost:3001/api/articles')
    const products = await res.json();
    return products;
}

const Listproduct = async () => {
  const products = await getProducts();
  return (
    <div>
        <CarouselCards products={products} />
    </div>
  )
}

export default Listproduct
