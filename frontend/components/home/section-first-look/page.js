"use client"

import React from "react";

const SectionFirstLook = ({
  descriptionPrimary,
  linkButton,
  setMultiSelectExpanded,
  multiSelectExpanded
}) => {
  
 

  return (

     <section className="first-look">
      <div className="first-look-container">
        
       <div className="title-descrptions-container">
          <div className="description-primary">
            <h1>{descriptionPrimary}</h1>
          </div>
           {linkButton ? (
            <div className="btn-espa" onClick={() => setMultiSelectExpanded(!multiSelectExpanded)}>
                         
                  Découvrir
          
         
            </div>
          ) : null}
        </div>
        
      <div 
        
        onClick={() => setMultiSelectExpanded(!multiSelectExpanded)}
       
      >
       
        <img
         
          src="https://i.ibb.co/kgSTKJn/arrow-down.png"
          style={{
            transform: multiSelectExpanded ? `rotate(180deg)` : `rotate(0deg)`,
            transitionDuration: `150ms`,
          }}
        />
      </div>

      </div>
      
    </section>

  );
};

export default SectionFirstLook;
