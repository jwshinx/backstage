import React from 'react'
import styles from './CartDropdownComponent.module.css'
import CustomButton from '../../ui/button/CustomButtonComponent'

export default function CartDropdownComponent() {
  return (
    <div className={styles['cart-dropdown']}>
      <span>CartDropdownComponent</span>
      <div className={styles['cart-items']}></div>
      <div className={styles['cart-button-area']}>
        <CustomButton isDisabled={false} type="submit">
          CHECKOUT
        </CustomButton>
      </div>
    </div>
  )
}
