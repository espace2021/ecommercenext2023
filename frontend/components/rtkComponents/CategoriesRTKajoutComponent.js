'use client'
import React, { useState} from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';

import { useAddCategorieMutation } from "@/servicesRTK/CategorieApi";

import { useRouter } from 'next/navigation';


const CategoriesRTKajoutComponent = () => {

  const router = useRouter();
  const [nomcategorie, setNomcategorie] = useState("");
  const [imagecategorie, setImagecategorie] = useState("");
 
   
   const [addedCateg, result]  =  useAddCategorieMutation()
  
    const handleSubmit = async(e) => {
      e.preventDefault();
      const cat={
      nomcategorie: nomcategorie,
      imagecategorie: imagecategorie,
        }

      await addedCateg(cat);
      router.push("/categoriesRTK")
     };

      return (
       
      <div className="container">

     

         <form >
        <div style={{'position':'fixed', 'top':'115px'}}>
        <div>
         ADD Category
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
          <Button variant="contained"  onClick={(event)=>handleSubmit(event)}>ADD</Button>
          </div>
        
        </form>
         </div> 
  )
}

export default CategoriesRTKajoutComponent
