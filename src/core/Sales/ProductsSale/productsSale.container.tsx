import { CardProducts } from '@shared/layouts/LayoutMain/CardProducts/cardProducts.container';
import React, { FC, useState } from 'react'
import { ModalsPaymentMethodContainer } from './ModalsPaymentMethod/modalsPaymentMethod.container';
import { ProductsSaleComponent } from './productsSale.component';

export const ProductsSaleContainer: FC<any> = ({sidebars}: any) => {

const [isOpen, setIsOpen] = useState(false)
console.log(isOpen)
  return (
    <>
    <ModalsPaymentMethodContainer
        onCancel={() => setIsOpen(!isOpen)}
        visible={isOpen}
      />
      <ProductsSaleComponent />
      <CardProducts
        handleOpenIsModal={() => setIsOpen(!isOpen)}
        showAside={sidebars}
      />
      
    </>
  )
}
