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
    <div className="container">
      <div className="row">
        <div className="col-1"></div>
        <div className={`col-10 ${styles['checkout']}`}>
          <div className={`row ${styles['checkout-header']}`}>
            <div className={`col-3 ${styles['header-block']}`}>
              <div className="row justify-content-center">Product</div>
            </div>
            <div className={`col-3 ${styles['header-block']}`}>
              <div className="row justify-content-center">Description</div>
            </div>
            <div className={`col-2 ${styles['header-block']}`}>
              <div className="row justify-content-center">Quantity</div>
            </div>
            <div className={`col-2 ${styles['header-block']}`}>
              <div className="row justify-content-center">Price</div>
            </div>
            <div className={`col-2 ${styles['header-block']}`}>
              <div className="row justify-content-center">Remove</div>
            </div>
          </div>

          {cartItems.map((item: CartItem) => {
            return <CheckoutItemComponent item={item} key={item.id} />
          })}
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  )
}
