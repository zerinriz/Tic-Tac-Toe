function Board({ onClick }) {
  return (
    <button className="restart" onClick={onClick}>
      Play again
    </button>
  );
}

export default Board;
