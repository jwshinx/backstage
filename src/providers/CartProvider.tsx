import React, { useState, useEffect, createContext } from 'react'
import {
  addQuantityToCart,
  removeQuantityFromCart,
  clearItemFromCart,
  CartItem,
  calculateCartItemsCount,
} from './cart'

export interface CartContextInterface {
  hidden: boolean
  cartItems: Array<CartItem>
  toggleHidden: () => void
  addQuantity: (item: CartItem) => void
  cartItemsCount: number
  totalSpending: number
  removeQuantity: (item: CartItem) => void
  clearItem: (item: CartItem) => void
}

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
  }, [cartItems])

  const addQuantity = (item: CartItem) => {
    const updatedCart = addQuantityToCart(cartItems, item)
    setCartItems(updatedCart)

    // let count = 0
    let spending = 0
    updatedCart.map((item: CartItem) => {
      if (item.quantity) {
        // count += item.quantity
        spending += item.price * item.quantity
      }
    })
    // setCartItemsCount(count)
    setTotalSpending(spending)
  }

  const removeQuantity = (item: CartItem) => {
    const updatedCart = removeQuantityFromCart(cartItems, item)
    setCartItems(updatedCart)

    // let count = 0
    let spending = 0
    updatedCart.map((item: CartItem) => {
      if (item.quantity) {
        // count += item.quantity
        spending += item.price * item.quantity
      }
    })
    // setCartItemsCount(count)
    setTotalSpending(spending)
  }

  const clearItem = (item: CartItem) => {
    const updatedCart = clearItemFromCart(cartItems, item)
    setCartItems(updatedCart)

    // let count = 0
    let spending = 0
    updatedCart.map((item: CartItem) => {
      if (item.quantity) {
        // count += item.quantity
        spending += item.price * item.quantity
      }
    })
    // setCartItemsCount(count)
    setTotalSpending(spending)
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
