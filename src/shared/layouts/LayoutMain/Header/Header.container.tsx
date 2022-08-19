import { FC } from 'react'
import { HeaderComponent } from './Header.components'

export const Header: FC<any> = ({ handleClick, showAside }: any) => (

    <HeaderComponent
        handleClick={handleClick}
        showAside={showAside}
    />
)