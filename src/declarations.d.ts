export type Difficulty = "easy" | "medium" | "hard";

export type GameState = {
  difficulty: Difficulty;
  inAction: boolean;
  pokemonCards: any[] | null;
  score: number;
  highScore: number;
};
