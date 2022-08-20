import { FC } from 'react'
import { ContainerAside, TopSection, Icon, NavLink as NavigationLink, TextNav, Section, SectionImg, ImgProfile, Div, ContentLogo, Logo, SectionBottom, ContentOptions } from './SideBar.styled'
import Link from 'next/link'
import { TSideBarV } from './SideBar'
import { getModulesRoutes } from '@services/route'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/router'
import { CustomButton } from '@shared/common/Button'

export const SideBarComponent: FC<TSideBarV> = ({ showAside }: TSideBarV) => {
    //custom state
    const router = useRouter()
    
    //call to route
    const ModuleRoutes = getModulesRoutes()

    console.log(router.pathname.split('/')[1])

    return (
        <ContainerAside show={showAside}>
            <TopSection>
                <ContentLogo>
                    <Logo src='/logo/large.png' alt='logo' />
                </ContentLogo>
            </TopSection>
            <Section>
                <SectionImg>
                    <Div><FontAwesomeIcon icon='pencil' color='#fff'/></Div>
                    <ImgProfile src='/aside/logo.png' alt='img'/>
                </SectionImg>
                <ContentOptions>
                    {ModuleRoutes.map((route: any, i:number) => { 
                       const isActive = router.pathname.split('/')[1] === route?.path.split('/')[1]
                       return( 
                            <Link key={`routes${i}`} href={route.path} passHref>
                                <a style={{ textDecoration: 'none', width: '100%' }}>
                                    <NavigationLink isActive={isActive} show={showAside}>
                                        { route && <Icon isActive={isActive} icon={route?.icon} size="xs"/>}
                                        <TextNav isActive={isActive} showAside={showAside}>
                                            {route?.name}
                                        </TextNav>
                                    </NavigationLink>
                                </a>
                            </Link>
                    )}
                    )}
                </ContentOptions>
                <SectionBottom>
                    <CustomButton 
                        TextButton='CERRAR CAJA'
                    />
                    <CustomButton 
                        onClick={()=> router?.push('/')}
                        TextButton='SALIR'
                    />
                </SectionBottom>
            </Section>
           
        </ContainerAside>
    )
}