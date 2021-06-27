function Endgame({
  winner,
  draw,
  setDraw,
  playerOne,
  playerTwo,
  setGameEnd,
  winnerList,
}) {
  const setGameStartBtn = () => {
    setGameEnd(false);
    setDraw(false)
  };
  if (draw === true)
    return (
      <div>
        <h1 className="neonText">Draw !</h1>
        <button className="neons" onClick={setGameStartBtn}>Start</button>
      </div>
    );
  else {
    return (
      <div>
        <h1 className="neonText">{winner} Won!</h1>
        <h3 className="neonText">
          {playerOne} vs {playerTwo}
        </h3>
        <h1 className="neonText">{winnerList}</h1>
        <button className="neons" onClick={setGameStartBtn}>Start</button>
      </div>
    );
  }
}
export default Endgame;
