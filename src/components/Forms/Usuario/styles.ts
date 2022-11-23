import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'
import * as Tabs from '@radix-ui/react-tabs'

export const Container = styled.div`
  width: 550px;
  height: 700px;
  background-color: #d9d9d9;
  border-radius: 7px;
  overflow: hidden;
  cl
  span {
    width: 100%;
    height: 50px;
    background-color: red;
  }
`

export const Form = styled.form`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 70px;
  gap: 16px;
`

export const TopWave = styled.div`
  width: 100%;
  height: 40px;
  background-color: #2a8dd2;
  display: flex;
  justify-content: center;
  padding: 1rem 0;

  div {
    z-index: 11;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
  }

  div p {
    font-size: 24px;
    font-weight: 400;
    word-spacing: 5%;
    color: white;
    z-index: 10;
  }

  div img {
    width: 36px;
    height: 36px;
    border-radius: 10px;
    z-index: 10;
  }
`

export const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 0 .5rem;

  p {
    color: #303030;
  }
`

export const Overlay = styled(Dialog.Overlay)`
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  inset: 0;
`

export const Content = styled(Dialog.Content)`
  background-color: #d9d9d9;
  border-radius: 7px;
  overflow: hidden;
  position: fixed;
  display: flex;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 60vw;
  max-width: 450px;
  max-height: 550px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
export const Footer = styled.footer`
  width: 100%;
  height: 70px;
  padding: 0.5rem0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  bottom: 0;
  background-color: #d9d9d9;
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
  padding: 0 1.75rem;
  height: 46px;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  line-height: 1;
  user-select: none;
  color: #f6f6f6;
  background-color: #B0B0B0;
  transition: all .5s;
  &:first-child { 
    border-radius: 4px 0 0 4px;
  };
  &:last-child { 
    border-radius: 0 4px 4px 0;
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
  height: 46px;
`

export const TabContainer = styled(Tabs.Root)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 60%;
  gap: 1rem;
  overflow-y: scroll;
  padding-top: 300px;
`
