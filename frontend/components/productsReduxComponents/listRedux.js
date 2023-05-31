"use client";

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {getArticles} from "@/slices/productSlice"
import AffGetProducts from "@/components/productsReduxComponents/affGetProducts";

export default function ListRedux() {

  const dispatch = useDispatch();
    
    useEffect(() => {
    
   dispatch(getArticles());
   
    },[dispatch]);

  return (
    <div>
     <AffGetProducts /> 
    </div>
  );
}
