"use client"
import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CardWithImage from "./card-with-image";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const CarouselCards = ({ cat}) => { 

  return (
<>
{cat &&  <Carousel
      autoPlay
      autoPlaySpeed={1}
      infinite={true}
      customTransition="all 1s linear"
      transitionDuration={7000}
      containerClass="container-with-dots"
      slidesToSlide={2}
      responsive={responsive}
    >
 
      {
      cat.map((card,index) => {
        return <CardWithImage {...card} key={index} />;
      })
      }
   

  </Carousel> }
</>
   
   
      
  );
};

export default CarouselCards;
