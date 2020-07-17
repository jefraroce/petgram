import React, { useContext } from 'react'
import { Context } from '../../Context'
import { Button } from './styles'
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md'
import PropTypes from 'prop-types'

const FavButton = ({ liked, likes, onClick }) => {
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

FavButton.propTypes = {
  liked: PropTypes.bool.isRequired,
  likes: PropTypes.number,
  onClick: PropTypes.func
}

export { FavButton }
