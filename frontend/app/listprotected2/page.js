"use client";

import useAxiosAuth from "lib/hooks/useAxiosAuth";

import { useState } from "react";

const ListProtectedPage = () => {
 
  const [products, setProducts] = useState();
  const axiosAuth = useAxiosAuth();
  const fetchPost = async () => {
    const res = await axiosAuth.get("/articles");
    setProducts(res.data);
  };
  return (
    <div>
   <div>   <button onClick={fetchPost}>Get User Products</button> </div>
      {products && JSON.stringify(products)}
    </div>
  );
};

export default ListProtectedPage;