import { SearchBar } from '@shared/common/SearchBar/searchBar.component'
import React, { FC, useState } from 'react'
import { Card, Container, Content, ContentCard, IconButtons, Section, SectionButtons, TitleCard, WrapperButtons } from './productsSale.styled'
import { nanoid } from 'nanoid';
import numeral from 'numeral'

export const ProductsSaleComponent: FC<any> = () => {

  //custom state
  const [category] = useState([
    {
      id: nanoid(8),
      name:'Arroz Roa 1000g',
      price: 15155,
      path: '/products/1.png'
    },
    {
      id: nanoid(8),
      name:'Coca Cola 250ml',
      price: 152355,
      path: '/products/2.png'
    },
    {
      id: nanoid(8),
      name:'Atún Van Camp 180g',
      price: 15235,
      path: '/products/3.png'
    },
    {
      id: nanoid(8),
      name:'Maíz tostado la especial 40g',
      price: 155235,
      path: '/products/4.png'
    },
  ])

  return (
    <Container>
      <SearchBar />
      <Content>
       {category?.map((x:any, i:number ) => <ContentCard key={`CardProducts${i}`}>
        <Card key={`CardProducts${i}`}>
              <Section bgColor='#fff' height='75%'> 
              <img src={x?.path} alt='x'/>
              </Section>
              <Section bgColor='#fff'>
                <TitleCard>{x?.name}</TitleCard>
                <TitleCard>{numeral(x?.price).format('0,0')}</TitleCard>
              </Section>
        </Card>
        <WrapperButtons>
          <SectionButtons>
            <IconButtons icon='minus' />
          </SectionButtons>
          <SectionButtons cursor='default' bgColor='#fff'> 0 </SectionButtons>
          <SectionButtons>
            <IconButtons icon='plus' />
          </SectionButtons>
        </WrapperButtons>
        </ContentCard>
        )}
      </Content>
    </Container>
  )
}
