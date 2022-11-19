import styled from 'styled-components'

export const PageContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  overflow: hidden;
`

export const Container = styled.div`
  height: 100%;
  width: calc(100% - 4rem);
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  padding: 0 2rem;
`

export const ContainerContent = styled.div`
  width: 100%;
  height: 480px;
  overflow: auto;
  padding: 0 4rem;
`

export const Svg = styled.svg`
  position: fixed;
  bottom: 0;
  z-index: -1;
`
