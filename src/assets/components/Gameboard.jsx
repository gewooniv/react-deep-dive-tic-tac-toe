const initialGameboard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function Gameboard({ onClickSquare, turns }) {
  let gameboard = initialGameboard;

  for (const turn of turns) {
    const { player, square } = turn;
    const { row, col } = square;

    gameboard[row][col] = player;
  }

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
                <button onClick={() => onClickSquare(rowIndex, colIndex)}>
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
