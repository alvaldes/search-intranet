import axios from "../api/axios";
import useAuth from "./useAuth";
import { useCookies } from "react-cookie";

const useRefreshToken = () => {
  const { setAuth } = useAuth();
  const [cookies, setCookie] = useCookies(["refreshToken"]);

  const refresh = async (access_token) => {
    const response = await axios.post(
      "/user/refresh-token",
      { refresh_token: cookies.refreshToken },
      {
        headers: {
          Authorization: `Bearer ${access_token}}`,
        },
      }
    );
    setAuth((prev) => {
      console.log(JSON.stringify(prev));
      console.log(response.data.access_token);
      setCookie("refreshToken", response.data.refresh_token, {
        path: "/",
        httpOnly: true,
      });
      return { ...prev, accessToken: response.data.access_token };
    });
    return response.data.access_token;
  };
  return refresh;
};

export default useRefreshToken;
