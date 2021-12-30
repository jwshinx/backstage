// import { CartItem } from '../../../src/actions/index';

interface CartItem {
  id: number
  imageUrl: string
  name: string
  price: number
  quantity?: number
}

export const addItemToCart = (
  cartItems: CartItem[],
  cartItemToAdd: CartItem
) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  )

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity! + 1 }
        : cartItem
    )
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}

export const removeItemFromCart = (
  cartItems: CartItem[],
  cartItemToRemove: CartItem
) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  )

  if (existingCartItem!.quantity! === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id)
  }
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity! - 1 }
      : cartItem
  )
}
