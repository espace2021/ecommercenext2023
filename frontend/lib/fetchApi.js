import { getServerSession } from "next-auth";
import { authOptions } from "pages/api/auth/[...nextauth]";
import axios from 'axios'

const BASE_URL = "http://localhost:3001/api";

async function refreshToken(refreshToken) {
  const res = await axios

  .post('http://localhost:3001/api/users/refreshToken/', { refreshToken: refreshToken });

  const data = await res.data;
  console.log({ data });

  return data.token;
}

export async function AuthGetApi(url) {
  const session = await getServerSession(authOptions);
  console.log("before: ", session?.user.token);

  let res = await fetch(BASE_URL + url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${session?.user.token}`,
    },
  });

  if (res.status == 403) {
    if (session) session.user.token = await refreshToken(session?.user.refreshToken ?? "");
    console.log("after: ", session?.user.token);

    res = await fetch(BASE_URL + url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${session?.user.token}`,
      },
    });
    return await res.json();
    
  }

  return await res.json();
}