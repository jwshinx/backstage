import React from 'react'

import styles from './CartIconComponent.module.css'
import Icon from '../../assets/shopping-bag.svg'

// cartIconChangeHandler
interface CartIconComponentProps {
  cartIconClickHandler: any
}

export default function CartIconComponent(props: CartIconComponentProps) {
  const { cartIconClickHandler } = props
  // console.log(`+++> CIC 0 props:`, props)
  // const cartIconChangeHandler = () => {
  //   console.log(`+++> CIC cartIconChangeHandler 0`)
  // }

  return (
    <div
      className={styles['cart-icon']}
      onClick={cartIconClickHandler}
      aria-hidden="true"
    >
      <div className="logo">
        <img src={Icon} alt="logo" className={styles['shopping-icon']} />
      </div>
      <span className={styles['item-count']}>0</span>
    </div>
  )
}
