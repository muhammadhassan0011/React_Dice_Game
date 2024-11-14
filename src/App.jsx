import { useState } from "react";
import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay";
function App() {
  const [isGameStarted, setIsGameStarted] = useState(true);

  function toggleGamePlay() {
    setIsGameStarted((prev) => !prev);
  }
  return (
    <>{isGameStarted ? <StartGame toggle={toggleGamePlay} /> : <GamePlay />}</>
  );
}

export default App;
