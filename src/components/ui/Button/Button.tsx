import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type TButtonProps = {
  children: ReactNode;
  className?: string;
};
const Button = ({ children, className }: TButtonProps) => {
  return (
    <button
      className={cn(
        "bg-gradient-to-r from-amber-400 to-amber-600 p-4 text-black cursor-pointer hover:opacity-70 transition-opacity duration-300 ease-in-out px-10 py-2",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
