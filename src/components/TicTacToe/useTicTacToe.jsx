import React, { useCallback, useMemo, useState } from "react";

const boardCells = () => Array(9).fill(null);

export const useTicTacToe = (dynaMicBoard) => {
  const [board, setBoard] = useState(boardCells());
  const [isXNext, setIsXNext] = useState(true);

  const winningPatterns = useCallback(() => {
    const winningPattern = [];
    //rows pattern
    for (let i = 0; i < dynaMicBoard; i++) {
      const rowsP = [];
      for (let j = 0; j < dynaMicBoard; j++) {
        rowsP.push(i * dynaMicBoard + j);
      }
      winningPattern.push(rowsP);
    }

    //columns pattern
    for (let i = 0; i < dynaMicBoard; i++) {
      const colsP = [];
      for (let j = 0; j < dynaMicBoard; j++) {
        colsP.push(j * dynaMicBoard + i);
      }
      winningPattern.push(colsP);
    }

    //diagonal patterns
    const diagonal1 = [],
      diagonal2 = [];
    for (let i = 0; i < dynaMicBoard; i++) {
      diagonal1.push(i * dynaMicBoard + i);
      diagonal2.push(i * dynaMicBoard + (dynaMicBoard - 1 - i));
    }
    winningPattern.push(diagonal1);
    winningPattern.push(diagonal2);

    return winningPattern;
  }, [dynaMicBoard]);

  const currentStatus = () => {
    const winner = calculateWinner(board);
    if (winner) return "Player " + winner + " won!";
    if (!board.includes(null)) return "It's a draw...";
    else return `Player ${isXNext ? "X" : "O"} turn`;
  };

  const calculateWinner = (board) => {
    const winningPattern = winningPatterns();
    for (let i = 0; i < winningPattern.length; i++) {
      const [a, b, c] = winningPattern[i];
      if (board[a] && board[b] === board[c] && board[a] === board[c]) {
        return board[a];
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

  return {
    board,
    resetGame,
    currentStatus,
    handleClick,
    calculateWinner,
  };
};
