import React from 'react'
import styles from './CartItemComponent.module.css'

export default function CartItemComponent({
  item: { imageUrl, price, name, quantity },
}: {
  item: any
}) {
  return (
    <div className={styles['cart-item']}>
      <img src={imageUrl} alt="item" />
      <div className={styles['item-details']}>
        <span className={styles['name']}>{name}</span>
        <span className={styles['price']}>
          {quantity} x ${price}
        </span>
      </div>
    </div>
  )
  // const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  //   <div className='cart-item'>
  //     <img src={imageUrl} alt='item' />
  //     <div className='item-details'>
  //       <span className='name'>{name}</span>
  //       <span className='price'>
  //         {quantity} x ${price}
  //       </span>
  //     </div>
  //   </div>
  // );
}
