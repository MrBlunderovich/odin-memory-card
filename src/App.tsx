import { useState } from "react";
import StartModal from "./components/StartModal";
import { Difficulty } from "./declarations";
import Game from "./components/Game";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

function App() {
  const { inAction, difficulty } = useAppSelector((state) => state.game);
  // const [isPlaying, setIsPlaying] = useState(true);
  // const [difficulty, setDifficulty] = useState<Difficulty>("easy");
  // const [score, setScore] = useState(0);
  // const [highScore, setHighScore] = useState(100);

  //console.log({ inAction, difficulty });
  return (
    <div className="_wrapper font-pressStart cursor-default min-h-screen [background-image:_url('/pokemon-bg.png')] bg-cover bg-center text-MainFont">
      {inAction ? (
        <>
          {/* <Game difficulty={difficulty} /> */}
          <Game />
        </>
      ) : (
        <StartModal />
      )}
    </div>
  );
}

export default App;
