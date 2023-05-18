
import Link from "next/link";
//import StarRatings from "react-star-ratings";
import Image from "next/image";
//import CartContext from "@/context/CartContext";

const ProductItem = ({ product }) => {
  

  return (
    <article className="border border-gray-200 overflow-hidden bg-white shadow-sm rounded mb-5">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/4 flex p-3">
          <div
            style={{
              width: "80%",
              height: "70%",
              position: "relative",
            }}
          >
            <Image
              src={
                product?.imageart
                  ? product?.imageart
                  : "/images/default_product.png"
              }
              alt="product anme"
              height="240"
              width="240"
            />
          </div>
        </div>
        <div className="md:w-2/4">
          <div className="p-4">
            <Link
              href={`/products/${product._id}`}
              className="hover:text-blue-600"
            >
              {product.designation}
            </Link>
            <div className="flex flex-wrap items-center space-x-2 mb-2">
              
              <b className="text-gray-300">•</b>
              <span className="ml-1 text-yellow-500"></span>
            </div>
            <p className="text-gray-500 mb-2">
              {product?.designation.substring(0, 40)}...
            </p>
          </div>
        </div>
        <div className="md:w-1/4 border-t lg:border-t-0 lg:border-l border-gray-200">
          <div className="p-5">
            <span className="text-xl font-semibold text-black">
              DT{product?.prix}
            </span>

            <p className="text-green-500">Free Shipping</p>
            <div className="my-3">
              <a
                className="px-4 py-2 inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 cursor-pointer"
                
              >
                {" "}
                Add to Cart{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
export default ProductItem;