import React, { useState } from 'react'
import { AuthComponent } from '../../auth.components'
import { BoxInput, ButtonIn, Container, Icon, Input } from './login.styled'
import { useRouter } from 'next/router';

export const LoginComponent = () => {
	//custom states
	const router = useRouter()
  const [isVisible, setIsVisible ] = useState(false)

  return (
    <AuthComponent>
        <Container>
          <BoxInput>
            <Input placeholder='Nombre de usuario' />
            <Icon icon='at' />
          </BoxInput>
          <BoxInput>
            <Input type={ isVisible ? 'text': 'password'} placeholder='Contraseña' />
            <Icon onClick={()=> setIsVisible(!isVisible)} icon={isVisible ? 'lock-open' : 'lock'} />
          </BoxInput>
          <ButtonIn onClick={()=> router.push('/home')}> INGRESAR </ButtonIn>
        </Container>
    </AuthComponent>
  )
}
