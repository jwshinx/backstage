import React from 'react'
import styles from './CartDropdownComponent.module.css'

export default function CartDropdownComponent() {
  return (
    <div className={styles['cart-dropdown']}>
      <div className={styles['cart-items']}></div>
      <span>CartDropdownComponent</span>
    </div>
  )
}
