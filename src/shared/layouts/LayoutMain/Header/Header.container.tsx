import { FC } from 'react'
import { HeaderComponent } from './Header.components'

export const Header: FC<any> = ({ handleClick, showAside, active }: any) => (

    <HeaderComponent
        handleClick={handleClick}
        showAside={showAside}
        active={active}
    />
)