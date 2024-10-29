import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

export const useTicTacToe = () => {
  //initialize the board with 3*3 grid
  const [boardSize, setBoardSize] = useState(3);
  //based on boardSize create the arrays for the cell like if 3 * 3 then cells will be 9
  const boardCells = useMemo(
    () => Array(boardSize * boardSize).fill(null),
    [boardSize]
  );

  const [board, setBoard] = useState(boardCells);
  const [isXNext, setIsXNext] = useState(true);
  const wonCells = useRef([]);

  const handleBoardSize = (e) => {
    setIsXNext(true);
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
    //get the winningpatterns
    const winningPattern = winningPatterns();
    //if pattern is [0,1,2,3] then check if all values in the index are equal or not
    for (let i = 0; i < winningPattern.length; i++) {
      const firstVal = board[winningPattern[i][0]];
      let allEqual = true;
      const remainingIndex = winningPattern[i].slice(1);
      for (let j of remainingIndex) {
        if (board[j] !== firstVal) {
          allEqual = false;
        }
      }
      if (allEqual && firstVal !== null && firstVal !== "") {
        wonCells.current = winningPattern[i];
        return firstVal;
      }
    }
    return null;
  };

  const handleClick = (index) => {
    //check winner
    const winner = calculateWinner(board);
    //if winner condition match then disable the click
    if (winner || board[index]) return;
    //setting the cell with the player name & creating the new board cells
    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  //reset the boardCells to empty & set the player to X
  const resetGame = () => {
    setBoard(boardCells);
    wonCells.current = [];
    setIsXNext(true);
  };

  //if user change the dropdown size, then set the value in the state
  useEffect(() => {
    setBoard(boardCells);
    wonCells.current = [];
  }, [boardCells]);

  return {
    boardSize,
    board,
    wonCells,
    resetGame,
    currentStatus,
    handleClick,
    calculateWinner,
    handleBoardSize,
  };
};
