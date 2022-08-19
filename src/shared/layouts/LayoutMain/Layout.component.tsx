// Modules
import { FC, useState } from 'react'

// Components
import { SideBar } from './SideBar/SideBar.container'
import { Header } from './Header/Header.container'

// Utils, Styles and Types
import { Container, Main, ChildrenBox } from './Layout.styled'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { Router } from 'next/router'

// Library
library.add(fas)

export const LayoutMain: FC<{router: Router, children?: any}> = ({ children, router }) => {

    // Declaración de variables y estados
    const [showAside, setShowAside] = useState(true)

    return (
        <Container>
            <Main>
                <SideBar
                    showAside={showAside}
                    handleClick={() => setShowAside(!showAside)}
                />
               <Header
                    handleClick={() => setShowAside(!showAside)}
                    showAside={showAside}
                />
                <ChildrenBox>
                    {children}
                </ChildrenBox>
            </Main>
        </Container>
    )
}