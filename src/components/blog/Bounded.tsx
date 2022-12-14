import React from 'react'
import { Slot } from '@radix-ui/react-slot'
import styled from 'styled-components'

interface BoundedProps extends React.HTMLAttributes<HTMLDivElement> {
  asChild: boolean
  size?: 'small' | 'base' | 'wide' | 'widest'
}

export const Bounded = ({
  size = 'base',
  className,
  children,
  asChild,
  ...props
}: BoundedProps) => {
  const Comp = asChild ? Slot : 'div'
  return (
    <>
      <BoundedContainer>
        <Comp {...props}>
          <BoundedStyled size={size}>{children}</BoundedStyled>
        </Comp>
      </BoundedContainer>
    </>
  )
}

const BoundedContainer = styled.span`
  & > * {
    padding: 1rem;

    @media (max-width: 768px) {
      padding: 1.5rem;
    }

    @media (max-width: 1024px) {
      padding: 3rem 0;
    }
  }
`

interface BoundedStyledProps {
  size: 'small' | 'base' | 'wide' | 'widest'
}

const BoundedStyled = styled.div<BoundedStyledProps>`
  width: 100%;
  margin: 0 auto;
  text-shadow: 1px #dcdcdc;
  max-width: ${({ size }) => {
    if (size === 'small') {
      return '36rem'
    } else if (size === 'base') {
      return '48rem'
    } else if (size === 'wide') {
      return '56rem'
    } else {
      return '72rem'
    }
  }};
`
