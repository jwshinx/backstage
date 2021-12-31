import React, { useContext } from 'react'
import { CartContext } from '../../providers/CartProvider'
import { CartItem } from '../../providers/cart'
import styles from './CheckoutPageComponent.module.css'

export default function CheckoutPageComponent() {
  const ctx = useContext(CartContext)
  console.log(`+++> @joel CheckoutPageComponent ctx:`, ctx)

  let cartItems: Array<CartItem> = []
  if (ctx && ctx.cartItems !== undefined) {
    cartItems = ctx.cartItems
  }

  console.log(`+++> @joel CheckoutPageComponent cartItems:`, cartItems)

  return (
    <div className={styles['checkout']}>
      <div className={styles['checkout-header']}>
        <div className={styles['header-block']}>
          <span>Product</span>
        </div>
        <div className={styles['header-block']}>
          <span>Description</span>
        </div>
        <div className={styles['header-block']}>
          <span>Quantity</span>
        </div>
        <div className={styles['header-block']}>
          <span>Price</span>
        </div>
        <div className={styles['header-block']}>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((item: CartItem) => {
        return (
          <div key={item.id}>
            {item.name} - {item.quantity} - {item.price}
          </div>
        )
      })}
    </div>
  )
}
