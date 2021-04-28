import { makeAutoObservable } from "mobx";

import API from "../config/api";

const QUERY_URL = "/search.php?s=";

class MainStore {
  constructor() {
    makeAutoObservable(this);
  }

  coctails = [];

  fetchCoctails = async request => {
    const res = await API.get(`${QUERY_URL}${request}`);
    const { data } = res;
    this.setCoctails(data.drinks);
  };
  //
  // @action
  setCoctails = coctails => {
    this.coctails = coctails;
  };
  //
  // @computed get newsList() {
  //   return toJS(this.news);
  // }
}

export default new MainStore();
