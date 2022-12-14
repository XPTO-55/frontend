import styled from 'styled-components'

export const MessageInfoContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
gap: 1rem;
align-items: center;
`

export const MessageInfo = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
gap: .5rem;
align-items: flex-start;
`

export const SenderName = styled.div`
font-size: 0.75rem;
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
