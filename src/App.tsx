import { useState } from "react";
import "./App.css";
import StartModal from "./components/StartModal/StartModal";
import { Difficulty } from "./declarations";
import Header from "./components/Header/Header";
import Game from "./components/Game/Game";

function App() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [difficulty, setDifficulty] = useState<Difficulty>("easy");
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(100);

  console.log({ isPlaying, difficulty });
  return (
    <>
      {isPlaying ? (
        <>
          <Header
            setIsPlaying={setIsPlaying}
            score={score}
            highScore={highScore}
          />
          <Game difficulty={difficulty} />
        </>
      ) : (
        <StartModal setIsPlaying={setIsPlaying} setDifficulty={setDifficulty} />
      )}
    </>
  );
}

export default App;
