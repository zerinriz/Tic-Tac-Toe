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

  const setGameStartBtn = () => {
    setGameStart(false);
  };
  const SubmitTodoHandler = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={SubmitTodoHandler}>
      <div className="Login"></div>
      <h3>Player 1</h3>
      <input
        type="text"
        value={playerOne}
        onChange={setPlayers1}
        required
      ></input>
      <h3>Player 2</h3>
      <input
        type="text"
        value={playerTwo}
        onChange={setPlayers2}
        required
      ></input>
      <br />
      <button onClick={(props) => setGameStartBtn(props)}>Start</button>
    </form>
  );
}
export default Login;
