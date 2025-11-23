import { CartItem } from "./cart-item.model"
import { Product } from "./product.models"

export interface CartContextType {
    isOpen: boolean
    cartItems: CartItem[]

    setIsOpen: (value: boolean) => void
    addCartItem: (product: Product) => void
    deleteCartItem: (product: Product) => void


}

