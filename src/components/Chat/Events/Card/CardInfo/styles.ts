import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.5rem;
`

export const ImageContainer = styled.div`
  width: 32px;
  height: 32px;
  object-fit: cover;
`

export const ParticipantsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
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

export const EventName = styled.h6`
  font-size: 1rem;
  font-weight: 600;
  line-height: 20px;
`

export const EventTime = styled.p`
  font-size: 0.75rem;
  font-weight: 600;
  color: #A7A7A7;
`

