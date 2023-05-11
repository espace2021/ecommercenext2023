"use client"

import React from "react";


const SectionFirstLook = ({
  descriptionPrimary,
 
  linkButton,
  withArrowJump,
}) => {
  
  return (
    <section className="first-look">
      <div className="first-look-container">
        
       <div className="title-descrptions-container">
          <div className="description-primary">
            <h1>{descriptionPrimary}</h1>
          </div>
          

          {linkButton ? (
            <div className="btn-espa" href="#services">
              <a href="#services">
                <button className="transparent hover-bg uppercase">
                  réserver
                </button>
              </a>
            </div>
          ) : null}
        </div>
        {withArrowJump ? (
          <div className="arrow-jump">
            <a href={`#${withArrowJump}`}>
              <img src="https://i.ibb.co/kgSTKJn/arrow-down.png" />
            </a>
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default SectionFirstLook;
