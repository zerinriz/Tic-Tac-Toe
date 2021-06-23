import React, { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Game from "./components/Game";
import Navbar from "./components/Navbar";
import Endgame from "./components/Endgame";

function App() {
  const [playerOne, setplayerOne] = useState("");
  const [playerTwo, setplayerTwo] = useState("");
  const [gameStart, setGameStart] = useState(true);
  const [gameEnd, setGameEnd] = useState(false);



  
  if (gameStart === true) {
    return (
      <div>
        <Login
          setGameStart={setGameStart}
          playerOne={playerOne}
          playerTwo={playerTwo}
          setplayerOne={setplayerOne}
          setplayerTwo={setplayerTwo}
        />
      </div>
    );
  } else if (gameStart === false) {
    return (
      <div>
        <Game
          playerOne={playerOne}
          playerTwo={playerTwo}
          setGameEnd={setGameEnd}
        />
        <Navbar />
      </div>
    );
  } else if (gameEnd === true) {
    return (
      <div>
        <Endgame playerOne={playerOne} playerTwo={playerTwo} />
      </div>
    );
  }
}

export default App;
