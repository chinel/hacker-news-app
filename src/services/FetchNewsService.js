import axios from "axios";
import BottleNeck from "bottleneck";

const limiter = new BottleNeck({
  maxConcurrent: 1,
  minTime: 333,
});

export const Request = (searchType, setLoading, startIndex, lastIndex) => {
  const getData = () => {
    const options = searchType;
    const API_URL = `https://hacker-news.firebaseio.com/v0/${options}.json?print=pretty`;

    return new Promise((resolve, reject) => {
      return resolve(axios.get(API_URL));
    });
  };

  const getIdFromData = (dataId) => {
    const API_URL = `https://hacker-news.firebaseio.com/v0/item/${dataId}.json?print=pretty`;
    return new Promise((resolve, reject) => {
      return resolve(axios.get(API_URL));
    });
  };

  const runAsyncFunctions = async () => {
    setLoading(true);
    const { data } = await getData();
    let ids = data.slice(startIndex, lastIndex + 1); // we select our ids by index
    return Promise.all(
      ids.map(async (d) => {
        const { data } = await limiter.schedule(() => getIdFromData(d));
        setTimeout(() => {
          setLoading(false);
        }, 3000);
        return data;
      })
    );
  };

  return runAsyncFunctions();
};
