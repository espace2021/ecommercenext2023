import {
    createApi,
    fetchBaseQuery
  } from "@reduxjs/toolkit/query/react";
  export const categorieApi = createApi({
    reducerPath: "categoriesApi",
    tagTypes: 'categories',
    baseQuery: fetchBaseQuery({
      baseUrl: "http://localhost:3001/api"
    }),
   
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
    useDeleteCategorieMutation
  } = categorieApi;