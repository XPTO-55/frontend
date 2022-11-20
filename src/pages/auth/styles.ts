import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'

export const PageContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
`

export const Container = styled.div`
  width: 1028px;
  height: 578px;
  border-radius: 7px;
  background-color: #f3f4f5;
  background-image: url("/assets/img/fundoLogin.png");
  background-repeat: no-repeat, repeat-x;
  background-position: top right, center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`

export const ContainerLogin = styled.div`
  width: 60%;
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;

  img{
    margin-bottom: 10px;
  }

  p{
    font-size: 14px;
  }
  span{
    font-size: 13px;
    display: flex;
    gap: 4px;
    align-self: flex-end;
    &[aria-disabled=true]{
      color: red;
    }
  }
`

export const Img = styled.img`
  width: 130px;
  cursor: pointer;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.25rem
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`

export const ModalTrigger = styled(Dialog.Trigger)`
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
`
