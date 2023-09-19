import { ReactNode } from "react";

export default function FocusHoverWrapper({
  children,
}: {
  children: ReactNode;
}) {
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
