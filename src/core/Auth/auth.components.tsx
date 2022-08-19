// Modules
import { FC } from 'react'

// Utils, Styles and Types
import { Container, SectionLeft, SectionRight, Body, Logo, BoxContent, SpanHeader, LogoInfo, PersonInfo, ContentImg } from './auth.styled';

export const AuthComponent: FC<any>= ({ children }: any) => {

    return (
        <Container>
            <SectionLeft>
                <LogoInfo src='/auth/cloud.png' alt='logo' />
                <PersonInfo src='/auth/personLogo.png' alt='logo' />
            </SectionLeft>
            <SectionRight>
                <ContentImg>
                    <BoxContent>
                        <Logo src='/logo/large.png' alt='logo' />
                        <SpanHeader fWeight='600'>Bienvenido a Tu Tienda en Casa</SpanHeader>
                        <SpanHeader fSize='16px'>Ahorro cerca de ti</SpanHeader>
                        <Body>
                            {children}
                        </Body>
                    </BoxContent>
                </ContentImg>
            </SectionRight>
        </Container>
    )
}