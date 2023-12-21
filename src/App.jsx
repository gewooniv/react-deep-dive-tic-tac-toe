import { useState } from "react";
import Player from "./assets/components/Player";
import Gameboard from "./assets/components/Gameboard";
import Log from "./assets/components/Log";
import GameOver from "./assets/components/GameOver";
import { WINNING_COMBINATIONS as wincon } from "./winning-combinations.js";

const PLAYERS = {
  X: "Leo",
  O: "Ivo",
};

const INITIAL_GAMEBOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActivePlayer(turns) {
  let currentPlayer = "X";

  if (turns.length > 0 && turns[0].player === "X") {
    currentPlayer = "O";
  }

  return currentPlayer;
}

function deriveGameboard(turns) {
  let gameboard = [...INITIAL_GAMEBOARD.map((array) => [...array])];

  for (const turn of turns) {
    const { player, square } = turn;
    const { row, col } = square;

    gameboard[row][col] = player;
  }

  return gameboard;
}

function deriveWinner(gameboard, players) {
  let winner = null;

  for (const combination of wincon) {
    const firstSquareSymbol =
      gameboard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameboard[combination[1].row][combination[1].column];
    const thirdSquareSymbol =
      gameboard[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = players[firstSquareSymbol];
    }
  }

  return winner;
}

function App() {
  const [players, setPlayers] = useState(PLAYERS);
  const [turns, setTurns] = useState([]);
  //  const [activePlayer, setActivePlayer] = useState("X");
  const activePlayer = deriveActivePlayer(turns);
  const gameboard = deriveGameboard(turns);
  const winner = deriveWinner(gameboard, players);
  const draw = turns.length === 9 && !winner;

  function handleClickSquare(rowIndex, colIndex) {
    //   setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));
    setTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [
        { player: currentPlayer, square: { row: rowIndex, col: colIndex } },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  }

  function handleRematch() {
    setTurns([]);
  }

  function handlePlayerNameChange(symbol, newName) {
    setPlayers((prevPlayers) => {
      return {
        ...prevPlayers,
        [symbol]: newName,
      };
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName={PLAYERS.X}
            symbol="X"
            isActive={activePlayer === "X"}
            onChangeName={handlePlayerNameChange}
          />
          <Player
            initialName={PLAYERS.O}
            symbol="O"
            isActive={activePlayer === "O"}
            onChangeName={handlePlayerNameChange}
          />
        </ol>
        {(winner || draw) && (
          <GameOver name={winner} onRematch={handleRematch} />
        )}
        <Gameboard onClickSquare={handleClickSquare} gameboard={gameboard} />
      </div>
      <Log turns={turns} />
    </main>
  );
}

export default App;
