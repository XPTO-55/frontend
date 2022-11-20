import styled from 'styled-components'
import * as Collapsible from '@radix-ui/react-collapsible'

export const Container = styled(Collapsible.Root)`
  width: 50%;
  padding: 1rem 1rem 1rem;
  background-color: #F6F6F6;
  border-radius: 7px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const ContainerReplyes = styled.div`
 display: flex;
 flex-direction: row;
 align-items: center;
 justify-content: space-between;
 font-size: 0.75rem;
 font-weight: 600;
 line-height: 12.19px;
 color: #A7A7A7;
`

export const ContentReplyes = styled(Collapsible.Content)`
  margin-left: .5rem;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const ButtonActionReplyes = styled(Collapsible.Trigger)`
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
