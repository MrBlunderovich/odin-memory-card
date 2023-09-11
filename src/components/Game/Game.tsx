import { ReactNode } from "react";
import styles from "./Game.module.css";
import { useQueries, useQuery, useQueryClient } from "@tanstack/react-query";
import { getPokemon, getPokemonBatch, getPokemonById } from "../../api/pokeapi";
import { Difficulty } from "../../declarations";

function randomOffset() {
  return Math.floor(Math.random() * 900);
}

let offset = 30;
const LIMIT = 10;
const pokemonQueries = Array(LIMIT)
  .fill(0)
  .map(() => offset++);
console.log(pokemonQueries);

type Props = { difficulty: Difficulty };
export default function Game({ difficulty }: Props) {
  //const queryClient = useQueryClient()

  /* const batchQuery = useQuery({
    queryKey: ["batch"],
    queryFn: () => getPokemonBatch(randomOffset(), 10),
    staleTime: Infinity,
  });
  console.log("batchQuery: ", batchQuery?.data?.results);
  const batchResults = batchQuery?.data?.results ?? [];
  console.log("batchResults: ", batchResults); */

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
  /* console.log(
    "pokemons: ",
    pokemons?.map((i) => i.data)
  ); */

  /* const cardData = pokemons.includes(undefined)
    ? []
    : pokemons.map((p) => ({
        name: p.name,
        image: p.sprites.front_default,
      })); */
  console.log({ pokemons });
  const success = pokemons.every((item) => item.isSuccess);
  console.log("IS_SUCCESS: ", success);
  /* console.log(
    success
      ? pokemons.map((p) => ({
          name: p.data.name,
          imgUrl: p.data.sprites.front_default,
        }))
      : []
  ); */
  const cardData = success
    ? pokemons.map((p) => ({
        name: p.data.name,
        imgUrl: p.data.sprites.front_default,
      }))
    : [];
  return (
    <main className={styles.game}>
      {cardData.map((item) => (
        <div key={item.name} className={styles.card}>
          <img src={item.imgUrl} alt={item.name} />
          <p>{item.name}</p>
        </div>
      ))}
      {/* {Array(16)
        .fill("card")
        .map((item, index) => (
          <div key={index} className={styles.card}>
            {item}
          </div>
        ))} */}
    </main>
  );
}
