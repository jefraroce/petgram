import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { GlobalStyles } from './styles/GlobalStyles'
import { ListOfPhotoCards } from './components/ListOfPhotoCards'
import { Logo } from './components/Logo'

export default () => (
  <div>
    <GlobalStyles />
    <Logo />
    <ListOfCategories />
    <ListOfPhotoCards />
  </div>
)
