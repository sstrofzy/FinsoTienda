import React, { useState } from 'react'
import { BoxInput, Container, Icon, Input } from './searchBar.styled'

export const SearchBar = ({ onClick }:any) => {
  const [dataForm, setDataForm] = useState<any>({})

  const handleChange = (e:any) => {
    setDataForm({
      ...dataForm,
      [e.target.name]:e.target.value
    })
  }

  return (
    <Container>
        <BoxInput>
            <Input name='search' value={dataForm?.search || ''} onChange={handleChange} placeholder='Buscar Producto' />
            <Icon onClick={()=> onClick(dataForm?.search)} icon='search' />
        </BoxInput>
    </Container>
  )
}
