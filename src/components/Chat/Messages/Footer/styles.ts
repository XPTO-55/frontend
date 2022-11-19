import styled from 'styled-components'

export const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
  background-color: #2A8DD2;
  padding: 1rem;
  height: 5%;
  color: #121212;
`

export const MessageInput = styled.input`
  flex: 1;
  height: 32px;
  background-color: #F6F6F6;
  border: solid 1px transparent;
  padding: 0 16px;
  border-radius: 5px;
  font-size: 1rem;
  white-space: pre-wrap;
  word-break: break-word;
  line-height: 1.34;
  user-select: text;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.25);
`

export const ActionContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  transition: all .5s;
`

export const ActionButton = styled.button`
  appearance: none;
  background-color: #FAFBFC;
  border: 1px solid rgba(27, 31, 35, 0.15);
  border-radius: 50%;
  filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.25));
  /* box-shadow: rgba(27, 31, 35, 0.04) 0 1px 0, rgba(255, 255, 255, 0.25) 0 1px 0 inset; */
  box-sizing: border-box;
  color: #24292E;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: -apple-system, system-ui, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  list-style: none;
  /* padding: 6px 16px; */
  position: relative;
  transition: background-color 0.2s cubic-bezier(0.3, 0, 0.5, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  white-space: nowrap;
  word-wrap: break-word;
  height: 32px;
  width: 32px;

&:hover {
  background-color: #F3F4F6;
  text-decoration: none;
  transition-duration: 0.1s;


&:disabled {
  background-color: #FAFBFC;
  border-color: rgba(27, 31, 35, 0.15);
  color: #959DA5;
  cursor: default;
}

&:active {
  background-color: #EDEFF2;
  box-shadow: rgba(225, 228, 232, 0.2) 0 1px 0 inset;
  transition: none 0s;
}

&:focus {
  outline: 1px transparent;
}

&:before {
  display: none;
}

&:-webkit-details-marker {
  display: none;
}

  /* border-radius: 50%;
  border: none;
  outline: none;
  background-color: #f6f6f6;
  color: #212121;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  width: 32px;
  box-shadow: 0 0 0 1px #121212;
  cursor: pointer;
  

  &:hover {
    transform: translateY(-1px);
  } */
}
`
