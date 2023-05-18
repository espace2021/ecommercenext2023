import { useSession } from "next-auth/react";

export   const useAxiosAuth = () => {

const  updateSession =async (token,refreshToken)=> {
 const { data: session, update } = useSession()
     
 /*          const updatedSession = {
        ...session,
        token: token,
        refreshToken: refreshToken,
    };

    await update(updatedSession);
    */
  session.user.token=token 
  session.user.token=refreshToken   
    }
    return updateSession;
  }
