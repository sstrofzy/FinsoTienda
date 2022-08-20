import React, { FC } from 'react'
import { Container } from './styled'

export const CustomButton: FC<any> = ({
    bgColor,
    TextButton,
    type,
    onClick,
    disabled
}: any) => {
  return (
    <Container disabled={disabled} onClick={()=> onClick()} type={type} bgColor={bgColor}>
        {TextButton}
    </Container>
  )
}
