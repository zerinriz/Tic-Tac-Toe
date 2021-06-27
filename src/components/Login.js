import React from "react";

function Login({
  playerOne,
  playerTwo,
  setplayerOne,
  setplayerTwo,
  setGameStart,
}) {
  const setPlayers1 = (e) => {
    setplayerOne(e.target.value);
  };

  const setPlayers2 = (e) => {
    setplayerTwo(e.target.value);
  };

  const setGameStartBtn = (e) => {
    e.preventDefault();
    setGameStart(false);
  };

  return (
    <form onSubmit={setGameStartBtn}>
      <div className="Login"></div>
      <h3 className="neonText">Player X</h3>
      <input
       className="neonInput"
        type="text"
        value={playerOne}
        onChange={setPlayers1}
        required
      ></input>
      <h3 className="neonText">Player O</h3>
      <input
      className="neonInput"
        type="text"
        value={playerTwo}
        onChange={setPlayers2}
        required
      ></input>
      <br />
      <button className="neons">Start</button>
    </form>
  );
}
export default Login;
