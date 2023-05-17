'use client'
import React from 'react'

const ProductList = ({products}) => {
  return (
    <div>
    {products && products.map((product,index) =>{
        return <div key={index}> {product.designation}</div>
    })
    
}
    </div>
  )
}

export default ProductList
