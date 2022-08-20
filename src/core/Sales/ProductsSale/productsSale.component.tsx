import { SearchBar } from '@shared/common/SearchBar/searchBar.component'
import React, { FC, useState } from 'react'
import { Container, Content } from './productsSale.styled'
import { nanoid } from 'nanoid';
import { useCart } from '@shared/context/cart.hooks';
import { ProductCard } from '@shared/common/ProductCard';


const PRODUCTS = [
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
]

export const ProductsSaleComponent: FC<any> = () => {

  // Contexts
  const { addProduct } = useCart()
  
const [products, setProducts] = useState(PRODUCTS)

const searchItems = (query: string) => {
  const NewArray =  PRODUCTS.filter(x => x.name.toLowerCase().indexOf(query.toLowerCase()) > -1)
  setProducts(NewArray)
}

  return (
    <Container>
      <SearchBar onClick={searchItems}/>
      <Content>
        {products.map((x:any, i:any) => <ProductCard onChange={(quantity:any)=>addProduct({...x, quantity}) } key={`category${i}`} data={x} /> )}
      </Content>
    </Container>
  )
}
