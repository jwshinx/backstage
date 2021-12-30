import React from 'react'

const CartContext = React.createContext({
  color: 'red',
  city: 'florence',
  isLoggedIn: false,
  user: null,
})

export default CartContext
