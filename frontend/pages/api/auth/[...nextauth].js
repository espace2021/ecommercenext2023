import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

async function refreshTokenRequest(token) {

  try {
    const response =  await fetch('http://localhost:3001/api/users/refreshToken', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
  body: JSON.stringify({refreshToken:token.refreshToken})
  });
    
   const data = await response.json()

    if (!response.ok) {
      throw data
    }
    
    token.token = data.token;
    token.refreshToken = data.refreshToken
    token.expiresIn=data.expiresIn
   
    return {
      ...token
         }
  } catch (error) {
    console.log(error)

    return {
      ...token,
      error: "RefreshAccessTokenError",
    }
  }
}


export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: "416025593522-i6t77npigt6mvm1hpeovpge7knfm0q94.apps.googleusercontent.com",
      clientSecret: "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"
  }),
    CredentialsProvider({
       name: "Credentials",
       credentials: {
        email: { label: "email", type: "text"},
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const res = await fetch("http://localhost:3001/api/users/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          }),
        });
        const user = await res.json();

        if (user) {
           return user;
           
        } else {
           return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
   
    if (account && user) {
      return { ...token, ...user };
    }
 
    if (Date.now() < token.expiresIn) {
      return { ...token,  ...user };
    }

    return refreshTokenRequest(token)

    },
    async session({ session, token, user }) {
      session.user = token ;
      session.error = token.error

      return session;
    },
  },
 /* pages : {
    signIn: '/login'
},*/

};
export default NextAuth(authOptions);