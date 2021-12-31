import React from 'react'
import { CartItem } from '../../providers/cart'
import styles from './CheckoutItemComponent.module.css'

interface CheckoutItemComponentProps {
  item: CartItem
}

export default function CheckoutItemComponent(
  props: CheckoutItemComponentProps
) {
  const { imageUrl, price, quantity, name } = props.item

  return (
    <div className={styles['checkout-item']}>
      <div className={styles['image-area']}>
        <div className={styles['image-box']}>
          <img src={imageUrl} alt="item" />
        </div>
      </div>
      <div className={styles['item-details']}>
        {name} - {quantity} - {price}
      </div>
    </div>
  )
}
