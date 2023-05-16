'use client'
import axios from "axios";
import { getServerSession} from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { useSession } from "next-auth/react";

axios.defaults.baseURL = 'http://localhost:3001/api';


axios.interceptors.request.use(

   async(config) => {
    const user = await getServerSession(authOptions);

    console.log("recupaxiosheader *** 3 ",user)
    const token=user.user.token
      
        if (token) {
  
            config.headers['Authorization'] = 'Bearer ' + token;
  
        }
  
        return config;
  
    },
  
    error => {
  
        Promise.reject(error)
  
    });
  
   
    //Response interceptor
  
  axios.interceptors.response.use(async (response) => {

    return response
  
  },
  
  async function (error) {
  
    const user = await getServerSession(authOptions);

    console.log("recupaxiosheader *** 4 ",user.user.refreshToken)
    const refreshToken=user.user.refreshToken

    const originalRequest = error.config;
  
    if (error.response.status === 403 && !originalRequest._retry) {
  
   
        originalRequest._retry = true;
  
        
        if(refreshToken && refreshToken !== ""){
  
           const res = await axios

                .post('http://localhost:3001/api/users/refreshToken/', { refreshToken: refreshToken });
            if (res.status === 200) {

                // 1) put tokens 
               // localStorage.setItem('CC_Token', res.data.token);

               // localStorage.setItem('refresh_token', res.data.refreshToken);
               //updateSession(res.data.token,res.data.refreshToken)
               const { data: session, update } = useSession();
               await update({
                 ...session,
                 user: {
                   ...session?.user,
                   token: res.data.token,
                   refreshToken: res.data.refreshToken,
                 },
               });
                // 2) Change Authorization header
               // axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('CC_Token');


                // 3) return originalRequest object with Axios.
                return axios(originalRequest);

            }
  
          }      
  
    }
  
  }
  
  );
  
  export default axios;
/*
  async function updateSession  (token,refreshToken) {
        const { data: session, update } = useSession();
        await update({
          ...session,
          user: {
            ...session?.user,
            token: token,
            refreshToken: refreshToken,
          },
        });
      }
 */