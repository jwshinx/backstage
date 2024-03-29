import React from 'react'
import styles from './CartItemComponent.module.css'
import { CartItem } from '../../providers/cart'

export default function CartItemComponent({
  item: { imageUrl, price, name, quantity },
}: {
  item: CartItem
}) {
  return (
    <div className={styles['cart-item']}>
      <img src={imageUrl} alt="item" />
      <div className={styles['item-details']}>
        <span className={styles['name']}>{name}</span>
        <span className={styles['price']}>
          {quantity} x ${price}
        </span>
      </div>
    </div>
  )
}
