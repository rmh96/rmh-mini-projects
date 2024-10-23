import React from "react";
import { useTicTacToe } from "./useTicTacToe";
import BackToHome from "../BackToHome";

//dynamic A*A grid setting
const dynaMicBoard = 3;

const TicTacToe = () => {
  const { board, currentStatus, handleClick, resetGame } =
    useTicTacToe(dynaMicBoard);
  return (
    <>
      <BackToHome />
      <div
        className="w-full flex flex-col justify-center items-center pt-10 relative left-1/2 -translate-x-1/2"
        style={{ maxWidth: `calc(${dynaMicBoard + 1} * 100px)` }}
      >
        <div className="w-full flex justify-between items-center mb-10">
          <div className="text-xl font-bold">{currentStatus()}</div>
          <button className=" bg-gray-200 p-1 rounded " onClick={resetGame}>
            Reset
          </button>
        </div>
        <div className="flex justify-center flex-wrap m-0">
          {board.map((val, index) => {
            return (
              <button
                key={index}
                className=" border-2 w-32 h-32 flex justify-center items-center cursor-pointer hover:bg-gray-200 text-lg"
                onClick={() => handleClick(index)}
                disabled={val !== null}
              >
                {val}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TicTacToe;
