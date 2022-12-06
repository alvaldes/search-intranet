import axios from 'axios';

const api_base = process.env.REACT_APP_API_AUDIENCE;
const api_user = process.env.REACT_APP_API_USER;
const api_pass = process.env.REACT_APP_API_PASS;

export async function Get_areas(callback) {
  await axios({
    method: 'GET',
    url: `${api_base}/areas`,
    auth: { username: api_user, password: api_pass },
    headers: {
      Accept: '*/*',
    },
  })
    .then((response) => callback(response.data))
    .catch((error) => {
      throw new Error(error);
    });
}

export function Get_all_users(searchCtx) {
  ExcSearch({}, searchCtx);
}

export const ExcSearch = async (param, searchCtx) => {
  await axios({
    method: 'POST',
    url: `${api_base}/search-all`,
    auth: { username: api_user, password: api_pass },
    headers: {
      Accept: '*/*',
    },
    data: param,
  })
    .then((response) => searchCtx.saveData(response.data))
    .catch((error) => {
      searchCtx.saveData([]);
      throw new Error(error);
    });
};
