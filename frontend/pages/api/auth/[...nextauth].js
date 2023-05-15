import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

export default NextAuth({
    session: {
        strategy :'jwt'
    },
    providers: [
        CredentialsProvider({
            async authorize(credentials,req,res){
                      
                const {email, password} = credentials;
               // console.log(email, password)
             
                const response = await axios.post('http://127.0.0.1:3001/api/users/login',{
                  email, 
                  password
                    })
                
                  if(response){  
              
                 const user = {
                        "email": response.data.user.email,
                        "name": response.data.user.firstname+ " "+response.data.user.lastname,
                        "password":password
                     };
                   
                    return user
                    }
                    else {
                        console.log("ERROR ");
                        return null;
                    }

                    
                }

                
            })
        
    ],
    callbacks: {
        jwt: async ({ token, user }) => {
            console.log("user ",user)
        if (user) {
           
            const email = user.email;
                const password = user.password
        
            const updatedUser =  await axios.post('http://127.0.0.1:3001/api/users/login',{
                email, 
                password
                  })
            token.user = updatedUser.data;
               }

          return Promise.resolve(token);
        },
        session: async ({ session, token }) => {
          session.user = token.user;
          console.log("Session ",session)
        // delete password from session
        delete session?.user?.password;
          return Promise.resolve(session);
        },
      },
    pages : {
        signIn: '/login'
    },
    secret : process.env.NEXTAUTH_SECRET
   
});



