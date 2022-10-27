import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { Get_token } from "./api/api_ldap";

function App() {
  const [cookie, setCookie] = useCookies(["accessToken", "refreshToken"]);
  useEffect(() => {
    (async () => {
      const result = await Get_token();
      setCookie("accessToken", result?.access_token, {
        path: "/",
        // httpOnly: true,
      });
      setCookie("refreshToken", result?.refresh_token, {
        path: "/",
        // httpOnly: true,
      });
    })();
  }, []);

  return (
    <Routes>
      {/* public routes */}
      <Route path="/" element={<Home />} />
      {/* catch all */}
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default App;
