"use client"

import React,{useState} from "react";
import Liscategories from "../../../app/categories/cards/page"

const SectionFirstLook = ({
  descriptionPrimary,

}) => {
 
  const [isShown, setIsShown] = useState(false);

  const handleClick = () => { 
    setIsShown(current => !current);
  
  };

  return (
     <section>
  
        <div className="description-primary">
            <h1>{descriptionPrimary}</h1>
        </div>
    <div className="description-secondary">     
    <div> {!isShown ? "Découvrir" : null }     </div>  
     <div  onClick={()=>handleClick()} >
     
       <img
        
         src="https://i.ibb.co/kgSTKJn/arrow-down.png"
         style={{
           transform: isShown ? `rotate(180deg)` : `rotate(0deg)`,
           transitionDuration: `150ms`
            }}
       />
      
     </div>
     </div>
    
     {isShown ? <div style={{marginTop:"200px",backgroundColor:"white"}}>
     <Liscategories /> 
     </div>
     :null}
    
    </section> 

  );
};

export default SectionFirstLook;
