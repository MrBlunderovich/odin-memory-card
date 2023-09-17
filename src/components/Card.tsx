import cardReverseImage from "../assets/card-back.png";
import { PokemonCard } from "../declarations";

type CardProps = {
  item: PokemonCard;
  handleCardClick: Function;
};
export default function Card({ item, handleCardClick }: CardProps) {
  return (
    <div className="_card group-[.flip]:[rotate:y_180deg] group-[.flip]:[pointerEvents:none] [transition:rotate_300ms_linear] relative [transform-style:preserve-3d] w-[180px] h-[250px]">
      <button
        className="_card-face active:scale-95 hover:bg-[#0005] transition-bgc [backface-visibility:hidden] w-full h-full absolute appearance-none border-none rounded-md bg-[#0003] text-xxs flex flex-col items-center gap-4 text-PokeWhite"
        onClick={() => handleCardClick(item.id)}
      >
        <img src={item.imgUrl} width="100%" alt={item.name} />
        <p className="text-sm capitalize">{item.name}</p>
      </button>
      <img
        className="_card-reverse [backface-visibility:hidden] absolute [transform:rotateY(180deg)]"
        src={cardReverseImage}
        alt="card reverse side"
      />
    </div>
  );
}
