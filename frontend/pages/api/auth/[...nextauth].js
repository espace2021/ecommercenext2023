import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

async function refreshAccessToken(token) {

  console.log("Obtain",token.refreshToken)
  try {
    const response =  await fetch('http://localhost:3001/api/users/refreshToken', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
  body: JSON.stringify({refreshToken:token.refreshToken})
  });
    

    const refreshedTokens = await response.json()

    if (!response.ok) {
      throw refreshedTokens
    }
    console.log("refreshedTokens.token",refreshedTokens.token)
    token.token = refreshedTokens.token;
    token.refreshToken = refreshedTokens.refreshToken
    token.expiresIn=refreshedTokens.expiresIn
    console.log("TOKEN",token)
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
  providers: [
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
     // console.log({ account });
   
     if (account && user) {
      return { ...token, ...user };
    }
  console.log("il reste",Date.now() - token.expiresIn)
    // Return previous token if the access token has not expired yet
    if (Date.now() < token.expiresIn) {
      return { ...token,  ...user };
    }

    // Access token has expired, try to update it
    return refreshAccessToken(token)

    },
    async session({ session, token, user }) {
      session.user = token ;
      session.error = token.error
      
console.log("SESSION",session)
      return session;
    },
  },
};
export default NextAuth(authOptions);

