import { FC, useCallback, useEffect, useState } from 'react'
import CartContext from './cart.context'

export const CartProvider: FC<any> = ({ children }) => {
    const [cartProducts, setCartProducts] = useState<any[]>([])

    //Añadir un producto
    const addProduct = useCallback((product?: any) => {
        if (product?.quantity === 0 ){ 
            removeProduct(product)
            return
        }else{
            const isExist = cartProducts.find((x:any) => x?.id === product?.id )
            if (!isExist){
                setCartProducts([...cartProducts, product])
            }else{
                setCartProducts(cartProducts?.map((x:any) => x?.id === product?.id ? product : x))
            }
        }
    }, [cartProducts])

    console.log(cartProducts)
    
    //Eliminar un producto
    const removeProduct = useCallback((product?: any) => {
        setCartProducts(cartProducts.filter((x:any) => x.id !== product?.id))
    }, [cartProducts])
    //Vaciar sell
    
    const cleanProducts = useCallback(() => {
        setCartProducts([])
    }, [cartProducts])

    //Calcular la totalidad
    const getTotalPrice = useCallback(() => {
        return cartProducts.reduce((acc, x) => acc + ((x?.price * x?.quantity ) || 0), 0)
    }, [cartProducts])

    return (
        <CartContext.Provider value={{
            cartProducts,
            addProduct,
            removeProduct,
            cleanProducts,
            totalPrice: getTotalPrice(),
        }}>
            {children}
        </CartContext.Provider>
    )
}
