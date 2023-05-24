"use client";
import axios from 'axios'
import { useState,useEffect } from "react";
import { signIn, useSession } from "next-auth/react";



const ListProtectedPage = () => {
  const { data: session } = useSession();
  const [products, setProducts] = useState();

  useEffect(() => {
    
    if (session?.error === "RefreshAccessTokenError") {
      signIn(); // Force sign in to hopefully resolve error
    }
  }, [session]);

  const fetchPost = async () => {
    const res= await fetch('http://localhost:3001/api/articles',
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${session?.user.token}`,
      },
    });
    const products = await res.json();
    setProducts(products);
  };
  return (
    <div>
   <div>   <button onClick={fetchPost}>Get User Products</button> </div>
      {products && JSON.stringify(products)}
    </div>
  );
};

export default ListProtectedPage;