import React from "react";
export interface ButtonPrimaryProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  tamanho?: string;
  onClick?: (e?: unknown) => void;
}
