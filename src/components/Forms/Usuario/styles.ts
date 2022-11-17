import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'
import * as Tabs from '@radix-ui/react-tabs'

export const Container = styled.div`
  width: 550px;
  height: 700px;
  background-color: #d9d9d9;
  border-radius: 7px;
  z-index: 20;

  span {
    width: 100%;
    height: 50px;
    background-color: red;
  }
`

export const Form = styled.form`
  height: 390px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: auto;
  gap: 20px;
  padding: 2rem;
`

export const TopWave = styled.div`
  width: 100%;
  height: 40px;
  background-color: #2a8dd2;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;

  div {
    z-index: 11;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: -20px;
    padding-right: 12px;
  }

  div p {
    margin-bottom: -20px;
    font-size: 24px;
    font-weight: 400;
    color: white;
    z-index: 10;
  }

  div img {
    width: 55px;
    height: 55px;
    border-radius: 8px;
    margin-bottom: -20px;
    z-index: 10;
    margin-right: 10px;
  }
`

export const Fieldset = styled.fieldset`
  display: block;
  gap: 0.25rem;
`

export const Overlay = styled(Dialog.Overlay)`
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  inset: 0;
`

export const Content = styled(Dialog.Content)`
  position: fixed;
  background-color: #d9d9d9;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  left: 50%;
  top: 50%;
  // width: 550px;
  // height: 700px;
  // margin-top: -100px; /* Negative half of height. */
  transform: translateX(-50%);
  transform: translateY(-50%);
`
export const Footer = styled.footer`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`
interface ButtonProps {
  color?: string
}

export const ActionButton = styled.button<ButtonProps>`
  width: 140px;
  height: 46px;
  border-bottom-left-radius: 7px;
  border-top-left-radius: 7px;
  background-color: ${(props: ButtonProps) =>
    props.color ? props.color : '#2a8dd2'};
  border: none;
  color: white;
  font-size: 17px;
  cursor: pointer;
  transition: all 0.3s;
`
export const Tab = styled(Tabs.TabsTrigger)`
  all: unset;
  padding: 0 20px;
  height: 46px;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  line-height: 1;
  user-select: none;
  color: #f6f6f6;
  &:first-child { 
    border-top-left-radius: 6px 
  };
  &:last-child { 
    border-top-right-radius: 6px 
  };
  &:hover { 
    background-color: #cdcdcd 
  };
  &[data-state="active"] {
    background-color: #2a8dd2;
  };
  &:focus {
    position: relative; 
  };
`
export const TabList = styled(Tabs.TabsList)`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const TabContainer = styled(Tabs.Root)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
