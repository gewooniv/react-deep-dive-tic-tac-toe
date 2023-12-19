import { useState } from "react";
import Player from "./assets/components/Player";
import Gameboard from "./assets/components/Gameboard";
import Log from "./assets/components/Log";

function deriveActivePlayer(turns) {
  let currentPlayer = "X";

  if (turns.length > 0 && turns[0].player === "X") {
    currentPlayer = "O";
  }

  return currentPlayer;
}

function App() {
  const [turns, setTurns] = useState([]);
  //  const [activePlayer, setActivePlayer] = useState("X");
  const activePlayer = deriveActivePlayer(turns);

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

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Leo"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            initialName="Ivo"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        <Gameboard onClickSquare={handleClickSquare} turns={turns} />
      </div>
      <Log turns={turns} />
    </main>
  );
}

export default App;
