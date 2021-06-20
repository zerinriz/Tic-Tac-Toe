import React, { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Game from "./components/Game";

function App() {
  const [playerOne, setplayerOne] = useState("O");
  const [playerTwo, setplayerTwo] = useState("X");

  return (
    <div className="App">
      <header className="App-header">Tic Tac Toe</header>
      <Login
        playerOne={playerOne}
        setplayerOne={setplayerOne}
        playerTwo={playerTwo}
        setplayerTwo={setplayerTwo}
      />
      <Game />
    </div>
  );
}

export default App;
