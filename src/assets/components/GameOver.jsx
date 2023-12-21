export default function GameOver({ name, onRematch }) {
  return (
    <div id="game-over">
      <h2>GAME OVER man</h2>
      {name && <p>{name} won!</p>}
      {!name && <p>It's a draw!</p>}
      <p>
        <button onClick={onRematch}>Rematch!</button>
      </p>
    </div>
  );
}
