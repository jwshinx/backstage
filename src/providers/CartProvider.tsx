// import React, { useState, useEffect, createContext } from 'react'
import React, { useState, createContext } from 'react'
import { addItemToCart, removeItemFromCart, CartItem } from './cart'

export interface CartContextInterface {
  hidden: boolean
  cartItems: Array<CartItem>
  toggleHidden: () => void
  addItem: (item: CartItem) => void
  cartItemsCount: number
  removeItem: (item: CartItem) => void
}

export const CartContext = createContext<CartContextInterface | null>(null)

const CartProvider = ({ children }: { children: any }) => {
  const [hidden, setHidden] = useState(true)
  const toggleHidden = () => {
    setHidden(!hidden)
  }
  const [cartItems, setCartItems] = useState<Array<CartItem>>([])
  const [cartItemsCount, setCartItemsCount] = useState(0)

  const addItem = (item: CartItem) => {
    const updatedCart = addItemToCart(cartItems, item)
    setCartItems(updatedCart)

    let count = 0
    updatedCart.map((item: CartItem) => {
      if (item.quantity) {
        count += item.quantity
      }
    })
    setCartItemsCount(count)
  }

  const removeItem = (item: CartItem) => {
    const updatedCart = removeItemFromCart(cartItems, item)
    setCartItems(updatedCart)

    let count = 0
    updatedCart.map((item: CartItem) => {
      if (item.quantity) {
        count += item.quantity
      }
    })
    setCartItemsCount(count)
  }

  return (
    <CartContext.Provider
      value={{
        hidden,
        toggleHidden,
        cartItems,
        addItem,
        cartItemsCount,
        removeItem,
        // clearItemFromCart,
      }}
    >
      {children}{' '}
    </CartContext.Provider>
  )
}

export default CartProvider
