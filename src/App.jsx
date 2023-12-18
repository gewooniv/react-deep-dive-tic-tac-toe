import Player from "./assets/components/Player";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="Leo" symbol="X" />
          <Player initialName="Ivo" symbol="O" />
        </ol>
      </div>
    </main>
  );
}

export default App;
