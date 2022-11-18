import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const ImageContainer = styled.div`
  width: 48px;
  height: 48px;
  object-fit: cover;
`

export const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`

export const ForumName = styled.h6`
  font-size: 1rem;
  font-weight: 600;
  line-height: 20px;
`

export const LatestMessage = styled.p`
  font-size: 0.625rem;
  font-weight: 600;
  color: #A7A7A7;
`
