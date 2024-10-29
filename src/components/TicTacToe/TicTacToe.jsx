import React, { useState } from "react";
import { useTicTacToe } from "./useTicTacToe";
import BackToHome from "../BackToHome";
import Board from "./Board";

const TicTacToe = () => {
  const {
    boardSize,
    board,
    wonCells,
    currentStatus,
    handleClick,
    resetGame,
    handleBoardSize,
  } = useTicTacToe();

  return (
    <>
      <BackToHome />
      <div className="flex flex-col justify-center items-center mt-20 relative">
        <div className="w-1/3 flex justify-between items-center mb-20">
          <div className="text-xl font-bold">{currentStatus()}</div>
          <div>
            <span>Board Size: </span>
            <select
              name="boardSize"
              value={boardSize}
              onChange={handleBoardSize}
            >
              {Array.from({ length: 6 }, (_, i) => i + 2).map((item) => {
                return (
                  <option value={item} key={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
          <button className=" bg-gray-200 p-1 rounded " onClick={resetGame}>
            Reset
          </button>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 h-auto">
          <Board
            board={board}
            handleClick={handleClick}
            boardSize={boardSize}
            wonCells={wonCells}
          />
        </div>
      </div>
    </>
  );
};

export default TicTacToe;
