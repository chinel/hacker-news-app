import * as NewsTypes from "../actionTypes/news.types";
const INITIAL_STATE = {
  newsData: [],
};

const newsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NewsTypes.FETCH_NEWS:
      console.log(action.payload.newsData);
      return {
        ...state,
        newsData: [...state.newsData, ...action.payload.newsData],
      };
    case NewsTypes.RESET_NEWS_DATA:
      return {
        ...state,
        newsData: [],
      };
    default:
      return state;
  }
};

export default newsReducer;
