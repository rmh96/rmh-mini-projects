import React, { useCallback, useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";

const InfiniteScroll = (props) => {
  const { renderListItem, getData, query, listData } = props;
  const [loading, setLoading] = useState(false);
  const skipNumber = useRef(0);

  const observer = useRef(null);
  const lastEleObserver = useCallback((node) => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        skipNumber.current += 10;
        fetchData();
      }
    });
    if (node) observer.current.observe(node);
  });

  const renderList = useCallback(() => {
    return listData.map((item, index) => {
      console.debug(index, listData.length - 1);
      if (index === listData.length - 1)
        return renderListItem(item, item.id, lastEleObserver);
      return renderListItem(item, item.id, null);
    });
  });

  const fetchData = useCallback(() => {
    console.debug("Loading new data", query, skipNumber);
    setLoading(true);
    getData(query, skipNumber.current).finally(() => {
      setLoading(false);
    });
  }, [query]);

  useEffect(() => {
    fetchData();
  }, [query]);
  return (
    <div>
      {loading || query === "" ? "Loading Data / No Data" : null}
      {listData.length ? renderList() : null}
    </div>
  );
};

export default InfiniteScroll;
