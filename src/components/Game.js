import React, { useState, useEffect } from "react";
import Square from "./Square";
import Board from "./Board";

function Game({
  handleEndGame,
  setWinner,
  playerOne,
  playerTwo,
  setDraw,
  setCountOne,
  setCountTwo,
  countOne,
  countTwo,
  drawCount,
  setDrawCount,
  game,
  setGame,
}) {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const nextSymbol = isXNext ? "X" : "O";
  const nextPlayer = isXNext ? playerOne : playerTwo;
  const winner = calculateWinner(squares);
  function getStatus() {
    if (winner === "X") {
      setWinner(playerOne);
      setCountOne(countOne + 1);
      setGame([...game, gameData]);
      return handleEndGame(true);
    } else if (winner === "O") {
      setWinner(playerTwo);
      setCountTwo(countTwo + 1);
      setGame([...game, gameData]);
      return handleEndGame(true);
    } else if (isBoardFull(squares)) {
      setDrawCount(drawCount + 1);
      setDraw(true);
      setGame([...game, gameData]);
      return handleEndGame(true);
    } else {
      return (
        <h4 className="neonText">
          {nextPlayer} it is your turn now, you are {nextSymbol}
        </h4>
      );
    }
  }

  var today = new Date(),
    timeShow =
      today.getDate() +
      "." +
      today.getMonth() +
      " " +
      today.getHours() +
      ":" +
      today.getMinutes() +
      ":" +
      today.getSeconds();

  const gameData = {
    time: timeShow,
    nameOne: playerOne,
    nameTwo: playerTwo,
    result: winner,
  };

  useEffect(() => {
    localStorage.setItem("winners", JSON.stringify(game));
  }, [game]);

  function renderSquare(i) {
    return (
      <Square
        value={squares[i]}
        onClick={() => {
          if (squares[i] != null || winner != null) {
            return;
          }
          const nextSquares = squares.slice();
          nextSquares[i] = nextSymbol;
          setSquares(nextSquares);
          setIsXNext(!isXNext);
        }}
      />
    );
  }

  function renderRestartButton() {
    return (
      <Board
        onClick={() => {
          setSquares(Array(9).fill(null));
          setIsXNext(true);
        }}
      />
    );
  }

  return (
    <div className="container">
      <div className="game">
        <div className="game-board">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
        <div className="game-info">{getStatus()}</div>
        <div className="restart-button">{renderRestartButton()}</div>
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const possibleLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < possibleLines.length; i++) {
    const [a, b, c] = possibleLines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function isBoardFull(squares) {
  for (let i = 0; i < squares.length; i++) {
    if (squares[i] == null) {
      return false;
    }
  }
  return true;
}
export default Game;
