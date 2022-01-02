export interface CartItem {
  id: number
  imageUrl: string
  name: string
  price: number
  quantity?: number
}

export const clearItemFromCart = (
  cartItems: CartItem[],
  cartItemToRemove: CartItem
) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  )

  if (existingCartItem) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id)
  }

  return cartItems
}

export const addQuantityToCart = (
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

export const removeQuantityFromCart = (
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

export const calculateCartItemsCount = (cartItems: CartItem[]) => {
  return cartItems.reduce((acc, current) => {
    if (current.quantity) {
      return acc + current.quantity
    }
    return acc
  }, 0)
}

export const calculateTotalSpending = (cartItems: CartItem[]) => {
  return cartItems.reduce((acc, current) => {
    if (current.quantity && current.price) {
      return acc + current.quantity * current.price
    }
    return acc
  }, 0)
}
