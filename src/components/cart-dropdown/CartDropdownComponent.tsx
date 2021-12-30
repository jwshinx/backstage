import React, { useContext } from 'react'
import styles from './CartDropdownComponent.module.css'
import CustomButton from '../../ui/button/CustomButtonComponent'
import { CartContext } from '../../providers/CartProvider'

export default function CartDropdownComponent() {
  const { cartItems } = useContext(CartContext)

  return (
    <div className={styles['cart-dropdown']}>
      <div className={styles['cart-items']}>
        {cartItems.length === 0 ? (
          <p className={styles['empty-message']}>No items.</p>
        ) : (
          cartItems.map((item: any) => {
            return <span key={item.name}>{item.name}</span>
          })
        )}
      </div>
      <div className={styles['cart-button-area']}>
        <CustomButton isDisabled={false} type="submit">
          CHECKOUT
        </CustomButton>
      </div>
    </div>
  )
}
