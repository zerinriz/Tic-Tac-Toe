function Board({ onClick }) {
  return (
    <button className="neonRestart" onClick={onClick}>
      Play again
    </button>
  );
}

export default Board;
