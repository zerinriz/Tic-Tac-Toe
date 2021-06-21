import React from "react";
import { useHistory } from "react-router-dom";

function Login({ playerOne, setplayerOne, playerTwo, setplayerTwo }) {
  const history = useHistory();

  const startGameLogin = () => {
    if (playerOne === null) {
      history.push("/game");
    } else alert("Must enter Both names");
  };
  const setPlayerNameOne = e => {
    setplayerOne(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="Login"></div>
        <h3>Player 1</h3>
        <input
          type="text"
          value={playerOne}
          onChange={setPlayerNameOne}
        ></input>
        <h3>Player 2</h3>
        <input type="text" value={playerTwo}></input>
        <br />
        <button onClick={startGameLogin}>Start</button>
      </form>
    </div>
  );
}
export default Login;
