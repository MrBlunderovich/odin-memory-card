import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { GameState } from "../declarations";
import { getPokemonById } from "../api/pokeapi";

const POKEMON_TOTAL = 1010;

export const fetchRandomPokemon = createAsyncThunk(
  "game/fetchRandomPokemon",
  async (quantity: number) => {
    const IDs = pickRandomIDs(quantity);

    const promises = IDs.map(
      (id) =>
        axios
          .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
          .then((response) => response.data)

      //(getPokemonById(id))
    );

    // Use Promise.all to execute all requests in parallel
    const results = await Promise.all(promises);

    return results;
    //const response = await getPokemonById(id);
    //return response.data;
  }
);

/* export const fetchComments = createAsyncThunk(
  "posts/fetchComments",
  async (postId, { dispatch }) => {
    const response = await axios.get(
      `https://dummyjson.com/comments/post/${postId}`
    );
    dispatch(postsActions.showComments(postId));
    return { id: postId, data: response.data.comments };
  }
); */

const initialState: GameState = {
  difficulty: "easy",
  inAction: false,
  pokemonCards: null,
  score: 0,
  highScore: 0,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    startNewGame: (state, action) => {
      state.inAction = true;
      state.difficulty = action.payload;
    },
    abortGame: (state) => {
      state.inAction = false;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchRandomPokemon.fulfilled, (state, action) => {
      state.pokemonCards = action.payload;
      console.log(action.payload);
    });
  },
});

export const gameReducer = gameSlice.reducer;
export const gameActions = gameSlice.actions;

function pickRandomIDs(quantity: number) {
  return Array(quantity)
    .fill(null)
    .map((_) => {
      return Math.floor(Math.random() * POKEMON_TOTAL + 1);
    });
}
