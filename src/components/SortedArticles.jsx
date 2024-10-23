import React, { useState } from "react";
import { votes } from "../utils/constants";
import BackToHome from "./BackToHome";

const SortedArticles = () => {
  const [voteList, setVoteList] = useState(() => {
    return votes.sort((a, b) => {
      return b.votes - a.votes;
    });
  });
  const sortByVote = () => {
    const newEntries = [...voteList];
    newEntries.sort((a, b) => {
      return b.votes - a.votes;
    });
    setVoteList(newEntries);
  };
  const sortByDates = () => {
    const newEntries = [...voteList];
    newEntries.sort((a, b) => {
      const aDate = new Date(a.entry);
      const bDate = new Date(b.entry);
      return bDate - aDate;
    });
    setVoteList(newEntries);
  };
  const sortByName = () => {
    const newEntries = [...voteList];
    newEntries.sort((a, b) => {
      const aNum = parseInt(a.partName.slice(-2));
      const bNum = parseInt(b.partName.slice(-2));

      if (aNum > bNum) return -1;
      if (aNum < bNum) return 1;

      const aName = a.partName.toLowerCase();
      const bName = b.partName.toLowerCase();
      //   return bName.localeCompare(aName);
      if (aName > bName) return -1;
      if (aName < bName) return 1;
      return 0;
    });
    setVoteList(newEntries);
  };
  return (
    <div className="w-full flex flex-col justify-center items-center mt-20">
      <BackToHome />
      <div className="flex space-x-10">
        <div className={`p-4 text-green-700 text-lg font-semibold `}>
          Sorted By
        </div>
        <button
          className={`p-4 bg-green-600 text-white border border-green-700 text-lg font-semibold hover:bg-green-700`}
          onClick={sortByName}
        >
          Party
        </button>
        <button
          className={`p-4 bg-green-600 text-white border border-green-700 text-lg font-semibold hover:bg-green-700`}
          onClick={sortByVote}
        >
          Votes
        </button>
        <button
          className={`p-4 bg-green-600 text-white border border-green-700  text-lg font-semibold hover:bg-green-700`}
          onClick={sortByDates}
        >
          Dates
        </button>
      </div>
      <div className="w-1/2 border shadow-xl mt-20 ">
        <table className="w-full">
          <thead className="bg-green-500 w-full text-lg font-semibold">
            <tr>
              <td className="text-center border-r-2 ">Names</td>
              <td className="text-center border-r-2">Votes</td>
              <td className="text-center border-r-2">Dates</td>
            </tr>
          </thead>
          <tbody className="w-full">
            {voteList.map((item) => {
              return (
                <tr key={item.partName}>
                  <td className="text-center border-r">{item.partName}</td>
                  <td className="text-center border-r">{item.votes}</td>
                  <td className="text-center border-r">{item.entry}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SortedArticles;
