export default function Gameboard({ onClickSquare, gameboard }) {
  // const [gameboard, setGameboard] = useState(initialGameboard);

  // function handleClickSquare(rowIndex, colIndex) {
  //   setGameboard((prevGameboard) => {
  //     const newGameboard = [
  //       ...prevGameboard.map((innerArray) => [...innerArray]),
  //     ];
  //     newGameboard[rowIndex][colIndex] = activePlayerSymbol;
  //     return newGameboard;
  //   });

  //   onClickSquare();
  // }

  return (
    <ol id="game-board">
      {gameboard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onClickSquare(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
