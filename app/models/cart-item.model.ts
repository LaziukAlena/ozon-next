import { Product } from "./product.models"

export interface CartItem extends Product {
    count: number


}