import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type TContainerProps = {
  children: ReactNode;
  className?: string;
};
const Container = ({ children, className }: TContainerProps) => {
  return (
    <div className={cn("w-full max-w-[1416px] px-[40px] mx-auto", className)}>
      {children}
    </div>
  );
};

export default Container;
