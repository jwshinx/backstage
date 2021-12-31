import React from 'react'
import { CartItem } from '../../providers/cart'
import styles from './CheckoutItemComponent.module.css'
import RemoveIcon from '../../assets/black_x.svg'

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
      <button
        className={styles['remove-btn']}
        onClick={() => {
          console.log('+++> COC remove clicked!')
        }}
        type="button"
      >
        <img src={RemoveIcon} alt="remove-icon" />
      </button>
    </div>
  )
}
