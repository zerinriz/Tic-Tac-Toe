import { useState } from "react";
const WinnerList = ({ winner, playerOne, playerTwo }) => {
  const [game, setGame] = useState([]);
  
  var today = new Date(),
    timeShow =
      today.getDate() +
      "." +
      today.getMonth() +
      " " +
      today.getHours() +
      ":" +
      today.getMinutes();

  var idCount = Math.random();

  const saveGame = () => {
    const gameData = {
      time: timeShow,
      nameOne: playerOne,
      nameTwo: playerTwo,
      result: winner,
    };
    setGame([...game, gameData]);
    localStorage.setItem("winners", JSON.stringify(game));
  };

  const showGame = () => {
    const result = localStorage.getItem("winners");
    setGame(JSON.parse(result));
  };

  return (
    <div>
      <div>
        <button className="neonWin" type="button" onClick={saveGame}>
          SAVE GAME
        </button>
        <button className="neonWin" type="button" onClick={showGame}>
          SHOW GAME
        </button>
        <hr />
        {game.map((item) => (
          <div className="neonText" key={idCount}>
            {item.time} {item.nameOne} VS {item.nameTwo} {item.result} WON!
          </div>
        ))}
      </div>
    </div>
  );
};
export default WinnerList;
