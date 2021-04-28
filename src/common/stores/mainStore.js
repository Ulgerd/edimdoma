import { observable, action, computed, toJS } from "mobx";

import API from "../config/api";

const FETCH_ACTUAL_NEWS_URL = "/posts/actual";

class MainStore {
  // constructor() {
  //   const singleton = InjectSinglePost.getInstance();
  //   singleton.setPost();
  // }
  //
  // @observable news = [];
  //
  // @action
  // fetchNews = async () => {
  //   const res = await api.get(FETCH_ACTUAL_NEWS_URL);
  //   const { data } = res.data;
  //   const singleton = InjectSinglePost.getInstance();
  //   const resultData = await singleton.getPost(data, 5);
  //   this.setNews(resultData);
  // };
  //
  // @action
  // setNews = news => {
  //   this.news = news;
  // };
  //
  // @computed get newsList() {
  //   return toJS(this.news);
  // }
}

export default new MainStore();

// class Timer {
//     start = Date.now()
//     current = Date.now()
//
//     get elapsedTime() {
//         return this.current - this.start + "milliseconds"
//     }
//
//     tick() {
//         this.current = Date.now()
//     }
// }
// decorate(Timer, {
//     start: observable,
//     current: observable,
//     elapsedTime: computed,
//     tick: action
// })
