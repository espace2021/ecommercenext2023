import {
    createApi,
    fetchBaseQuery
  } from "@reduxjs/toolkit/query/react";

  import { HYDRATE } from 'next-redux-wrapper'

  export const categorieApi = createApi({
    reducerPath: "categoriesApi",
    tagTypes: 'categories',
    baseQuery: fetchBaseQuery({
      baseUrl: "http://localhost:3001/api"
    }),
    extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath]
    }
  },
  endpoints: (builder) => ({
    categories: builder.query({
      query: () => "/categories",
       providesTags: ["categories"]
    }),
    categorie: builder.query({ 
        query: (id) => `/categories/${id}`,
        providesTags: ["categories"]
      }),
    addCategorie: builder.mutation({
      query: (categorie) => ({
        url: "/categories",
        method: "POST",
        body: categorie
      }),
      invalidatesTags: ['categories']
    }),
    updateCategorie: builder.mutation({ 
        query: (categorie) => ({ 
            url: `/categories/${categorie._id}`,
            method: "PUT",
            body: categorie
          }
          
          ),
      invalidatesTags: ['categories']
    }),
    deleteCategorie: builder.mutation({
      query: (id) => ({
        url: `/categories/${id}`,
        method: "DELETE"
      }),
      invalidatesTags: ['categories']
    })
  })
});
export const {
    useCategoriesQuery,
    useCategorieQuery,
    useAddCategorieMutation,
    useUpdateCategorieMutation,
    useDeleteCategorieMutation,
    util: { getRunningQueriesThunk },
  } = categorieApi;

// export endpoints for use in SSR
export const { categories,categorie,addCategorie,updateCategorie,deleteCategorie} = categorieApi.endpoints;