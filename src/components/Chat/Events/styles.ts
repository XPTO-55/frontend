import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  gap: 2rem;
  width: 20vw;
  min-width: 275px;
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  cursor: pointer;

`

export const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 36px;
`

export const SubTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: #9590A0;
  line-height: 32px;
`
