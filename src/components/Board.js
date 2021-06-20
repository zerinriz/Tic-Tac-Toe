function Board({ addField, caption }) {
  return (
    <div>
      <button className="btn" onClick={() => addField(caption)}>
        {caption}
      </button>
      <button className="btn" onClick={() => addField(caption)}>
        {caption}
      </button>
      <button className="btn" onClick={() => addField(caption)}>
        {caption}
      </button>
      <br />
      <button className="btn"></button>
      <button className="btn"></button>
      <button className="btn"></button>
      <br />
      <button className="btn"></button>
      <button className="btn"></button>
      <button className="btn"></button>
    </div>
  );
}
export default Board;
