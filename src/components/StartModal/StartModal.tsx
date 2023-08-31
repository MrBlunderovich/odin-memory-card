import {} from "react";
import styles from "./StartModal.module.css";
import { Difficulty } from "../../declarations";

type Props = {
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  setDifficulty: React.Dispatch<React.SetStateAction<Difficulty>>;
};
export default function StartModal({ setIsPlaying, setDifficulty }: Props) {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const difficulty = form.difficulty.value as Difficulty;
    setIsPlaying(true);
    setDifficulty(difficulty);
  }

  return (
    <div className={styles.backdrop}>
      <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
        <h2>What would you like to do?</h2>
        <fieldset className={styles.radioset}>
          {["easy", "medium", "hard"].map((value, index) => (
            <label key={value} className={styles.radioLabel}>
              <input
                className={styles.radio}
                type="radio"
                name="difficulty"
                value={value}
                defaultChecked={index === 0}
              ></input>
              {value}
            </label>
          ))}
        </fieldset>
        <button className={styles.button} type="submit">
          START GAME
        </button>
        <button className={styles.button} type="button">
          GITHUB REPO
        </button>
      </form>
    </div>
  );
}
