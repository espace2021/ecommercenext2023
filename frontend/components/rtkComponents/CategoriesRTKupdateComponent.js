'use client'
import React, { useState,useEffect} from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';

import { useUpdateCategorieMutation } from "@/servicesRTK/CategorieApi";

import { useRouter } from 'next/navigation';


const CategoriesRTKupdateComponent = ({categorie}) => {
  

  const router = useRouter();
  const [nomcategorie, setNomcategorie] = useState("");
  const [imagecategorie, setImagecategorie] = useState("");
 
  useEffect(() => {
    if(categorie ) { 
        setNomcategorie(categorie.nomcategorie) ; 
        setImagecategorie(categorie.imagecategorie)}
  
}, [categorie ])

const [updatedCateg]  =  useUpdateCategorieMutation()

const handleSubmit=async(e)=>{
  e.preventDefault();
 
    const cat  = {
        _id:categorie._id,
        nomcategorie: nomcategorie,
        imagecategorie: imagecategorie,
       
          }; 

          await updatedCateg(cat); 
          router.push("/categoriesRTK")
} 
  
  
      return (
       
      <div className="container">

     

         <form >
        <div style={{'position':'fixed', 'top':'115px'}}>
        <div>
         Update Category
       </div>
         <div className="mb-3">           
           <FormControl > 
            <TextField
                          variant="outlined"
                          label="Category Name"
                          value={nomcategorie}
                          onChange={e => setNomcategorie(e.target.value)}
                          required />
             </FormControl>           
           </div>  
          
            
           <FormControl > 
            <TextField
                          variant="outlined"
                          label="Category Image"
                          value={imagecategorie}
                          onChange={e => setImagecategorie(e.target.value)}
                          required />
             </FormControl>           
      
        </div>  
          <div>
          <Button variant="contained"  onClick={(event)=>handleSubmit(event)}>Update</Button>
          </div>
        
        </form>
         </div> 
  )
}

export default CategoriesRTKupdateComponent
