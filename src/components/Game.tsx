import { useQueries, useQuery, useQueryClient } from "@tanstack/react-query";
import { getPokemon, getPokemonBatch, getPokemonById } from "../api/pokeapi";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { GameState } from "../declarations";
import Header from "./Header";
import { useEffect } from "react";
import { fetchRandomPokemon } from "../redux/gameSlice";

const difficultyMap = {
  easy: 5,
  medium: 10,
  hard: 15,
};

export default function Game() {
  const dispatch = useAppDispatch();
  const { pokemonCards, difficulty, score, highScore, inAction } =
    useAppSelector((state) => state.game);
  const numberOfCards = difficultyMap[difficulty];

  useEffect(() => {
    dispatch(fetchRandomPokemon(numberOfCards));
  }, []);

  const cardData = pokemonCards
    ? pokemonCards.map((p) => ({
        name: p.name,
        imgUrl: p.sprites.front_default,
      }))
    : [];

  console.log({ pokemonCards, difficulty, score, highScore, inAction });

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  return (
    <>
      <Header score={score} highScore={highScore} />
      <main className="mt-8 mx-auto px-4 max-w-[1200px] flex justify-center flex-wrap gap-4">
        {cardData.map((item) => (
          <button
            className="_card appearance-none border-none rounded-md w-[180px] h-[250px] bg-[#0003] text-xxs flex flex-col items-center gap-4 text-PokeWhite"
            key={item.name}
          >
            <img src={item.imgUrl} width="200%" alt={item.name} />
            <p>{item.name}</p>
          </button>
        ))}
      </main>
    </>
  );
}
