import styled from 'styled-components';
import { Slot } from '@radix-ui/react-slot';

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  asChild?: boolean;
  size?: "4xl" | "3xl" | "2xl" | "xl";
}
export const Heading = ({
  size = "4xl",
  children,
  asChild = false,
  ...props
}: HeadingProps) => {
  const Comp = asChild ? Slot : 'h1';

  return (
    <HeadingStyled size={size} >
      <Comp {...props} >
        {children}
      </Comp>
    </HeadingStyled>
  );
};

interface HeadingStyledProps {
  size: "4xl" | "3xl" | "2xl" | "xl";
}

const HeadingStyled = styled.div<HeadingStyledProps>`  
  & > * {
    font-weight: 600;
    letter-spacing: -0.05em;

    font-size: ${({ size }) => {
    if (['4xl', '3xl'].includes(size)) {
      return "1.875rem"
    } else if (size === '2xl') {
      return "1.5rem"
    } else {
      return "1.25rem"
    }
  }};

    line-height: ${({ size }) => {
    if (['4xl', '3xl'].includes(size)) {
      return "2.25rem"
    } else if (size === '2xl') {
      return "2rem"
    } else {
      return "1.75rem"
    }
  }};
  
    @media(max-width: 768px) {
      font-size: 2.25rem;
      line-height: 2.5rem;
    }
   
  }
`