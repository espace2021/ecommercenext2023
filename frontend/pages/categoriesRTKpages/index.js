import { categories } from "@/servicesRTK/CategorieApi";
import { wrapper } from "@/store/store";

function Page ({repo}) {

    return  (
         <>
          {repo.data.map((categorie) => (
              <div key={categorie._id}> 
                      
                       <img
                           style={{ height: 50, width : 50, borderRadius: '5%' }}
                           src= {`${categorie.imagecategorie}`}
                           
                           alt=""
               />
   
               {categorie.nomcategorie} 
              </div>
            ))
            }
         </>
          ) 
}

export default Page;

  
  export const getServerSideProps = wrapper.getServerSideProps(
    (store) => async () => { 
        const repo = await store.dispatch(categories.initiate());
     // await Promise.all(store.dispatch(getRunningQueriesThunk()));
       return { props: { repo } };
         }
  );
