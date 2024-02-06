import { useSelector } from "react-redux";
import { AppRootStoreType } from "../store/store";
import { useEffect } from "react";
import { useRouter } from "next/router";

export const useAuth = () => {
  const router = useRouter();

  const isLogin = useSelector<AppRootStoreType, boolean>(
    (state) => state.auth.isLogin
  );

  useEffect(() => {
    if (!isLogin) {
      router.push("/");
    }
  }, [isLogin]);
};
