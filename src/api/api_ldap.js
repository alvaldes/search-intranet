import { Areas } from "../data/static";
// import useAxiosPrivate from "../hooks/useAxiosPrivate";
import axios from "../api/axios";

const api_user = process.env.REACT_APP_API_USER;
const api_pass = process.env.REACT_APP_API_PASS;

export function Get_token() {
  // const [setCookie] = useCookies("refreshToken");
  const url = "/user/login";
  let result = axios
    .get(url, {
      auth: {
        username: api_user,
        password: api_pass,
      },
    })
    .then((response) => {
      console.log(response.data.data);
      return response.data.data;
    })
    .catch((err) => console.log(err));
  return result;
}

// export async function Refresh_token(url, access, refresh) {
//   const [cookies, setCookie] = useCookies(["access_token", "refresh_token"]);
//   const refresh_url = api_audience + "/user/refresh-token";
//   const result = await axios
//     .post(
//       refresh_url,
//       { refresh_token: refresh },
//       {
//         headers: {
//           Authorization: `Bearer ${access}`,
//         },
//       }
//     )
//     .then((response) => {
//       if (!response.error) {
//         setCookie("access_token", response.data.access_token, {
//           path: "/",
//           // httpOnly: true,
//         });
//         setCookie("refresh_token", response.data.refresh_token, {
//           path: "/",
//           // httpOnly: true,
//         });
//         ExcSearch(url, response.data.access_token, response.data.refresh_token);
//       }
//     })
//     .catch((error) => console.log(error));
//   console.log(result);
//   return result;
// }

export function Get_user_by_area_ci({ query, area, access, refresh }) {
  const url = `/tree/OU=${area},DC=cujae,DC=edu,DC=cu?filters=cUJAEPersonDNI:${query}`;
  return ExcSearch(url, access, refresh);
}

export function Get_user_by_area_name({ query, area, access, refresh }) {
  const url = `/tree/OU=${area},DC=cujae,DC=edu,DC=cu?filters=displayName:${query}`;
  return ExcSearch(url, access, refresh);
}

export function Get_user_by_area_username({ query, area, access, refresh }) {
  const url = `/tree/OU=${area},DC=cujae,DC=edu,DC=cu?filters=sAMAccountName:${query}`;
  return ExcSearch(url, access, refresh);
}

export function Get_user_by_area(area, access, refresh) {
  const url = `/tree/OU=${area}`;
  return ExcSearch(url, access, refresh);
}

export function Get_all_users(access, refresh) {
  let result = { data: [] };
  Areas.map(async (element) => {
    if (element.value !== "") {
      const url = `/tree/OU=${element.value}`;
      const res = await ExcSearch(url, access, refresh);
      res.error ? console.log(res.error) : (result.data = [...res.data]);
    }
  });
  return result;
}

export function Get_tree(access, refresh) {
  const url = `/tree/`;
  return ExcSearch(url, access, refresh);
}

const ExcSearch = async (url, access, refresh) => {
  // const axiosPrivate = useAxiosPrivate();
  return await axios
    .get(url, { headers: { Authorization: "Bearer " + access } })
    .then((response) => response.data)
    .catch((error) => console.error(error.response.data.error));
};
