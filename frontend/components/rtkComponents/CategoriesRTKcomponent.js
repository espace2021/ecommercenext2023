'use client'
import React from 'react'
import { useDeleteCategorieMutation,useCategoriesQuery } from "@/servicesRTK/CategorieApi";

import Button from '@mui/material/Button';

import { useRouter } from 'next/navigation';

import Link from "next/link";

const CategoriesRTKcomponent = () => {

  const router = useRouter();

    const [deletedCateg, result]  =  useDeleteCategorieMutation()

    const { data, error, isLoading, isSuccess } = useCategoriesQuery();

    const deletecateg=(id)=>{
        deletedCateg(id)
     }

  return (
    <>
    <div>
     {error && <p>An error occured</p>}
     {isLoading && <p>Loading...</p>}
   </div>
       {isSuccess && (
       <>
       <h3>Category List</h3>
     
       <Button variant="contained"  color="secondary"
       onClick={() => { router.push("/categoriesRTK/addCateg") }}> 
       ADD  
       </Button> 
                            
           {data.map((categorie) => (
              <div key={categorie._id}> 
                      
                       <img
                           style={{ height: 50, width : 50, borderRadius: '5%' }}
                           src= {`${categorie.imagecategorie}`}
                           
                           alt=""
               />
   
               {categorie.nomcategorie} 
   
      <Button  color="primary">
      <Link
                    href={`/categoriesRTK/updateCateg/${categorie._id}`}
      > 
       edit 
      </Link> 
       </Button>       
     
         <Button
           color="error"
           onClick={() => { deletecateg(categorie._id)
             
           }}
         >
          delete
         </Button>
           </div> 
            ))}
         </>
      )}  
    </> 
  )
}

export default CategoriesRTKcomponent

