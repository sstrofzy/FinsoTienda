import { FC } from 'react'
import { Border, Header, Menu, TitlePage } from './Header.styled'

export const HeaderComponent: FC<any> = ({handleClick}) => {

    return (
        <Header>
            <Menu>
               <TitlePage>Dashboard</TitlePage>
               <Border />
            </Menu>
        </Header>
    )
}