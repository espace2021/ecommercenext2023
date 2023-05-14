import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import axios from "axios";

export default NextAuth({
    session: {
        strategy :'jwt'
    },
    providers: [
        CredentialsProvider({
            async authorize(credentials,req){
                      
                const {email, password} = credentials;
                console.log(email, password)
             
                const res = await axios.post('http://127.0.0.1:3001/api/users/login',{
                  email, 
                  password
                    })
             
                  if(res){  
                 /* const user = {
                        "email": res.data.user.email,
                        "name": res.data.user.firstname+ " "+res.data.user.lastname,
                        "accessToken": res.data.token,
                        "refreshToken": res.data.refreshToken
                     };*/
                    

                    return res.data
                    }
                    else {
                        console.log("ERROR ");
                        return null;
                    }

                    
                }

                
            })
        
    ],
    pages : {
        signIn: '/login'
    },
    secret : process.env.NEXTAUTH_SECRET,
    jwt: async ({ token, user }) => {
        if (user) {
           
            token.accessToken = user.data.token;
       
            token.refreshToken = user.data.refreshToken;
        }

       console.log(token)
        return Promise.resolve(token);
    }, 
    session: async ({ session, token }) => {
    
        session.accessToken = token.accessToken;
        session.refreshToken=  token.refreshToken;
      
        return Promise.resolve(session);
    },
});





