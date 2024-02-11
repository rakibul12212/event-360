import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type TCheckMarkProps = {
  children: ReactNode;
  className?: string;
};
const CheckMark = ({ children, className }: TCheckMarkProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={cn("w-4 h-4 text-cyan-500 ", className)}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m4.5 12.75 6 6 9-13.5"
      />
      {children}
    </svg>
  );
};

export default CheckMark;
