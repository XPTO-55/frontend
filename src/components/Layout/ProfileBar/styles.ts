import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  padding: 0 32px;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  background-color: #2A8DD2;
  color: #fff;
`

export const LogoContainer = styled.div`
  height: 56px;
  width: 140;
  border-radius: .5rem;
`

export const Logo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: .5rem;
`

export const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`

export const Username = styled.h6`
  font-size: 1rem;
  font-weight: 600;
  text-transform: capitalize;
`

export const ImageProfileContainer = styled.div`
  width: 56px;
  height: 56px;
  object-fit: cover;
  border-radius: 50%;
`

export const ImageProfile = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`
