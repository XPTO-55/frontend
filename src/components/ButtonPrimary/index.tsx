import { ButtonPrimaryProps } from "./types";
import { Button } from "./styles";

export function ButtonPrimary({
  children,
  className,
  tamanho,
  onClick,
}: ButtonPrimaryProps) {
  return (
    <Button className={className} width={tamanho} onClick={onClick}>
      {children}
    </Button>
  );
}
