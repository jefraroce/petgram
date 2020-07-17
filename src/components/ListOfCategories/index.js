import React, { useEffect, useState } from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'

function useCategoriesData () {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)

  // Se debe pasar un array vacio como segundo parametro
  // para evitar que useEffect se ejecute infinitamente
  useEffect(() => {
    setLoading(true)
    window.fetch('https://petgram-server-delta.vercel.app/categories')
      .then(res => res.json())
      .then(categories => {
        setCategories(categories)
        setLoading(false)
      })
      .catch(error => {
        console.error('Error loading categories ', error)
        setLoading(false)
      })
  }, [])

  return { categories, loading }
}

const ListOfCategoriesComponent = () => {
  const { categories, loading } = useCategoriesData()
  const [showFixed, setShowFixed] = useState(false)

  useEffect(() => {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)

    // Nos aseguramos de limpiar el evento cuando se vuelva a renderizar
    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed) => {
    return (
      <List fixed={fixed}>
        {
          categories.map((category, index) => <Item key={category.id}><Category {...category} path={`/pet/${category.id}`} /></Item>)
        }
      </List>
    )
  }

  if (loading) {
    return <h1>Cargando...</h1>
  }

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}

export const ListOfCategories = React.memo(ListOfCategoriesComponent)
