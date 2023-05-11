"use client"

import React, { useState } from "react";
import Liscategories from '../../../app/categories/cards/page'

const SectionFirstLook = ({
  descriptionPrimary,
 
  linkButton,
  withArrowJump,
}) => {
  
const[aff,setAff]=useState(true)

  return (
<>
<div>
     <section className="first-look">
      <div className="first-look-container">
        
       <div className="title-descrptions-container">
          <div className="description-primary">
            <h1>{descriptionPrimary}</h1>
          </div>
          

          {linkButton ? (
            <div className="btn-espa" href="#services">
                         
                  Découvrir
              
              
         
            </div>
          ) : null}
        </div>
        {withArrowJump ? (
          <div className="arrow-jump" >
         
              <img src="https://i.ibb.co/kgSTKJn/arrow-down.png" onClick={()=>setAff(!aff)}/>
          
          </div>
        ) : null}
      
      </div>
      
    </section>
    </div>
<div>
{aff ? <Liscategories/> :null } 
</div>
    
</>
  );
};

export default SectionFirstLook;
