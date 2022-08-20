import { FC } from 'react'
import { CardProductsComponent } from './cardProducts.components'

export const CardProducts: FC<any> = ({ showAside, handleOpenIsModal } :any) => {

    return (
        <CardProductsComponent
            showAside={showAside}
            handleOpenIsModal={handleOpenIsModal}
        />
    )
}