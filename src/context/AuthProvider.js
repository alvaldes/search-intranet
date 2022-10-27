import { createContext, useState, useEffect } from "react";
import { Get_token } from "../api/api_ldap";
import { useCookies } from "react-cookie";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [cookies, setCookie] = useCookies("refreshToken");

  useEffect(() => {
    (async () => {
      const res = await Get_token();
      setCookie("refreshToken", res.refresh_token, {
        path: "/",
        httpOnly: true,
      });
      setAuth(res?.access_token);
    })();
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
