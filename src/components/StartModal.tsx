import { ReactNode } from "react";
import { Difficulty } from "../declarations";
import { useAppDispatch } from "../redux/hooks";
import { gameActions } from "../redux/gameSlice";

// type Props = {
//   setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
//   setDifficulty: React.Dispatch<React.SetStateAction<Difficulty>>;
// };

export default function StartModal() {
  const dispatch = useAppDispatch();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const difficulty = form.difficulty.value as Difficulty;
    dispatch(gameActions.startNewGame(difficulty));
  }

  return (
    <div className="bg-Backdrop min-h-screen flex items-center justify-center">
      {/*  */}
      <form
        className="bg-white [&_*]:cursor-[inherit] [border-image:url('./pixel_border.png')_42_round] border-[20px] text-DarkText p-3 shadow-2xl"
        onSubmit={(e) => handleSubmit(e)}
      >
        <h2 className="text-center text-base">What would you like to do?</h2>
        {/*  */}
        <FocusHoverWrapper>
          <fieldset className="Radioset appearance-none border-none flex justify-center gap-8 my-4">
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
    </div>
  );
}

type ButtonProps = {
  children: string;
  type: "button" | "submit";
};
function ModalButton({ children = "button", type = "button" }: ButtonProps) {
  return (
    <button
      className="block cursor-glovePointer appearance-none border-none bg-transparent font-pokemon py-[0.2rem] px-2 w-full text-left focus-visible:outline-none relative"
      type={type}
    >
      {children.toUpperCase()}
    </button>
  );
}

function FocusHoverWrapper({ children }: { children: ReactNode }) {
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
}
