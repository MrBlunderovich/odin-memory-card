import { MouseEventHandler } from "react";

type ButtonProps = {
  children: string;
  type?: "button" | "submit";
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
};
export default function ModalButton({
  children = "button",
  type = "button",
  onClick = undefined,
}: ButtonProps) {
  return (
    <button
      className="block cursor-glovePointer appearance-none border-none bg-transparent font-pokemon py-[0.2rem] px-2 w-full text-left focus-visible:outline-none relative"
      type={type}
      onClick={onClick}
    >
      {children.toUpperCase()}
    </button>
  );
}
