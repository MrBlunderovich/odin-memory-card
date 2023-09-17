import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Modal({ children }: Props) {
  return (
    <div className="bg-Backdrop animate-fadein min-h-screen flex items-center justify-center">
      {/*  */}
      <div className="bg-white animate-grow [&_*]:cursor-[inherit] [border-image:url('./pixel_border.png')_42_round] border-[20px] text-DarkText p-3 shadow-2xl">
        {children}
      </div>
    </div>
  );
}
