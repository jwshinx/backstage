import React, { useContext } from 'react'
import { CartItem } from '../../providers/cart'
import styles from './CheckoutItemComponent.module.css'
import RemoveIcon from '../../assets/black_x.svg'
import AddIcon from '../../assets/add.svg'
import SubtractIcon from '../../assets/subtract.svg'
import { CartContext } from '../../providers/CartProvider'

interface CheckoutItemComponentProps {
  item: CartItem
}

export default function CheckoutItemComponent(
  props: CheckoutItemComponentProps
) {
  const { item } = props
  const { imageUrl, price, quantity, name } = item
  const ctx = useContext(CartContext)

  let removeItem: (item: CartItem) => void
  if (ctx?.removeItem !== undefined) {
    removeItem = ctx.removeItem
  }

  let addItem: (item: CartItem) => void
  if (ctx && ctx.addItem !== undefined) {
    addItem = ctx.addItem
  }

  // <div className={`row justify-content-md-center`}>
  return (
    <div className={`row my-3 ${styles['checkout-item']}`}>
      <div className={`col-3 ${styles['image-area']}`}>
        <div className={`${styles['image-box']}`}>
          <img src={imageUrl} alt="item" />
        </div>
      </div>
      <div className={`col-3 py-4 ${styles['item-details']}`}>
        <div className="row justify-content-center">{name}</div>
      </div>
      <div className={`col-2 py-4 ${styles['item-details']}`}>
        <div className="row justify-content-center">
          <div className="col-3 bg-secondary">
            <button
              className={`${styles['remove-btn']}`}
              onClick={() => {
                console.log('+++> COC subtractIcon clicked!')
                removeItem(item)
              }}
              type="button"
            >
              <img src={SubtractIcon} alt="subtract-icon" />
            </button>
          </div>

          <div className="col-3">{quantity}</div>

          <div className="col-3 bg-warning">
            <button
              className={`${styles['remove-btn']}`}
              onClick={() => {
                console.log('+++> COC addIcon clicked!')
                addItem(item)
              }}
              type="button"
            >
              <img src={AddIcon} alt="add-icon" />
            </button>
          </div>
        </div>
      </div>
      <div className={`col-2 py-4 ${styles['item-details']}`}>
        <div className="row justify-content-center">{price}</div>
      </div>
      <div className={`col-2 py-3`}>
        <div className="row justify-content-center">
          <button
            className={`${styles['remove-btn']}`}
            onClick={() => {
              console.log('+++> COC removeItem clicked!')
              removeItem(item)
            }}
            type="button"
          >
            <img src={RemoveIcon} alt="remove-icon" />
          </button>
        </div>
      </div>
    </div>
  )
}
