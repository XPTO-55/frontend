import styled, { keyframes } from 'styled-components'
import * as Toast from '@radix-ui/react-toast'
import { IToastTypesProps } from './types'

export const Container = styled.span<IToastTypesProps>`
  & > * {
    background-color: #ff7900;
  }
`

const hide = keyframes`  
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`

const slideIn = keyframes`  
  from {
    transform: translateX(calc(100% + var(--viewport-padding)));
  }
  to {
    transform: translateX(0);
  }
`

const swipeOut = keyframes`  
  from {
    transform: translateX(var(--radix-toast-swipe-end-x));
  }
  to {
    transform: translateX(calc(100% + var(--viewport-padding)));
  }
`

export const ToastRoot = styled(Toast.Root)`
  position: fixed;
  min-width: 200px;
  bottom: 32px;
  right: 32px;
  border-radius: 6px;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  padding: 15px;
  display: grid;
  grid-template-areas: 'title action' 'description action';
  grid-template-columns: auto max-content;
  column-gap: 15px;
  align-items: center;
  &[data-type='success'] {
    background-color: #80be80;
    color: '#f6f6f6';
  }
  &[data-type='pending'] {
    background-color: #fd7e14;
    color: '#f6f6f6';
  }
  &[data-type='info'] {
    background-color: #0d6efd;
    color: '#f6f6f6';
  }
  &[data-type='light'] {
    background-color: #f6f6f6;
    color: '#212121';
  }
  &[data-type='error'] {
    background-color: #C8372D;
    color: '#f6f6f6';
  }

  &[data-state='open'] {
  animation: ${slideIn} 200ms cubic-bezier(0.16, 1, 0.3, 1);
  }
  &[data-state='closed'] {
  animation: ${hide} 100ms ease-in;
  }
  &[data-swipe='move'] {
    transform: translateX(var(--radix-toast-swipe-move-x));
  }
  &[data-swipe='cancel'] {
    transform: translateX(0);
    transition: transform 200ms ease-out;
  }
  &[data-swipe='end'] {
    animation: ${swipeOut} 100ms ease-out;
  }
`

export const ToastViewport = styled(Toast.Viewport)`
   --viewport-padding: 25px;
  position: fixed;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  padding: var(--viewport-padding);
  gap: 10px;
  width: 390px;
  max-width: 100vw;
  margin: 0;
  list-style: none;
  z-index: 2147483647;
  outline: none;
`

export const ToastTitle = styled(Toast.Title)`
  grid-area: title;
  margin-bottom: 5px;
  font-weight: 500;
  color: var(--slate12);
  font-size: 15px;
`

export const ToastDescription = styled(Toast.Description)`
  grid-area: description;
  margin: 0;
  color: var(--slate11);
  font-size: 13px;
  line-height: 1.3;
`

export const ToastAction = styled(Toast.Action)`
  grid-area: action;
`

export const ToastClose = styled(Toast.Action)``
