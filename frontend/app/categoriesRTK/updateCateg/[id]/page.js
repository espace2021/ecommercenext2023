'use client'
import React from 'react'
import CategoriesRTKupdateComponent from '@/components/rtkComponents/CategoriesRTKupdateComponent'
import { useCategorieQuery } from "@/servicesRTK/CategorieApi";

function getCategorieDetails(id){
    try {
     
        const { data} = useCategorieQuery(id);
       
        return data;
    }
    catch (error) {
        console.log(error);
    }
}

const UpdateCategRTKpage =  ({params}) => {    

const categorie= getCategorieDetails(params.id)

  return (
    <div>
      <CategoriesRTKupdateComponent categorie={categorie} />
    </div>
  )
}

export default UpdateCategRTKpage
