import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Difficulty, GameState } from "../declarations";
import { RootState } from "./store";

const POKEMON_TOTAL = 1010;

const difficultyMap = {
  easy: 5,
  medium: 10,
  hard: 15,
};

export const fetchRandomPokemon = createAsyncThunk(
  "game/fetchRandomPokemon",
  async (_, thunkAPI) => {
    const wholeState = thunkAPI.getState() as RootState;
    const gameState = wholeState.game;
    const IDs = pickRandomIDs(gameState.numberOfCards);
    const promises = IDs.map((id) =>
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((response) => response.data)
    );
    const results = await Promise.all(promises);
    return results;
  }
);

const initialState: GameState = {
  numberOfCards: 0,
  inAction: false,
  pokemonCards: [],
  score: 0,
  highScore: 0,
  checkedIds: [],
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    startNewGame: (state, action: { type: string; payload: Difficulty }) => {
      const difficulty = action.payload;
      state.numberOfCards = difficultyMap[difficulty];
      state.inAction = true;
      state.pokemonCards = [];
      state.checkedIds = [];
      state.score = 0;
    },
    abortGame: (state) => {
      state.inAction = false;
      state.pokemonCards = [];
      state.checkedIds = [];
      state.numberOfCards = 0;
      state.score = 0;
    },
    cardClick: (state, action) => {
      const cardId = action.payload.id;
      if (state.checkedIds.includes(cardId)) {
        console.log("round over(FAILURE)");
        state.checkedIds = [];
        state.score = 0;
        state.pokemonCards = [];
        return;
      }
      //////////////////////////////guard

      state.checkedIds.push(cardId);
      state.score++;
      if (state.score > state.highScore) {
        state.highScore = state.score;
      }
      if (state.checkedIds.length === state.numberOfCards) {
        console.log("round over(SUCCESS)");
        state.checkedIds = [];
        state.pokemonCards = [];
      }
      //shuffle cards
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchRandomPokemon.fulfilled, (state, action) => {
      state.pokemonCards = action.payload;
    });
  },
});

export const gameReducer = gameSlice.reducer;
export const gameActions = gameSlice.actions;

/* function pickRandomIDs(quantity: number) {
  return Array(quantity)
    .fill(null)
    .map((_) => {
      return Math.floor(Math.random() * POKEMON_TOTAL + 1);
    });
} */

function pickRandomIDs(quantity: number) {
  const result: number[] = [];
  while (result.length < quantity) {
    const newItem = Math.floor(Math.random() * POKEMON_TOTAL + 1);
    if (result.includes(newItem)) {
      continue;
    }
    result.push(newItem);
  }
  return result;
}
