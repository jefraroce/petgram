import styled from 'styled-components'

const Button = styled.button`
  padding-top: 8px;
  display: flex;
  align-items: center;
  cursor: pointer;
  & svg {
    margin-right: 4px;
  }
  &:hover {
    color: steelblue;
  }
`

export { Button }
