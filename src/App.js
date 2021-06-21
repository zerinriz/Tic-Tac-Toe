import React, { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Navbar from "./components/Navbar";

function App() {
  const [playerOne, setplayerOne] = useState("");
  const [playerTwo, setplayerTwo] = useState("");

  const startGame = () => {
    if (playerOne === "") {
      alert("Must enter name!");
    } else {
      setplayerOne(playerOne);
    }
  };

  return (
    <div className="App">
      <header className="App-header">Tic Tac Toe</header>
      <Login
        playerOne={playerOne}
        setplayerOne={setplayerOne}
        playerTwo={playerTwo}
        setplayerTwo={setplayerTwo}
        startGame={startGame}
      />
      <Navbar playerOne={playerOne} playerTwo={playerTwo} />
    </div>
  );
}

export default App;
