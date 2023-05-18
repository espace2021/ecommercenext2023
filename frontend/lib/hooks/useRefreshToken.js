"use client";

import axios from "lib/axios";
import { signIn, useSession } from "next-auth/react";

export const useRefreshToken = () => {
  const { data: session } = useSession();

  const refreshToken = async () => {
    const res = await axios
  .post('/users/refreshToken/', { refreshToken: session?.user.refreshToken });
    if (session) session.user.token = res.data.token;
    else signIn();
  };
  return refreshToken;
};