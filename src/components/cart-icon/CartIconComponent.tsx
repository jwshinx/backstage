import React, { useContext } from 'react'

import styles from './CartIconComponent.module.css'
import Icon from '../../assets/shopping-bag.svg'
import { CartContext } from '../../providers/CartProvider'

// export default function CartIconComponent() {
export default function CartIconComponent(props: Record<string, unknown>) {
  // const { cartIconClickHandler } = props
  const { toggleHidden } = useContext(CartContext)
  console.log(`+++> CIC 0 props:`, props)
  // const cartIconChangeHandler = () => {
  //   console.log(`+++> CIC cartIconChangeHandler 0`)
  // }

  return (
    <div
      className={styles['cart-icon']}
      onClick={toggleHidden}
      aria-hidden="true"
    >
      <div className="logo">
        <img src={Icon} alt="logo" className={styles['shopping-icon']} />
      </div>
      <span className={styles['item-count']}>0</span>
    </div>
  )
}
