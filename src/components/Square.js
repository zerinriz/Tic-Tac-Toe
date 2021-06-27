import React from "react";

function Square({ value, onClick }) {
  return (
    <button className="neonSquare" onClick={onClick}>
      {value}
    </button>
  );
}

export default Square;
