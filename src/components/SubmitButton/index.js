import React from 'react'
import { Button } from './styles'
import { RiLoader2Line } from 'react-icons/ri'

export const SubmitButton = ({ children, onClick, disabled }) => {
  return (
    <Button onClick={onClick}>
      {
        disabled
          ? <RiLoader2Line />
          : children
      }
    </Button>
  )
}
