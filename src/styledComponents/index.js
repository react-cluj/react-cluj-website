import styled from 'styled-components'

export const CenteredContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${props=> props.padding || 1}rem;
  flex-direction: ${props => props.flexDirection || 'column'};
`

export const CenteredContentV = styled.div`
  display: flex;
  justify-content: center;
  padding: ${props=> props.padding || 1}rem;
`

export const CenteredContentH = styled.div`
  display: flex;
  align-items: center;
  padding: ${props=> props.padding || 1}rem;
`
