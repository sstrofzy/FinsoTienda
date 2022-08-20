// Modules
import { FC, useState } from 'react'

// Components
import { SideBar } from './SideBar/SideBar.container'
import { Header } from './Header/Header.container'

// Utils, Styles and Types
import { Container, Main, ChildrenBox } from './Layout.styled'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { CardProducts } from './CardProducts/cardProducts.container'

// Library
library.add(fas)

export const LayoutMain: FC<{sidebars: any, children?: any}> = ({ children, sidebars }) => {

    // Declaración de variables y estados
    const [showAside, setShowAside] = useState(true)

    return (
        <Container>
            <Main >
                <SideBar
                    showAside={showAside}
                    handleClick={() => setShowAside(!showAside)}
                />
               <Header
                    active={sidebars}
                    handleClick={() => setShowAside(!showAside)}
                    showAside={showAside}
                />
                <ChildrenBox active={sidebars}>
                    {children}
                </ChildrenBox>
             
            </Main>
        </Container>
    )
}