type ButtonProps = {
  children: string;
  type: "button" | "submit";
};
export default function ModalButton({
  children = "button",
  type = "button",
}: ButtonProps) {
  return (
    <button
      className="block cursor-glovePointer appearance-none border-none bg-transparent font-pokemon py-[0.2rem] px-2 w-full text-left focus-visible:outline-none relative"
      type={type}
    >
      {children.toUpperCase()}
    </button>
  );
}
