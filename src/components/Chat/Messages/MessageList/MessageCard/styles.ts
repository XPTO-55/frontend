import styled, { keyframes } from 'styled-components'
import * as Collapsible from '@radix-ui/react-collapsible'

const slideDown = keyframes`  
  from {
    height: 0;
  }
  to {
    height: var(--radix-collapsible-content-height);
  }

`

const slideUp = keyframes`  
  from {
    height: var(--radix-collapsible-content-height);
  }
  to {
    height: 0;
  }

`

export const Container = styled(Collapsible.Root)`
  width: 50%;
  padding: 1rem 1rem 0 1rem ;
  background-color: #F6F6F6;
  border-radius: 7px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  &.my-message {
    align-self: flex-end;
    background-color: #50A9E8;

    & > *, h6, span, svg, button {
      color: #f6f6f6
    }
    & > p {
      color: #202020;
    }
  }
`

export const ContainerReplyes = styled.div`
 display: flex;
 flex-direction: row;
 align-items: center;
 justify-content: space-between;
 font-size: 0.75rem;
 font-weight: 600;
 line-height: 12.19px;
 color: #A7A7A7;
`

export const ContentReplyes = styled(Collapsible.Content)`
  overflow: hidden;
  margin-left: .5rem;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  /* &[data-state='open'] {
    animation: ${slideDown} 100ms ease-out;
  }
  &[data-state='closed'] {
    animation: ${slideUp} 100ms ease-out;
  } */

`

export const ButtonActionReplyes = styled(Collapsible.Trigger)`
 outline: none;
 border: none;
 appearance: none;
 cursor: pointer;
 background-color: transparent;
 display: flex;
 flex-direction: row;
 align-items: center;
 gap: 4px;
 justify-content: space-between;
 font-size: 0.75rem;
 font-weight: 600;
 line-height: 12.19px;
 color: #A7A7A7;


`
