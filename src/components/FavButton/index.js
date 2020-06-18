import React, { useContext } from 'react'
import { Context } from '../../Context'
import { Button } from './styles'
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md'

export const FavButton = ({ liked, likes, onClick }) => {
  const { isAuth } = useContext(Context)
  const Icon = liked ? MdFavorite : MdFavoriteBorder

  const handleClick = (e) => {
    if (isAuth) {
      onClick(e)
    } else {
      window.alert('Debes iniciar sesión primero.')
    }
  }

  return (
    <Button onClick={handleClick}>
      <Icon size='32px' /> {likes} likes!
    </Button>
  )
}
