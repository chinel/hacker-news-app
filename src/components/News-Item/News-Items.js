import React from "react";
import formatDistance from "date-fns/formatDistance";
import "./News-item-styles.css";
import fromUnixTime from "date-fns/fromUnixTime";
const NewsItem = ({ news, id }) => {
  const formatDate = (timeStamp) => {
    return formatDistance(
      new Date(fromUnixTime(timeStamp)),
      new Date(Date.now()),
      {
        addSuffix: true,
      }
    );
  };
  return (
    <div className="newsList">
      <div className="newsList__numbering">
        <span>{id}.</span>
      </div>
      <div className="newsList__content">
        <a href={news.url}>{news.title}</a>
        <p>
          {news.score} points by {news.by} - {formatDate(news.time)}
        </p>
      </div>
    </div>
  );
};

export default NewsItem;
