// Modules
import { FC, useState } from 'react'

// Styles, Types, Utils and Icons
import { CloseCircleOutlined } from '@ant-design/icons'
import { Modal } from 'antd'
import { ButtonTab, Container, SectionButtons, SubTitle, Title, IconModal } from './modalsPaymentMethod.styled';
import { CustomButton } from '@shared/common/Button'
import { useCart } from '@shared/context/cart.hooks';

export const ModalsPaymentMethodComponent: FC<any> = ({ visible, onCancel }: any) => {
    const [active, setActive] = useState<any>(null)

    // Contexts
    const { cleanProducts } = useCart()

    return (
        <Modal
            centered
            destroyOnClose
            closeIcon={<CloseCircleOutlined style={{ fontSize: 20 }} />}
            footer={false}
            title={false}
            visible={visible}
            width={'30%'}
            onCancel={onCancel}
        >
        <Container>
                <Title>Método de Pago</Title>
                <SubTitle>Elija el metodo de pago de tu cliente</SubTitle>
                <SectionButtons>
                    <ButtonTab active={active === 1} onClick={()=> setActive(1) }>
                        <IconModal active={active === 1} icon='money-bill-alt'/>
                    </ButtonTab>
                    <ButtonTab active={active === 2} onClick={()=> setActive(2)}>
                        <IconModal active={active === 2} icon='wallet'/>
                    </ButtonTab>
                </SectionButtons>
                <CustomButton
                    type='button'
                    onClick={()=> {cleanProducts(); onCancel() }}
                    bgColor={true ? '#FF5D54' : '#D8D8D8'}
                    TextButton='VENDER'
                />
            </Container>
        </Modal>
    )
}