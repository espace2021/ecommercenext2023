'use client'
import React from 'react'

const ProductList = ({products}) => {
  return (
    <div>
    {products && products.map((product) =>{
        return <div> {product.designation}</div>
    })
    
}
    </div>
  )
}

export default ProductList
