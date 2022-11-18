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
    <BoundedContainer>
      <Comp {...props}>
        <BoundedStyled size={size}>
          {children}
        </BoundedStyled>
      </Comp>
    </BoundedContainer>
  )
}

const BoundedContainer = styled.span`
  & > * {
    padding-left: 1rem;
    padding-right: 1rem; 
    padding-top: 2rem;
    padding-bottom: 2rem; 

    @media (min-width: 768px) { 
      padding-left: 1.5rem;
      padding-right: 1.5rem; 
      padding-top: 2.5rem;
      padding-bottom: 2.5rem; 
    }
    
    @media (min-width: 1024px) { 
      padding-top: 3rem;
      padding-bottom: 3rem; 
    }
  }
`

interface BoundedStyledProps {
  size: 'small' | 'base' | 'wide' | 'widest'
}

const BoundedStyled = styled.div<BoundedStyledProps>`
  width: 100%; 
  margin: 0 auto;
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
