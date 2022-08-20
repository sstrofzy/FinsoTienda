import { FC } from 'react'
import { Border, Header, Menu, TitlePage } from './Header.styled'

export const HeaderComponent: FC<any> = ({handleClick, active}) => {

    return (
        <Header active={active}>
            <Menu>
               <TitlePage>Dashboard</TitlePage>
               <Border />
            </Menu>
        </Header>
    )
}