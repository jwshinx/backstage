import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import styles from './CartDropdownComponent.module.css'
import CustomButton from '../../ui/button/CustomButtonComponent'
import CartItemComponent from '../cart-item/CartItemComponent'
import { CartContext } from '../../providers/CartProvider'
import { CartItem } from '../../providers/cart'

export default function CartDropdownComponent() {
  const history = useHistory()
  const ctx = useContext(CartContext)
  let cartItems: Array<CartItem> = []
  if (ctx && ctx.cartItems !== undefined) {
    cartItems = ctx.cartItems
  }

  return (
    <div className={styles['cart-dropdown']}>
      <div className={styles['cart-items']}>
        {cartItems.length === 0 ? (
          <p className={styles['empty-message']}>No items.</p>
        ) : (
          cartItems.map((item: CartItem) => {
            return <CartItemComponent key={item.id} item={item} />
          })
        )}
      </div>
      <div className={styles['cart-button-area']}>
        <CustomButton
          onClick={() => {
            console.log(`+++> CDC checkout clicked!`)
            history.push('/checkout')
          }}
          isDisabled={false}
          type="button"
        >
          CHECKOUTT
        </CustomButton>
      </div>
    </div>
  )
}
