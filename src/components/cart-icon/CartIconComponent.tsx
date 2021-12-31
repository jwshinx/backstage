import React, { useContext } from 'react'

import styles from './CartIconComponent.module.css'
import Icon from '../../assets/shopping-bag.svg'
import { CartContext } from '../../providers/CartProvider'

// export default function CartIconComponent(props: Record<string, unknown>) {
export default function CartIconComponent() {
  const ctx = useContext(CartContext)

  let toggleHidden: () => void = () => {
    'dummy'
  }

  if (ctx?.toggleHidden !== undefined) {
    toggleHidden = ctx.toggleHidden
  }

  const cartItemsCount = ctx?.cartItemsCount

  return (
    <div
      className={styles['cart-icon']}
      onClick={toggleHidden}
      aria-hidden="true"
    >
      <div className="logo">
        <img src={Icon} alt="logo" className={styles['shopping-icon']} />
      </div>
      <span className={styles['item-count']}>{cartItemsCount}</span>
    </div>
  )
}
