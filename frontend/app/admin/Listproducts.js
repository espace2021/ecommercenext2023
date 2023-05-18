'use client'
import Image from "next/image";
import Link from "next/link";
import axios from 'axios'
import { useRouter } from "next/navigation";

const Listproducts = ({produits}) => {

  const router = useRouter();

  //suppression

  const handleDelete=async(_id)=>{
    if(window.confirm("supprimer le produit O/N")) {
             console.log(_id)
             await ( axios.delete('http://localhost:3001/api/articles/' + _id))
             .then((res)=>{ console.log(res)
              router.refresh()
             })
             .catch(error=>{
                 console.log(error)
                })
 }
}


  return (
    
       <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <h1 className="text-3xl my-5 ml-4 font-bold">
        {produits?.length} Products
      </h1>
      <table className="w-full text-sm text-left">
        <thead className="text-l text-gray-700 uppercase">
          <tr>
            <th scope="col" className="px-6 py-3">
              Image
            </th>
            <th scope="col" className="px-6 py-3">
              Désignation
            </th>
            <th scope="col" className="px-6 py-3">
              Marque
            </th>
            <th scope="col" className="px-6 py-3">
             Stock
            </th>
            <th scope="col" className="px-6 py-3">
              Prix
            </th>
            <th scope="col" className="px-6 py-3">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {produits?.map((product, index) => (
            <tr className="bg-white" key={index}>
                <td className="px-6 py-2">
                <Image
              src={
                product?.imageart
                  ? product?.imageart
                  : "/images/default_product.png"
              }
              alt="product anme"
              height="50"
              width="50"
            />

                </td>
              <td className="px-6 py-2">
              <Link
                    href={`/admin/products/detail/${product?._id}`}
                    className="px-2 py-2 inline-block text-green-600 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 cursor-pointer mr-2"
                  >  
                {product?.designation.substring(0,20)}
                ...
              </Link>  
              </td>
              <td className="px-6 py-2">{product?.marque}</td>
              <td className="px-6 py-2">{product?.qtestock}</td>
              
              <td className="px-6 py-2">Dt {product?.prix}</td>
              <td className="px-6 py-2">
                <div>
                  <Link
                    href={`/admin/products/update/${product?._id}`}
                    className="px-2 py-2 inline-block text-green-600 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 cursor-pointer mr-2"
                  >
                    <i className="fa fa-image" aria-hidden="true">Update</i>
                  </Link>

                  <span  onClick={()=>handleDelete(product._id)} 
                  className="px-2 py-2 inline-block text-yellow-600 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 cursor-pointer mr-2"
                  >
                    <i className="fa fa-pencil" aria-hidden="true">Delete</i>
                  </span>
                  
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
    
  )
}

export default Listproducts
