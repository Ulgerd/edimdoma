import { makeAutoObservable } from "mobx";

import API from "../config/api";

const FETCH_URL_BY_NAME = "/search.php?s=";
const FETCH_URL_BY_ID = "/lookup.php?i=";

class MainStore {
  constructor() {
    makeAutoObservable(this);
  }

  coctails = [];
  activeCoctail = {};

  fetchCoctails = async request => {
    const res = await API.get(`${FETCH_URL_BY_NAME}${request}`);
    const { data } = res;
    this.setCoctails(data.drinks);
  };

  fetchCoctailById = async drinkId => {
    const res = await API.get(`${FETCH_URL_BY_ID}${drinkId}`);
    const { data } = res;
    console.log(data.drinks);
    this.setActiveCoctail(data.drinks[0]);
  };

  setCoctails = coctails => {
    this.coctails = coctails;
  };

  setActiveCoctail = coctail => {
    this.activeCoctail = coctail;
  };
}

export default new MainStore();
