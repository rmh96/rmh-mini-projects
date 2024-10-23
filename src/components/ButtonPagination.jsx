import React, { useEffect, useState } from "react";
import BackToHome from "./BackToHome";

const JOB_PER_PAGE = 5;
const API_ENDPOINT = "https://hacker-news.firebaseio.com/v0"; //item/id.json

const JobPage = ({ id, time, title, job, by }) => {
  const timeFormat = new Date(time * 1000).toLocaleString();
  return (
    <div className="border-2 p-3 my-10 w-[60%] flex flex-col items-center">
      <div className="font-semibold text-2xl">{title}</div>
      <div className="flex space-x-2">
        <span>{by}</span>
        <span>{timeFormat}</span>
      </div>
    </div>
  );
};

const ButtonPagination = () => {
  const [items, setItems] = useState([]);
  const [itemIds, setItemIds] = useState([]);
  const [fetchingData, setFetchingData] = useState(false);
  const [currPage, setCurrPage] = useState(0);

  const fetchJobFromAPI = async (currentPage) => {
    setCurrPage(currentPage);
    setFetchingData(true);

    let itemIdList = itemIds;

    if (!itemIdList.length) {
      const response = await fetch(API_ENDPOINT + "/jobstories.json");
      itemIdList = await response.json();
      setItemIds(itemIdList);
    }
    const itemsIdForPage = itemIdList.slice(
      currPage * JOB_PER_PAGE,
      currPage * JOB_PER_PAGE + JOB_PER_PAGE
    );

    const itemForPages = await Promise.all(
      itemsIdForPage.map((id) =>
        fetch(API_ENDPOINT + "/item/" + id + ".json").then((res) => res.json())
      )
    );
    setItems([...items, ...itemForPages]);
    setFetchingData(false);
  };

  useEffect(() => {
    currPage === 0 && fetchJobFromAPI(currPage);
  }, []);
  return (
    <div className="flex flex-col items-center p-4">
      <BackToHome />
      <span className="text-3xl text-orange-500">Hiring Job Alerts</span>
      {fetchingData && items.length === 0 ? (
        <div className=" py-28 text-base">Loading...</div>
      ) : (
        items.map((item) => {
          return <JobPage {...item} />;
        })
      )}
      <button
        className={`p-2 px-2 text-white rounded-lg ${
          fetchingData ? "bg-gray-400" : "bg-orange-500"
        }`}
        onClick={() => fetchJobFromAPI(currPage + 1)}
        disabled={fetchingData}
      >
        {fetchingData ? "Loading..." : "Load More Job"}
      </button>
    </div>
  );
};

export default ButtonPagination;
