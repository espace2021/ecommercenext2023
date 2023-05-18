'use client'

import React, { useState,useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

function UpdateProduct ({prod,scategories})  {

  const router = useRouter();
  const [product, setProduct] = useState({});

  useEffect(() => {
    setProduct(prod)
  },[]);

  const onChange = (e) => { 
     setProduct({ ...product, [e.target.name]: e.target.value });
  };

  

  const submitHandler = async(e) => {
    e.preventDefault();
    const produit={
      _id:product._id,
      reference: product.reference,
    imageart:product.imageart,
    designation: product.designation,
    prix: product.prix,
    qtestock: product.qtestock,
    marque: product.marque,
    scategorieID: product.scategorieID
    }
    
  await(axios.put('http://localhost:3001/api/articles/' + product._id,produit)
 )
  .then(res=>{
    console.log("update OK",res);
    router.push('/admin/products')
    router.refresh()
  })
  .catch(error=>{
    console.log(error)
    alert("Erreur ! Insertion non effectuée")
    })
 
    }

  return (
    <section className="container max-w-3xl p-6 mx-auto">
      <h1 className="mb-3 text-xl md:text-3xl font-semibold text-black mb-8">
        Update Produit
      </h1>

      <form onSubmit={submitHandler}>
        <div className="mb-4">
          <label className="block mb-1"> Référence </label>
          <input
            type="text"
            className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
            placeholder="Réféence"
            name="reference"
            value={product.reference}
            onChange={onChange}
            required
          />
        </div>
        <div className="grid md:grid-cols-2 gap-x-2 mt-5">
        <div className="mb-4">
            <label className="block mb-1"> Désignation </label>
            <div className="relative">
              <div className="col-span-2">
                <input
                  type="text"
                  className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
              
                  name="designation"
                  value={product.designation}
                  onChange={onChange}
                  required
                />
              </div>
            </div>
          </div>
            
       

          <div className="mb-4">
            <label className="block mb-1"> Image </label>
            <div className="relative">
              <div className="col-span-2">
                <input
                  type="text"
                  className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                  placeholder="0"
                  name="imageart"
                  value={product.imageart}
                  onChange={onChange}
                  required
                />
              </div>
            </div>
          </div>

          

        </div>

        <div className="grid md:grid-cols-2 gap-x-2 mt-5">
          <div className="mb-4">
            <label className="block mb-1"> Marque </label>
            <div className="relative">
              <div className="col-span-2">
                <input
                  type="text"
                  className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                  placeholder="0.00"
                  name="marque"
                  value={product.marque}
                  onChange={onChange}
                  required
                />
              </div>
            </div>
          </div>
          <div className="mb-4">
            <label className="block mb-1"> S/Catégorie </label>
            <div className="relative">
              <select
                className="block appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                name="scategorieID"
                value={product.scategorieID}
                onChange={onChange}
                required>
                 <option></option> 
                    {scategories && scategories.map((scateg,index)=>{
                      return <option key={index} value={scateg._id}>{scateg.nomscategorie}</option>
                    })}
                </select>
              
                
              
              <i className="absolute inset-y-0 right-0 p-2 text-gray-400">
                <svg
                  width="22"
                  height="22"
                  className="fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M7 10l5 5 5-5H7z"></path>
                </svg>
              </i>
            </div>
          </div>
        </div>

        
        <div className="grid md:grid-cols-2 gap-x-2 mt-5">
          <div className="mb-4">
            <label className="block mb-1"> Prix Produit </label>
            <input
              type="text"
              className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
              placeholder="Prix Produit"
              name="prix"
              value={product.prix}
              onChange={onChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1"> Stock </label>
            <div className="relative">
              <div className="col-span-2">
                <input
                  type="text"
                  className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                  placeholder="0"
                  name="qtestock"
                  value={product.qtestock}
                  onChange={onChange}
                  required
                />
              </div>
            </div>
          </div>

          

        </div>
        <button
          type="submit"
          className="my-2 px-4 py-2 text-center inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 w-full"
        >
          Update Product
        </button>
      </form>
    </section>
  )
}

export default UpdateProduct
