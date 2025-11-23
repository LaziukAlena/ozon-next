'use client'
import { Product } from "../models/product.models";
import { useCart } from "../providers/CartProvider";

export default function AddToCartButton({ product }: { product: Product }) {
    const { addCartItem } = useCart()
    return (
        <button className="btn btn-primary" onClick={() => addCartItem(product)}> В корзину</button >
    )
}