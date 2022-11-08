import axios from "axios";

const api_user = process.env.REACT_APP_API_USER;
const api_pass = process.env.REACT_APP_API_PASS;

export async function Get_areas(callback) {
  await axios({
    method: "GET",
    url: `https://${process.env.REACT_APP_API_AUDIENCE}/areas`,
    auth: { username: api_user, password: api_pass },
    headers: {
      Accept: "*/*",
    },
  })
    .then((response) => callback(response.data))
    .catch((error) => {
      throw new Error(error);
    });
}

export function Get_all_users(searchCtx) {
  ExcSearch({ url: `/search-all` }, searchCtx);
}

export function Get_users_by_area({ area }, searchCtx) {
  const url = `/persons?area=OU=${area},DC=cujae,DC=edu,DC=cu`;
  return ExcSearch({ url }, searchCtx);
}

export function Get_user_by_ci({ query }, searchCtx) {
  ExcSearch({ url: `/search-all`, post: true, ci: query }, searchCtx);
}

export function Get_user_by_email({ query }, searchCtx) {
  ExcSearch({ url: `/search-all`, post: true, mail: query }, searchCtx);
}

export function Get_user_by_name({ query }, searchCtx) {
  ExcSearch({ url: `/search-all`, post: true, name: query }, searchCtx);
}

export function Get_user_by_area_ci({ query, area }) {
  const url = `/persons?area=OU=${area},DC=cujae,DC=edu,DC=cu?filters=cUJAEPersonDNI:${query}`;
  return ExcSearch(url);
}

export function Get_user_by_area_name({ query, area, access, refresh }) {
  const url = `/tree/OU=${area},DC=cujae,DC=edu,DC=cu?filters=displayName:${query}`;
  return ExcSearch(url, access, refresh);
}

export function Get_user_by_area_email({ query, area, access, refresh }) {
  const url = `/tree/OU=${area},DC=cujae,DC=edu,DC=cu?filters=sAMAccountName:${query}`;
  return ExcSearch(url, access, refresh);
}

const ExcSearch = async ({ url, post, ci, name, mail }, searchCtx) => {
  await axios({
    method: post ? "POST" : "GET",
    url: `https://${process.env.REACT_APP_API_AUDIENCE}${url}`,
    auth: { username: api_user, password: api_pass },
    headers: {
      Accept: "*/*",
    },
    data: {
      identification: ci || "",
      name: name || "",
      lastname: "",
      surname: "",
      email: mail || "",
    },
  })
    .then((response) => searchCtx.saveData(response.data))
    .catch((error) => {
      throw new Error(error);
    });
};
