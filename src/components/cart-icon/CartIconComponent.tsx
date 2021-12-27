import React from 'react'

import styles from './CartIconComponent.module.css'
import Icon from '../../assets/shopping-bag.svg'

export default function CartIconComponent() {
  return (
    <div className={styles['cart-icon']}>
      <div className="logo">
        <img src={Icon} alt="logo" className={styles['shopping-icon']} />
      </div>
      <span className={styles['item-count']}>0</span>
    </div>
  )
}
