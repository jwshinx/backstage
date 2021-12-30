import React, { useContext } from 'react'
import styles from './CartDropdownComponent.module.css'
import CustomButton from '../../ui/button/CustomButtonComponent'
import CartItemComponent from '../cart-item/CartItemComponent'
import { CartContext } from '../../providers/CartProvider'

export default function CartDropdownComponent() {
  const { cartItems } = useContext(CartContext)

  console.log(`+++> CDC cartItems:`, cartItems)

  return (
    <div className={styles['cart-dropdown']}>
      <div className={styles['cart-items']}>
        {cartItems.length === 0 ? (
          <p className={styles['empty-message']}>No items.</p>
        ) : (
          cartItems.map((item: any) => {
            return <CartItemComponent key={item.id} item={item} />
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
