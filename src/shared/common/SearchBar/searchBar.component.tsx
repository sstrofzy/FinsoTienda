import React from 'react'
import { BoxInput, Container, Icon, Input } from './searchBar.styled'

export const SearchBar = () => {
  return (
    <Container>
        <BoxInput>
            <Input placeholder='Buscar Producto' />
            <Icon icon='search' />
        </BoxInput>
    </Container>
  )
}
