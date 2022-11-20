import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  padding: 0 32px;
  justify-content: space-between;
  align-items: center;
  height: 12vh;
  background-color: #2a8dd2;
  color: #fff;
  padding-left: 180px;
  padding-right: 180px;
`

export const LogoContainer = styled.div`
  height: 48px;
  width: 48;
  border-radius: 0.5rem;
`

export const Logo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.5rem;
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
  background-color: #f6f6f6;
`

export const ImageProfile = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`

interface HamburguerMenuContainerrops {
  open: boolean
}

export const HamburguerMenuContainer = styled.div<HamburguerMenuContainerrops>`
  height: 40px;
  justify-content: center;
  align-items: center;
  padding: 4px;
  cursor: pointer;
`

export const Hamburguer = styled.div<HamburguerMenuContainerrops>`
  width: 40px;
  height: 4px;

  .one,
  .two,
  .three {
    background-color: #fff;
    height: 5px;
    width: 100%;
    margin: 6px auto;

    transition-duration: 0.3s;
  }
  .one {
    transform: ${(props) =>
      props.open ? 'rotate(45deg) translate(7px, 7px);' : null};
  }

  .two {
    opacity: ${(props) => (props.open ? 0 : 1)};
  }

  .three {
    transform: ${(props) =>
      props.open ? 'rotate(-45deg) translate(8px, -9px);' : null};
  }
`

export const HamburguerMenu = styled.nav<HamburguerMenuContainerrops>`
  display: ${(props) => (props.open ? 'block' : 'none')};
  z-index: 10;
  background-color: #2a8dd2;
  position: ${(props) => (props.open ? 'absolute' : 'static')};
  right: 180px;
  top: ${(props) => (props.open ? '12vh' : 0)};
  border-radius: 0 0 7px 7px;

  ul {
    width: 200px;
    overflow: hidden;
    li {
      padding:1rem;
      display: flex;
      justify-content: center;
      &:hover {
        background-color: #0A6CB2;
        &:last-child {
          border-radius: 0 0 7px 7px;
        }
      }

      a {
        transition-duration:0.5s;
        font-size:1rem;
        display: block;
        text-decoration: none;
        color: #f6f6f6;
      }
    }
  }
`
