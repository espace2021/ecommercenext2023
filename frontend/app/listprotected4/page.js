import { getServerSession } from "next-auth";
import { authOptions } from "pages/api/auth/[...nextauth]";

const fetchPost = async () => {

  const session = await getServerSession(authOptions);

  if (session?.error === "RefreshAccessTokenError") {
    signIn(); // Force sign in to hopefully resolve error
    return null;
  }
  else{
    const res= await fetch('http://localhost:3001/api/articles',
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${session?.user.token}`,
          },
        });
  const products = await res.json();
  console.log(products)
return products
}
};

const ListProtectedPage = async () => {

  const products=await fetchPost()


  return (
    <div>
  {products && JSON.stringify(products)}
    </div>
  );
};

export default ListProtectedPage;