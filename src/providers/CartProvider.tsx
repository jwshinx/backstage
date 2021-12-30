// import React, { useState, useEffect, createContext } from 'react'
import React, { useState, createContext } from 'react'

// import { addItemToCart, removeItemFromCart } from './cart'
import { addItemToCart } from './cart'

interface CartItem {
  id: number
  imageUrl: string
  name: string
  price: number
  quantity?: number
}

/* eslint-disable */
export const CartContext = createContext({
  hidden: true,
  cartItems: [],
  cartItemsCount: 0,
  toggleHidden: () => {},
  addItem: () => {},
  removeItem: () => {},
  clearItemFromCart: () => {},
})

const CartProvider = ({ children }: { children: any }) => {
  const [hidden, setHidden] = useState(true)
  const toggleHidden = () => {
    console.log(`+++> CartProvider toggleHidden clicked!`)
    setHidden(!hidden)
  }
  const [cartItems, setCartItems] = useState([])
  const [cartItemsCount, setCartItemsCount] = useState(0)

  const addItem = (item: CartItem) =>
    // @ts-ignore
    setCartItems(addItemToCart(cartItems, item))

  return (
    <CartContext.Provider
      value={{
        hidden,
        toggleHidden,
        cartItems,
        // @ts-ignore
        addItem,
        cartItemsCount,
      }}
    >
      {children}{' '}
    </CartContext.Provider>
  )
}

export default CartProvider
