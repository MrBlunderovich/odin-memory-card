import { useState } from "react";
import "./App.css";
import StartModal from "./components/StartModal/StartModal";
import { Difficulty } from "./declarations";

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [difficulty, setDifficulty] = useState<Difficulty>("easy");

  console.log(isPlaying, difficulty);
  return (
    <>
      {!isPlaying && (
        <StartModal setIsPlaying={setIsPlaying} setDifficulty={setDifficulty} />
      )}
    </>
  );
}

export default App;
