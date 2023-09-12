type Props = {
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  score: number;
  highScore: number;
};
export default function Header({ setIsPlaying, score, highScore }: Props) {
  return (
    <header className="flex flex-col items-center gap-6 py-8">
      <button
        className="border-none bg-transparent flex items-center text-2xl focus-visible:[outline:1px_solid_black]"
        aria-label="go to start screen"
        onClick={() => setIsPlaying(false)}
      >
        <img
          className="mr-2 -translate-y-[5%]"
          src="./pokeball.png"
          alt="pokeball"
        />
        <span className="text-PokeRed">Poké</span>
        <span className="text-PokeWhite mr-1">Memo</span>
      </button>
      <div className="flex gap-8 text-sm">
        <span>SCORE: {score}</span>
        <span>HIGH SCORE: {highScore}</span>
      </div>
    </header>
  );
}
