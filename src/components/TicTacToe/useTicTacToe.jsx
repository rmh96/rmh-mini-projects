import React, { useCallback, useEffect, useMemo, useState } from "react";

export const useTicTacToe = () => {
  const [boardSize, setBoardSize] = useState(3);
  const boardCells = useMemo(
    () => Array(boardSize * boardSize).fill(null),
    [boardSize]
  );
  console.log(boardCells);
  const [board, setBoard] = useState(boardCells);
  const [isXNext, setIsXNext] = useState(true);

  const handleBoardSize = (e) => {
    setBoardSize(e.target.value);
  };

  const winningPatterns = useCallback(() => {
    const winningPattern = [];
    //rows pattern
    for (let i = 0; i < boardSize; i++) {
      const rowsP = [];
      for (let j = 0; j < boardSize; j++) {
        rowsP.push(i * boardSize + j);
      }
      winningPattern.push(rowsP);
    }

    //columns pattern
    for (let i = 0; i < boardSize; i++) {
      const colsP = [];
      for (let j = 0; j < boardSize; j++) {
        colsP.push(j * boardSize + i);
      }
      winningPattern.push(colsP);
    }

    //diagonal patterns
    const diagonal1 = [],
      diagonal2 = [];
    for (let i = 0; i < boardSize; i++) {
      diagonal1.push(i * boardSize + i);
      diagonal2.push(i * boardSize + (boardSize - 1 - i));
    }
    winningPattern.push(diagonal1);
    winningPattern.push(diagonal2);

    return winningPattern;
  }, [boardSize]);

  const currentStatus = () => {
    const winner = calculateWinner(board);
    if (winner) return "Player " + winner + " won!";
    if (!board.includes(null)) return "It's a draw...";
    else return `Player ${isXNext ? "X" : "O"} turn`;
  };

  const calculateWinner = (board) => {
    const winningPattern = winningPatterns();
    for (let i = 0; i < winningPattern.length; i++) {
      const firstVal = board[winningPattern[i][0]];
      let allEqual = true;
      const remainingIndex = winningPattern[i].slice(1);
      for (let j of remainingIndex) {
        if (board[j] !== firstVal) {
          allEqual = false;
        }
      }
      if (allEqual && firstVal !== null) {
        return firstVal;
      }
    }
    return null;
  };

  const handleClick = (index) => {
    //check winner
    const winner = calculateWinner(board);
    if (winner || board[index]) return;
    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const resetGame = () => {
    setBoard(boardCells);
    setIsXNext(true);
  };

  useEffect(() => {
    setBoard(boardCells);
  }, [boardCells]);

  return {
    boardSize,
    board,
    resetGame,
    currentStatus,
    handleClick,
    calculateWinner,
    handleBoardSize,
  };
};
