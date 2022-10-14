import { ButtonPrimaryProps } from "./types";
import { Button } from "./styles";

export function ButtonPrimary({ children, className }: ButtonPrimaryProps) {
  return <Button className={className}>{children}</Button>;
}
