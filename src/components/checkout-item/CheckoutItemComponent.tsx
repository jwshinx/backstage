import React, { useContext } from 'react'
import { CartItem } from '../../providers/cart'
import styles from './CheckoutItemComponent.module.css'
import RemoveIcon from '../../assets/black_x.svg'
import { CartContext } from '../../providers/CartProvider'

interface CheckoutItemComponentProps {
  item: CartItem
}

export default function CheckoutItemComponent(
  props: CheckoutItemComponentProps
) {
  const { item } = props
  const { imageUrl, price, quantity, name } = item
  const ctx = useContext(CartContext)

  let removeItem: (item: CartItem) => void
  if (ctx?.removeItem !== undefined) {
    removeItem = ctx.removeItem
  }

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
          console.log('+++> COC removeItem clicked!')
          removeItem(item)
        }}
        type="button"
      >
        <img src={RemoveIcon} alt="remove-icon" />
      </button>
    </div>
  )
}
