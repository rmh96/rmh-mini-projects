import React from "react";

const Board = ({ board, handleClick, boardSize }) => {
  return (
    <div className={`w-full grid grid-cols-${boardSize} m-0 p-0`}>
      {board.map((val, index) => {
        return (
          <button
            key={index}
            className="border-2 w-32 h-32 flex justify-center items-center cursor-pointer hover:bg-gray-200 text-lg"
            onClick={() => handleClick(index)}
            disabled={val !== null}
          >
            {val}
          </button>
        );
      })}
    </div>
  );
};

export default Board;
