import React from 'react'
import Axios from '../../axios-client';

async function getProducts(){
 
  await Axios.get('articles')
  .then((res)=>{return res.data})
  .catch((err)=>{console.log(err) ; return null })
   
}

const Listproduct =  async() => {
  const products =  await getProducts();
  
  return (
    <div>
     { products?.map((product,index) =>{
       return <div key={index}>{product.designation}</div>
          })
        }
    </div>
  )
}

export default Listproduct
