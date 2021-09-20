import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../components/Layout/Layout";
import LoadMore from "../components/Load-More/LoadMore";
import NewsItem from "../components/News-Item/News-Items";
import { fetchNews } from "../redux/actions/newsActions";

const ShowsPage = () => {
  const newsData = useSelector((state) => state.news.newsData);
  const dispatch = useDispatch();
  const [startIndex, setStartIndex] = useState(0);
  const [lastIndex, setLastIndex] = useState(5);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log(startIndex);
    console.log(lastIndex);
    dispatch(fetchNews("showstories", setLoading, startIndex, lastIndex));
  }, [dispatch, lastIndex, startIndex]);

  const loadMore = (e) => {
    setStartIndex((prevIndex) => (prevIndex = lastIndex + 1));
    setLastIndex((lastIndex) => lastIndex + 5);
  };

  console.log(newsData);
  return (
    <Layout>
      {newsData.length > 0 ? (
        newsData.map((news, index) => (
          <NewsItem key={index} news={news} id={index + 1} />
        ))
      ) : (
        <span>Loading...</span>
      )}
      {newsData.length > 0 && (
        <LoadMore loadMore={loadMore} loading={loading} />
      )}
    </Layout>
  );
};

export default ShowsPage;
