import styled from 'styled-components'
import { IStatus } from '../../../../services/events.service'

interface ContainerProps {
  status: IStatus
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: row;
  gap: 4px;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  background-color: #F6F6F6;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  border-left: 5px solid ${props => props.status ? IStatus[props.status] : '#121212'};
`

export const Join = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #A7A7A7;
  font-weight: 600;
`
