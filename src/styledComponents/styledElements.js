import { Button, Card } from 'antd'
import styled from 'styled-components'
import { colors } from './variables'

const { primaryColor } = colors

export const StyledButton = styled(Button)`
  background-color: ${primaryColor};
  border-color: ${primaryColor};
`

export const StyledCard = styled(Card)`
  width: ${props => props.width || '300'}px;
  background-color: ${props => props.backgroundColor || '#fff'};
  text-align: ${props => props.textAlign || 'center'};
  padding: ${props => props.padding || 0.5}rem;
  margin: ${props => props.margin || 1}rem;
  border: ${props => props.border || 0};
  border-left: ${props => props.borderLeft || 0};
  border-right: ${props => props.borderRight || 0};
  border-top: ${props => props.borderTop || 0};
  border-bottom: ${props => props.borderBottom || 0};
`

export const StyledH2 = styled.h2`
  color: ${primaryColor};
  padding: ${props => props.padding || '0.5rem'};
  margin: ${props => props.margin || '0.5rem'};
  border: ${props => props.border || 0};
  border-left: ${props => props.borderLeft || 0};
  border-right: ${props => props.borderRight || 0};
  border-top: ${props => props.borderTop || 0};
  border-bottom: ${props => props.borderBottom || 0};
`
