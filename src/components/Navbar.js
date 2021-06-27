import React from "react";

function Navbar({ playerOne, playerTwo, countOne, countTwo, drawCount }) {
  return (
    <div className="Navbar">
      <h3 className="neonText">
        Tic Tac Toe        {playerOne}:{countOne} {playerTwo}:{countTwo} Draw:
        {drawCount}
      </h3>
    </div>
  );
}

export default Navbar;
