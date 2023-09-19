import { gameActions } from "../redux/gameSlice";
import { useAppDispatch } from "../redux/hooks";
import ModalButton from "./UI/ModalButton";
import { Difficulty } from "../declarations";
import FocusHoverWrapper from "./UI/FocusHoverWrapper";

export default function StartDialog() {
  const dispatch = useAppDispatch();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const difficulty = form.difficulty.value as Difficulty;
    dispatch(gameActions.startNewGame(difficulty));
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <h2 className="text-center text-base">Let`s play!</h2>
      {/*  */}
      <FocusHoverWrapper>
        <fieldset className="Radioset appearance-none border-none flex justify-center gap-8 my-4 px-6">
          {/*  */}
          {["easy", "medium", "hard"].map((value, index) => (
            <label
              className="Radiolabel cursor-glovePointer relative capitalize"
              key={value}
            >
              <input
                className='Radio appearance-none w-[1px] h-4 relative focus-visible:outline-none checked:before:absolute checked:before:content-[">"] checked:before:-translate-x-full checked:before:-translate-y-[15%]'
                type="radio"
                name="difficulty"
                value={value}
                defaultChecked={index === 0}
              ></input>
              {value}
            </label>
          ))}
        </fieldset>
      </FocusHoverWrapper>
      <FocusHoverWrapper>
        <ModalButton type="submit">START GAME</ModalButton>
      </FocusHoverWrapper>
      <FocusHoverWrapper>
        <ModalButton type="button">GITHUB REPO</ModalButton>
      </FocusHoverWrapper>
    </form>
  );
}

/* function FocusHoverWrapper({ children }: { children: ReactNode }) {
  return (
    <span
      className="relative 
      focus-within:before:absolute
      focus-within:before:left-0
      focus-within:before:content-['>']
      focus-within:before:font-pressStart
      focus-within:before:text-xs
      focus-within:before:-translate-x-full
      focus-within:before:translate-y-[35%]
      hover:before:absolute
      hover:before:left-0
      hover:before:content-['>']
      hover:before:font-pressStart
      hover:before:text-xs
      hover:before:-translate-x-full
      hover:before:translate-y-[35%]
      "
    >
      {children}
    </span>
  );
} */
