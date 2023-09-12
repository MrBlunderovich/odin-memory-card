import { useQueries, useQuery, useQueryClient } from "@tanstack/react-query";
import { getPokemon, getPokemonBatch, getPokemonById } from "../api/pokeapi";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { GameState } from "../declarations";
import Header from "./Header";
import { useEffect } from "react";
import { fetchRandomPokemon } from "../redux/gameSlice";

function randomOffset() {
  return Math.floor(Math.random() * 900);
}

let offset = 30;
const LIMIT = 10;
const pokemonQueries = Array(LIMIT)
  .fill(0)
  .map(() => offset++);
//console.log(pokemonQueries);

// type Props = { difficulty: Difficulty };
// export default function Game({ difficulty }: Props) {
export default function Game() {
  const dispatch = useAppDispatch();
  const { pokemonCards, difficulty, score, highScore } = useAppSelector(
    (state) => state.game
  );

  useEffect(() => {
    dispatch(fetchRandomPokemon(10));
  }, []);

  const pokemons = useQueries({
    queries: pokemonQueries.map((id) => {
      return {
        queryKey: ["pokemon", id],
        queryFn: () => getPokemonById(id),
        staleTime: Infinity,
        enabled: pokemonQueries.length > 0,
      };
    }),
  });
  //console.log({ pokemons });
  const success = pokemons.every((item) => item.isSuccess);
  //console.log("IS_SUCCESS: ", success);
  const cardData = success
    ? pokemons.map((p) => ({
        name: p.data.name,
        imgUrl: p.data.sprites.front_default,
      }))
    : [];

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
