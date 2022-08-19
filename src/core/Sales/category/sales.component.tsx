import { SearchBar } from '@shared/common/SearchBar/searchBar.component'
import { useRouter } from 'next/router'
import React, { FC, useState } from 'react'
import { Card, Container, Content, Section, TitleCard } from './sales.styled'
import { nanoid } from 'nanoid';

export const SalesComponent: FC<any> = () => {

//custom state
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


const router = useRouter()
console.log(router)
  return (
    <Container>
      <SearchBar />
      <Content>
       {category?.map((x:any, i:number ) =>  <Card onClick={()=> router.push(`${router?.pathname}/${x?.id}`)} key={`CardContent${i}`}>
            <Section bgColor='#fff' height='75%'>
            </Section>
            <Section>
              <TitleCard>{x?.name}</TitleCard>
            </Section>
        </Card>)}
      </Content>
    </Container>
  )
}
