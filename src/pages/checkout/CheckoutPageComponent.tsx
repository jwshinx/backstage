import React, { useContext } from 'react'
import { CartContext } from '../../providers/CartProvider'
import { CartItem } from '../../providers/cart'
import CheckoutItemComponent from '../../components/checkout-item/CheckoutItemComponent'
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
        return <CheckoutItemComponent item={item} key={item.id} />
      })}
    </div>
  )
}
