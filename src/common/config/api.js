import axios from "axios";

const COCTAILS_URL = "https://www.thecocktaildb.com/api/json/v1/1";

export const API = axios.create({
  baseURL: COCTAILS_URL
  // withCredentials: true,
  // headers: {
  //   'Content-Type': 'application/json',
  // },
});

export default API;
