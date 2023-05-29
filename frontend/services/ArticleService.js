import Axios from "axios";
const ARTICLE_API=process.env.API_URL+"/api/articles"
   
    export const fetchArticles=async()=> {
        return await Axios.get(ARTICLE_API)
         
        }
       
     export const fetchArticleById=async(articleId)=> {
        return await Axios.get(ARTICLE_API + '/' + articleId);
        }
    export const delArticle=async(articleId) =>{
        return await Axios.delete(ARTICLE_API + '/' + articleId);
        }
     export const addArticle=async(article)=> { 
        return await Axios.post(ARTICLE_API, article);
    
        }    
     export const editArticle=(article) =>{ 
        return Axios.put(ARTICLE_API + '/' + article._id, article);
    
        }
        
    

