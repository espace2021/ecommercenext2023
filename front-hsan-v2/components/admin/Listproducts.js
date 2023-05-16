import Image from "next/image";
import Link from "next/link";

const Listproducts = ({produits}) => {
  return (
    
       <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <h1 className="text-3xl my-5 ml-4 font-bold">
        {produits?.productsCount} Products
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
          {produits?.map((product) => (
            <tr className="bg-white">
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
              <td className="px-6 py-2">{product?.designation.substring(0,20)}...</td>
              <td className="px-6 py-2">{product?.marque}</td>
              <td className="px-6 py-2">{product?.qtestock}</td>
              
              <td className="px-6 py-2">Dt {product?.prix}</td>
              <td className="px-6 py-2">
                <div>
                  <Link
                    href={`/admin/products`}
                    className="px-2 py-2 inline-block text-green-600 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 cursor-pointer mr-2"
                  >
                    <i className="fa fa-image" aria-hidden="true">Update</i>
                  </Link>

                  <Link
                    href={`/admin/products`}
                    className="px-2 py-2 inline-block text-yellow-600 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 cursor-pointer mr-2"
                  >
                    <i className="fa fa-pencil" aria-hidden="true">Delete</i>
                  </Link>
                  
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
