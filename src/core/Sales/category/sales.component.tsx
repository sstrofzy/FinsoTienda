import { SearchBar } from '@shared/common/SearchBar/searchBar.component'
import { useRouter } from 'next/router'
import React, { FC, useState } from 'react'
import { Card, Container, Content, Section, TitleCard } from './sales.styled'
import { nanoid } from 'nanoid';

const CATEGORY = [
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
]

export const SalesComponent: FC<any> = () => {

  //custom state
  const router = useRouter()
  
  const [category, setCategory] = useState(CATEGORY)

const searchItems = (query: string) => {
  const NewArray =  CATEGORY.filter(x => x.name.toLowerCase().indexOf(query.toLowerCase()) > -1)
  setCategory(NewArray)
}

  return (
    <Container>
      <SearchBar onClick={searchItems} />
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
