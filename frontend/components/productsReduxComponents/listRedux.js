/*"use client";

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
*/

import { store } from "@/store/store";

import AffGetProducts from "@/components/productsReduxComponents/affGetProducts";

export default async function ListRedux() {

  console.log(store.getState().storearticles.articles)
  return (
    <div>
      <AffGetProducts getState={store.getState()} />
    </div>
  );
}
