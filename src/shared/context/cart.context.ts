import { createContext } from 'react'

type TCardContext = {
    cartProducts: any[],
    addProduct: (product?: any) => void
    cleanProducts: () => void
    removeProduct: (product?: any) => void
    totalPrice: number,
}

const CartContext = createContext({} as unknown as TCardContext)

export default CartContext
