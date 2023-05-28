import {configureStore} from '@reduxjs/toolkit';
import productReducer from '../slices/productSlice';
import scategorieReducer from '../slices/scategorieSlice';

export function makestore(){
    return configureStore({
        reducer: {
            storearticles: productReducer,
            storescategories: scategorieReducer,
        }
    })
}

export const store = makestore();
