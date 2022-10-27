import axios from "axios";
const BASE_URL = `https://${process.env.REACT_APP_API_AUDIENCE}`;

export default axios.create({
  baseURL: BASE_URL,
});

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});
