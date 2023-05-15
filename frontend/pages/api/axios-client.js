import axios from "axios";
import { getServerSession } from "next-auth/react";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

const ApiClient = () => {

const instance = axios.create({baseURL :'http://localhost:3001/api/'})

instance.interceptors.request.use(async (request) => {

const user = await getServerSession(authOptions);

 console.log("recupaxiosheader *** 3 ",user)
    if (user) {
        request.headers.common = {
            Authorization: `Bearer ${user.token}`
        }
    }
     return request
})


instance.interceptors.response.use(
(response) => { 
    return response
},
(error) => {
   // console.log(`Error ----- `, error)
}
)

return instance
}
export default ApiClient();