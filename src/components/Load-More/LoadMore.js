import React from "react";
import Loader from "../LoaderIcon/LoaderIcon";
import "./LoadMore-styles.css";

const LoadMore = ({ loadMore, loading }) => {
  return (
    <div className="loadMoreBtn">
      <button onClick={loadMore}>
        {loading ? (
          <Loader style={{ borderTop: "3px solid #5DB18C" }} />
        ) : (
          "Load More"
        )}
      </button>
    </div>
  );
};

export default LoadMore;
