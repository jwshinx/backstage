// import React, { useState, useEffect, createContext } from 'react'
import React, { useState, createContext } from 'react'
import { addItemToCart, removeItemFromCart, CartItem } from './cart'

export interface CartContextInterface {
  hidden: boolean
  cartItems: Array<CartItem>
  toggleHidden: () => void
  addItem: (item: CartItem) => void
  // cartItemsCount: number
  removeItem: (item: CartItem) => void
}

export const CartContext = createContext<CartContextInterface | null>(null)

const CartProvider = ({ children }: { children: any }) => {
  const [hidden, setHidden] = useState(true)
  const toggleHidden = () => {
    setHidden(!hidden)
  }
  const [cartItems, setCartItems] = useState<Array<CartItem>>([])
  // const [cartItemsCount, setCartItemsCount] = useState(0)

  const addItem = (item: CartItem) => {
    setCartItems(addItemToCart(cartItems, item))
  }

  const removeItem = (item: CartItem) => {
    console.log(`+++> @joel CartProvider removeItem:`, item)
    setCartItems(removeItemFromCart(cartItems, item))
  }

  return (
    <CartContext.Provider
      value={{
        hidden,
        toggleHidden,
        cartItems,
        addItem,
        // cartItemsCount,
        removeItem,
        // clearItemFromCart,
      }}
    >
      {children}{' '}
    </CartContext.Provider>
  )
}

export default CartProvider
