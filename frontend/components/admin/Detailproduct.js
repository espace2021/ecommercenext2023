import React from 'react'

const Detailproduct = ({product}) => {
  return (
    <div className="container">
    <div className="row mt-5">
      <div className="col-5">
        <img
          src={product.imageart}
          className="img-fluid rounded-start"
          height={300}
          width={300}
          alt={product.title}
        />
      </div>
      
      <div className="col-6 mt-5">
        <h2 className="my-4">{product.designation}</h2>
        <h3 className="my-4">{product.prix} TND</h3>
        <h5 className="my-4">{product.marque}</h5>
      </div>

     </div>
  </div>
  )
}

export default Detailproduct
