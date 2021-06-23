import React from "react";

function Navbar({ playerOne, playerTwo }) {
  return (
    <div className="Navbar">
      <h4>Player 1</h4>
      <h2>
        Tic Tac Toe {playerOne} {playerTwo}
      </h2>
    </div>
  );
}

export default Navbar;
