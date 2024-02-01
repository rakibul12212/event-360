// Button.tsx
import React, { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  // Add any additional props you want to support
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button
      className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
