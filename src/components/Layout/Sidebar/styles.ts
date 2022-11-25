import styled from 'styled-components'

export const Container = styled.aside`
  display: flex;
  flex-direction: column;
  height: 86vh;
  justify-content: flex-start;
  padding-top: 1.75rem;
  align-items: center;
  gap: 3rem;
  width: 20vw;
  background-color: #2A8DD2;
`

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  cursor: pointer;

  h3 {
    font-size: 1.25rem;
    line-height: 2rem;
    color: #f6f6f6;
    font-weight: 400;
    text-transform: capitalize;
  }
`

export const ImageProfileContainer = styled.div`
  width: 128px;
  height: 128px;
  object-fit: cover;
  border-radius: 50%;
  background-color: #f6f6f6;
  border: solid 3px #f6f6f6;
`

export const ImageProfile = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`

export const Navigation = styled.nav`
  width: 100%;
  display: flex;
  ul {
    flex: 1;
    color: #f6f6f6;
    line-height: 29.46px;
    font-size: 1.25rem;
    cursor: pointer;

    li {
      display: block;
      text-align: left;
      height: 2rempx;
      padding: .75rem 2rem;
      &:hover {
        background-color: #0A6CB2;
      }

      a {
        transition-duration:0.5s;
        display: block;
        text-decoration: none;
        color: #f6f6f6;
      }
    }
  }
`
