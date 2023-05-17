import React from 'react'
import axios from 'axios'
import Detailproduct from '@/components/admin/Detailproduct';

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

const DetailProductpage = async ({params}) => {

    const product = await getProductDetails(params.id);

  return (
  <Detailproduct product={product} />

  )
}

export default DetailProductpage
