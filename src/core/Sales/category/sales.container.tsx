import React, { useState } from 'react'
import { SalesComponent } from './sales.component'
import { nanoid } from 'nanoid';

export const SalesContainer = () => {

  const [category] = useState([
    {
      id: nanoid(8),
      name:'Bebidas y Refresco',
    },
    {
      id: nanoid(8),
      name:'Verduras',
    },
    {
      id: nanoid(8),
      name:'Frutas',
    },
    {
      id: nanoid(8),
      name:'Panadería',
    },
    {
      id: nanoid(8),
      name:'Carnes Frías y Embutidos',
    },
  ])

  return (
    <SalesComponent 
      category={category}
    />
  )
}
