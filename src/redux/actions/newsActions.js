import { Request } from "../../services/FetchNewsService";
import { FETCH_NEWS, RESET_NEWS_DATA } from "../actionTypes/news.types";

export const fetchNews = (type, setLoading, start, last) => {
  return (dispatch) => {
    if (start === 0) {
      dispatch(resetNewsData());

      Request(type, setLoading, start, last);
      Request(type, setLoading, start, last).then((response) => {
        dispatch({
          type: FETCH_NEWS,
          payload: {
            newsData: response,
          },
        });
      });
    } else {
      Request(type, setLoading, start, last);
      Request(type, setLoading, start, last).then((response) => {
        dispatch({
          type: FETCH_NEWS,
          payload: {
            newsData: response,
          },
        });
      });
    }
  };
};

export const resetNewsData = () => ({
  type: RESET_NEWS_DATA,
});
