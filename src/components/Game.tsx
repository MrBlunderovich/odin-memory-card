import { useAppDispatch, useAppSelector } from "../redux/hooks";
import Header from "./Header";
import { useEffect, useRef, useState } from "react";
import { fetchRandomPokemon, gameActions } from "../redux/gameSlice";
import Loader from "./Loader";
import { PokemonCard } from "../declarations";
import Card from "./Card";
import Modal from "./Modal";
import WinDialog from "./WinDialog";
import LossDialog from "./LossDialog";

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
/////////////////////////////////////////////////////////////
export default function Game() {
  const cardContainerRef = useRef<HTMLDivElement | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();
  const { pokemonCards, status } = useAppSelector((state) => state.game);
  const pokemonCardsLength = pokemonCards.length;

  useEffect(() => {
    if (pokemonCardsLength !== 0) return;
    //
    setIsLoading(true);
    dispatch(fetchRandomPokemon())
      .unwrap()
      .finally(() => {
        setIsLoading(false);
      });
  }, [pokemonCardsLength]);

  useEffect(() => {
    if (status !== "game") return;
    //
    setTimeout(() => {
      cardContainerRef.current?.classList.remove("flip");
    }, 150);
  });

  const cardData = fisherYatesShuffle(
    pokemonCards.map(
      (p) =>
        ({
          id: p.id,
          name: p.name,
          imgUrl: p.sprites.front_default,
        } as PokemonCard)
    )
  );

  function handleCardClick(id: number) {
    cardContainerRef.current?.classList.add("flip");
    setTimeout(() => {
      dispatch(gameActions.cardClick({ id }));
    }, 350);
  }

  /* console.log({
    pokemonCards,
    numberOfCards,
    score,
    highScore,
    inAction,
    checkedIds,
  }); */

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  return (
    <>
      {status === "win" && (
        <Modal>
          <WinDialog />
        </Modal>
      )}
      {status === "loss" && (
        <Modal>
          <LossDialog />
        </Modal>
      )}
      <Header />
      <main className="mt-8 mx-auto px-4 lg:px-8 [perspective:1000px]">
        {isLoading ? (
          <Loader />
        ) : (
          <div
            className="_card-container flip group flex justify-center flex-wrap gap-4"
            ref={cardContainerRef}
          >
            {cardData?.map((item) => (
              <Card
                key={item.name}
                item={item}
                handleCardClick={handleCardClick}
              />
            ))}
          </div>
        )}
      </main>
    </>
  );
}
