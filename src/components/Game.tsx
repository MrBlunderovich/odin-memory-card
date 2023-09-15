import { getPokemon, getPokemonBatch, getPokemonById } from "../api/pokeapi";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { GameState } from "../declarations";
import Header from "./Header";
import { useEffect, useState } from "react";
import { fetchRandomPokemon, gameActions } from "../redux/gameSlice";
import Loader from "./Loader";
import cardReverseImage from "../assets/card-back.png";

function fisherYatesShuffle(array: any[]) {
  let oldElement;
  for (let i = array.length - 1; i > 0; i--) {
    let rand = Math.floor(Math.random() * (i + 1));
    oldElement = array[i];
    array[i] = array[rand];
    array[rand] = oldElement;
  }
  return array;
}

export default function Game() {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();
  const {
    pokemonCards,
    numberOfCards,
    score,
    highScore,
    inAction,
    checkedIds,
  } = useAppSelector((state) => state.game);
  const pokemonCardsLength = pokemonCards.length;

  useEffect(() => {
    if (pokemonCardsLength === 0) {
      setIsLoading(true);
      dispatch(fetchRandomPokemon())
        .unwrap()
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [pokemonCardsLength]);

  const cardData = fisherYatesShuffle(
    pokemonCards.map((p) => ({
      id: p.id,
      name: p.name,
      imgUrl: p.sprites.front_default,
    }))
  );

  console.log({
    pokemonCards,
    numberOfCards,
    score,
    highScore,
    inAction,
    checkedIds,
  });
  //console.log("checkedIds: ", checkedIds);

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  return (
    <>
      <Header />
      <main className="mt-8 mx-auto px-4 lg:px-8 flex justify-center flex-wrap gap-4 [perspective:1000px]">
        {/* {isLoading && <Loader />} */}
        {isLoading ? (
          <Loader />
        ) : (
          cardData?.map((item) => (
            <div
              className="relative [transform-style:preserve-3d] w-[180px] h-[250px]"
              key={item.name}
            >
              <button
                className="_card w-full h-full absolute appearance-none border-none rounded-md bg-[#0003] text-xxs flex flex-col items-center gap-4 text-PokeWhite"
                onClick={() => dispatch(gameActions.cardClick({ id: item.id }))}
              >
                <img src={item.imgUrl} width="100%" alt={item.name} />
                <p className="text-sm">{item.name}</p>
              </button>
              <img
                className="absolute [transform:rotateY(180deg)_translateZ(1px)] opacity-0"
                src={cardReverseImage}
                alt="card reverse side"
              />
            </div>
          ))
        )}
      </main>
    </>
  );
}
