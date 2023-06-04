import {configureStore} from '@reduxjs/toolkit';
import productReducer from '../slices/productSlice';
import scategorieReducer from '../slices/scategorieSlice';
import { categorieApi } from "@/servicesRTK/CategorieApi";
import { createWrapper } from "next-redux-wrapper";
export function makestore(){
    return configureStore({
        reducer: {
            storearticles: productReducer,
            storescategories: scategorieReducer,
            [categorieApi.reducerPath]: categorieApi.reducer
        },
        middleware: (getDefaultMiddleware) =>
          getDefaultMiddleware().concat(categorieApi.middleware)
    })
}

export const store = makestore();
export const wrapper = createWrapper(makestore, { debug: true });