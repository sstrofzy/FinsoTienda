// Modules
import { FC } from 'react'

// Components
import { ModalsPaymentMethodComponent } from './modalsPaymentMethod.component'

// Services
import { useRouter } from 'next/router'

export const ModalsPaymentMethodContainer: FC<any> = ({
    visible,
    onCancel,
    onSubmit,
    onResponse,
    initialValues
}: any) => {
    const route = useRouter();
    return (
        <ModalsPaymentMethodComponent
            visible={visible}
            onCancel={onCancel}
            onResponse={onResponse}
            initialValues={initialValues}
        />
    )
}