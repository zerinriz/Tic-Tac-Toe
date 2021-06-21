import React from "react";

function Navbar({ playerOne }) {
  return (
    <div className="Navbar">
      <h2>Tic Tac Toe</h2>
      <h3>{playerOne}</h3>
    </div>
  );
}

export default Navbar;
