import React from 'react'

interface CartContextInterface {
  cartItems: Array<number>
  clickHandler: (value: number) => void
}

// const CartContext = React.createContext<CartContextInterface | null>(null)

const CartContext = React.createContext<CartContextInterface | null>({
  cartItems: [9],
  clickHandler: (val) => {
    console.log(`+++> CartContext val:`, val)
  },
})

// const CartContext: CartContextInterface = React.createContext({
//   cartItems: [9],
//   // onAddToCartClickHandler: any,
//   onAddToCartClickHandler: (value: number) => {
//     console.log('xxx', value)
//     // setCartItems([22])
//   },
// })

export default CartContext
