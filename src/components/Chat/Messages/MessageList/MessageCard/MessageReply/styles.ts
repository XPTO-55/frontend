import styled from 'styled-components'

export const MessageReplyContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
gap: 1rem;
align-items: center;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 7px;
padding: 1rem 0.5rem 0.5rem;
`

export const MessageReply = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
gap: 4px;
align-items: flex-start;
`

export const SenderName = styled.div`
font-size: 1rem;
font-weight: 600;
line-height: 19.5px;
color: #121212;
`

export const MessageText = styled.div`
font-size: 0.75rem;
font-weight: 600;
line-height: 12.19px;
color: #A7A7A7;
`

export const ContainerProfileImage = styled.div`
height: 48px;
width: 48px;
object-fit: cover;
overflow: hidden;
border-radius: 50%;

img {
  width: 100%;
  height: 100%;
}
`
