import React from 'react'
import { Button } from './styles'
import { RiLoader2Line } from 'react-icons/ri'
import PropTypes from 'prop-types'

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

SubmitButton.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired
}
