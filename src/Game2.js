import React, { useState } from "react";
import Board from "./Board";
import Navbar from "./Navbar";
import Endgame from "./Endgame";

function Game2() {
  const [xIsNext, setXIsNext] = useState(true);
  const [stepNumber, setStepNumber] = useState(0);
  const [history, setHistory] = useState({ squares: Array(9).fill(null) });

  function jumpTo(step) {
    this.setState({
      stepNumber: 0,
      xIsNext: step % 2 === 0,
    });
  }
  function handleClick(i) {
    const history = history.slice(0, setStepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    const winner = calculateWinner(squares);
    if (winner || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? "X" : "O";
    this.setState({
      history: history.concat({
        squares: squares,
      }),
      xIsNext: !xIsNext,
      stepNumber: history.length,
    });
  }

  const current = setHistory[stepNumber];
  const winner = calculateWinner(current.squares);
  const moves = history.map((step, move) => {
    const desc = move ? "Go to #" + move : "Start the Game";
    return (
      <button
        onClick={() => {
          jumpTo(move);
        }}
      >
        {desc}
      </button>
    );
  });
  let status;
  if (winner) {
    return <Endgame />;
  } else {
    status = "Next Player is " + (xIsNext ? "X" : "O");
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board onClick={(i) => handleClick(i)} squares={current.squares} />
      </div>{" "}
      <div className="game-info">
        <Navbar />
        <div>{status}</div>
        <div>{moves}</div>
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}

export default Game2;
