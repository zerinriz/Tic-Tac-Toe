import React, { useState } from "react";
import Board from "./Board";

function Game() {
  const [pin, setPin] = useState("");

  const addField = (digit) => {
    if ("X" === pin) {
      setPin("O");
    } else setPin("X");
  };
  return <Board addField={addField} caption={pin} />;
}
export default Game;
