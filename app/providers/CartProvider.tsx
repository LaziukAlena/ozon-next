'use client'
import { createContext, ReactNode, useContext, useState } from "react";
import { CartContextType } from "../models/cart-context.model";
import { CartItem } from "../models/cart-item.model";
import { Product } from "../models/product.models";

const CartContext = createContext<CartContextType | undefined>(undefined)

export const useCart = () => {
    const context = useContext(CartContext)

    if (!context) {
        throw new Error('Оберните в CartProvider')
    }

    return context
}

export default function CartProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [cartItems, setCartItems] = useState<CartItem[]>([])

    const addCartItem = (product: Product) => {
        setCartItems((prev) => {
            const findProduct = prev.find(p => p.id === product.id)

            if (findProduct) {
                return prev.map(p => {
                    if (p.id === product.id) {
                        return { ...p, count: p.count + 1 }
                    } else {
                        return p
                    }
                })
            } else {
                return [...prev, { ...product, count: 1 }]
            }
        })
    }

    const deleteCartItem = (product: Product) => {
        setCartItems((prev) => {
            const findProduct = prev.find(p => p.id === product.id) // Используем prev вместо cartItems

            if (findProduct) {
                if (findProduct.count > 1) {
                    // Уменьшаем количество на 1
                    return prev.map(p => {
                        if (p.id === product.id) {
                            return { ...p, count: p.count - 1 } // Исправлено: -1 вместо + l1
                        } else {
                            return p
                        }
                    })
                } else {
                    // Удаляем товар если count = 1
                    return prev.filter(p => p.id !== product.id)
                }
            } else {
                return prev
            }
        })
    }

    return (
        <CartContext.Provider value={{ isOpen, cartItems, setIsOpen, addCartItem, deleteCartItem }}>
            {children}
        </CartContext.Provider>
    )
}