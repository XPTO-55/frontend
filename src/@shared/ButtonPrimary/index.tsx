import { ButtonPrimaryProps } from "./types";
import { Button } from "./styles";

export function ButtonPrimary({
  children,
  className,
  tamanho,
  onClick,
  ...props
}: ButtonPrimaryProps) {
  return (
    <Button {...props} className={className} width={tamanho} onClick={onClick}>
      {children}
    </Button>
  );
}
