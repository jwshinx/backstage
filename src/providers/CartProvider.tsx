import React, { useState, useEffect, createContext } from 'react'
import {
  addQuantityToCart,
  removeQuantityFromCart,
  clearItemFromCart,
  CartItem,
  calculateCartItemsCount,
  calculateTotalSpending,
} from './cart'
import { CartContextInterface } from '../types/cart-context-interface'

export const CartContext = createContext<CartContextInterface | null>(null)

const CartProvider = ({ children }: { children: any }) => {
  const [hidden, setHidden] = useState(true)
  const toggleHidden = () => {
    setHidden(!hidden)
  }
  const [cartItems, setCartItems] = useState<Array<CartItem>>([])
  const [cartItemsCount, setCartItemsCount] = useState(0)
  const [totalSpending, setTotalSpending] = useState(0)

  useEffect(() => {
    setCartItemsCount(calculateCartItemsCount(cartItems))
    setTotalSpending(calculateTotalSpending(cartItems))
  }, [cartItems])

  const addQuantity = (item: CartItem) => {
    const updatedCart = addQuantityToCart(cartItems, item)
    setCartItems(updatedCart)
  }

  const removeQuantity = (item: CartItem) => {
    const updatedCart = removeQuantityFromCart(cartItems, item)
    setCartItems(updatedCart)
  }

  const clearItem = (item: CartItem) => {
    const updatedCart = clearItemFromCart(cartItems, item)
    setCartItems(updatedCart)
  }

  return (
    <CartContext.Provider
      value={{
        hidden,
        toggleHidden,
        cartItems,
        addQuantity,
        cartItemsCount,
        removeQuantity,
        clearItem,
        totalSpending,
      }}
    >
      {children}{' '}
    </CartContext.Provider>
  )
}

export default CartProvider
