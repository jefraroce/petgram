import React from 'react'
import { Form, Input, Title, Error } from './styles'
import { useInputValue } from '../../hooks/useInputValue'
import { SubmitButton } from '../SubmitButton'

export const UserForm = ({ error, disabled, onSubmit, title }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = (e) => {
    e.preventDefault()

    onSubmit({
      email: email.value,
      password: password.value
    })
  }

  return (
    <>
      <Form disabled={disabled} onSubmit={handleSubmit}>
        <Title>{title}</Title>

        <Input disabled={disabled} type='email' placeholder='Email' {...email} required='required' />
        <Input disabled={disabled} type='password' placeholder='Password' {...password} required='required' />
        <SubmitButton disabled={disabled}>
          {title}
        </SubmitButton>
      </Form>

      {error && <Error>{error}</Error>}
    </>
  )
}
