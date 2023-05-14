
import { getServerSession  } from 'next-auth/next'

import axios from "axios";

const ApiClient = () => {
const instance = axios.create({baseURL :'http://localhost:3001/api/'})
instance.interceptors.request.use(async (request) => {
    const session = await getServerSession()
 console.log("recupaxiosheader",session)
    if (session) {
        request.headers.common = {
            Authorization: `Bearer ${session?.user.token}`
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