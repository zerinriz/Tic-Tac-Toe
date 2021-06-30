import React from "react";

function Square({ value, onClick }) {
  const takenField = (e) => {
    if (e.target.value === "false") {
      return alert("Choose unoccupied cell!");
    } else if (e.target.value === "true") {
      e.target.value = "false";
      onClick();
    }
  };
  return (
    <button className="neonSquare" onClick={takenField} value="true">
      {value}
    </button>
  );
}

export default Square;
