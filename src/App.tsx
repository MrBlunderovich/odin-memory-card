import { useState } from "react";
import StartModal from "./components/StartModal";
import { Difficulty } from "./declarations";
import Header from "./components/Header";
import Game from "./components/Game";

function App() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [difficulty, setDifficulty] = useState<Difficulty>("easy");
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(100);

  console.log({ isPlaying, difficulty });
  return (
    <div className="_wrapper font-pressStart cursor-default min-h-screen [background-image:_url('/pokemon-bg.png')] bg-cover bg-center text-MainFont">
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
    </div>
  );
}

export default App;
