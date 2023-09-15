import { useAppDispatch, useAppSelector } from "../redux/hooks";
import Header from "./Header";
import { useEffect, useRef, useState } from "react";
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
  const cardContainerRef = useRef<HTMLDivElement | null>(null);
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

  useEffect(() => {
    setTimeout(() => {
      cardContainerRef.current?.classList.remove("flip");
    }, 150);
  });

  const cardData = fisherYatesShuffle(
    pokemonCards.map((p) => ({
      id: p.id,
      name: p.name,
      imgUrl: p.sprites.front_default,
    }))
  );

  function handleCardClick(id: number) {
    cardContainerRef.current?.classList.add("flip");
    setTimeout(() => {
      dispatch(gameActions.cardClick({ id }));
    }, 350);
  }

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
      <main className="mt-8 mx-auto px-4 lg:px-8 [perspective:1000px]">
        {/* {isLoading && <Loader />} */}
        {isLoading ? (
          <Loader />
        ) : (
          <div
            className="_card-container flip group flex justify-center flex-wrap gap-4"
            ref={cardContainerRef}
          >
            {cardData?.map((item) => (
              <div
                className="_card group-[.flip]:[rotate:y_180deg] [transition:rotate_300ms_linear] relative [transform-style:preserve-3d] w-[180px] h-[250px]"
                key={item.name}
              >
                <button
                  className="_card-face  [backface-visibility:hidden] w-full h-full absolute appearance-none border-none rounded-md bg-[#0003] text-xxs flex flex-col items-center gap-4 text-PokeWhite"
                  onClick={() => handleCardClick(item.id)}
                >
                  <img src={item.imgUrl} width="100%" alt={item.name} />
                  <p className="text-sm">{item.name}</p>
                </button>
                <img
                  className="_card-reverse [backface-visibility:hidden] absolute [transform:rotateY(180deg)]"
                  src={cardReverseImage}
                  alt="card reverse side"
                />
              </div>
            ))}
          </div>
        )}
      </main>
    </>
  );
}
