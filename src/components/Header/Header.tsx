import {} from "react";
import styles from "./Header.module.css";

type Props = {
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  score: number;
  highScore: number;
};
export default function Header({ setIsPlaying, score, highScore }: Props) {
  return (
    <header className={styles.header}>
      <button
        className={styles.logoButton}
        aria-label="go to start screen"
        onClick={() => setIsPlaying(false)}
      >
        <img src="./pokeball.png" alt="pokeball" />
        <span>Poké</span>
        <span>Memo</span>
      </button>
      <div className={styles.scoreBoard}>
        <span>SCORE: {score}</span>
        <span>HIGH SCORE: {highScore}</span>
      </div>
    </header>
  );
}
