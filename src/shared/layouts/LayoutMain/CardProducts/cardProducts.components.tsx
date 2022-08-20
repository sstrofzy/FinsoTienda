import { FC } from 'react'
import { ContainerAside, TopSection, Section, SectionBottom, Product, Input, Div, SpanText, TotalPrice, DivTitle, Icon, SpanCart } from './cardProducts.styled';
import { TSideBarV } from './cardProducts'
import { CustomButton } from '@shared/common/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useCart } from '@shared/context/cart.hooks';
import numeral from 'numeral';

export const CardProductsComponent: FC<any> = ({handleOpenIsModal}) => {

    // Contexts
    const { cartProducts, removeProduct, totalPrice } = useCart()
    
    return (
        <ContainerAside>
               <TopSection>
                    <DivTitle>
                        <Icon icon='shopping-cart' />
                        <SpanCart >Carrito de Compras</SpanCart>
                    </DivTitle>
                    <TotalPrice>
                        <SpanText align='center' fSize='16px'>Total</SpanText>
                        <SpanText weight='900' align='center' fSize='24px'>{numeral(totalPrice).format('$ 0,0')}</SpanText>
                    </TotalPrice>
               </TopSection>
               <Section>
                 {cartProducts?.map((x:any, i:number)=> <Product key={`Product${i}`}>
                        <Div width='80%'>
                            <SpanText>{x?.name}</SpanText>
                            <SpanText><strong>{numeral(x?.price).format('$ 0,0')}</strong> {x?.quantity > 1 && `x${x?.quantity}`}</SpanText>
                        </Div>
                        <Div>
                            <FontAwesomeIcon onClick={() => removeProduct(x)} icon='trash' style={{cursor:'pointer'}} color='#FF5D54' />
                        </Div>
                    </Product>
                    )}
               </Section>
               <SectionBottom>
                    <Input 
                        name='phone'
                        placeholder='Celular'
                    />
                    <CustomButton
                        type='button'
                        onClick={()=> handleOpenIsModal()}
                        disabled={!cartProducts.length}
                        bgColor={!!cartProducts.length ? '#FF5D54' : '#D8D8D8'}
                        TextButton='VENDER'
                    />
               </SectionBottom>
        </ContainerAside>
    )
}