export type Difficulty = "easy" | "medium" | "hard";

export type GameState = {
  // difficulty: Difficulty;
  numberOfCards: number;
  inAction: boolean;
  pokemonCards: any[];
  score: number;
  highScore: number;
  checkedIds: number[];
};

export type PokemonCard = {
  id: number;
  name: string;
  imgUrl: string;
};

/* export type Pokemon = {
  id: number;
  name: string;
  imgUrl: string;
  [key: string]: unknown;
}; */
