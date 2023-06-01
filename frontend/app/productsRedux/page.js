import React from "react";
import ListRedux from "@/components/productsReduxComponents/listRedux";
import { store } from "@/store/store";
import {getArticles} from "@/slices/productSlice"

export default async function GetProducts() {
  await store.dispatch(getArticles());
 return (
    <div>
     <ListRedux /> 
    </div>
  );
}
