import { FC } from 'react'

import { Container } from './styles'
import { TLayoutLogin } from './types'

export const LayoutAuth: FC<TLayoutLogin> = ({ children }: TLayoutLogin) => {
    return ( 
        <Container>
            {children}
        </Container>
    )
}
