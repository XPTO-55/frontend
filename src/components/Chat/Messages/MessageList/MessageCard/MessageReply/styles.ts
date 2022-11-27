import styled from 'styled-components'

export const MessageReplyContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
gap: 1rem;
align-items: flex-end;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-left: solid .5px #cdcdcd;
border-radius: 7px;
padding: 1rem;
margin-bottom: 1rem;
`

export const MessageInfo = styled.div`
  display: flex;
flex-direction: row;
gap: 1rem;
justify-content: flex-start;

`

export const MessageReply = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
gap: 1rem;
align-items: flex-start;
`

export const SenderName = styled.div`
font-size: .75rem;
font-weight: 600;
line-height: 19.5px;
color: #A7A7A7;
`

export const MessageText = styled.div`
font-size: 1rem;
font-weight: 600;
line-height: 12.19px;
color: #212121;
`

export const ContainerProfileImage = styled.div`
height: 40px;
width: 40px;
object-fit: cover;
overflow: hidden;
border-radius: 50%;

img {
  width: 100%;
  height: 100%;
}
`

export const Footer = styled.div`
  display: flex;
  width: calc(100% - 1rem);
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: 0 1rem;
`

export const ButtonActionReplyes = styled.button`
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
