import React, { useContext } from 'react'
import { CartItem } from '../../providers/cart'
import styles from './CheckoutItemComponent.module.css'
import RemoveIcon from '../../assets/black_x.svg'
import AddIcon from '../../assets/add.svg'
import SubtractIcon from '../../assets/subtract.svg'
import { CartContext } from '../../providers/CartProvider'
import ActionButtonComponent from '../../ui/button/ActionButtonComponent'

interface CheckoutItemComponentProps {
  item: CartItem
}

export default function CheckoutItemComponent(
  props: CheckoutItemComponentProps
) {
  const { item } = props
  const { imageUrl, price, quantity, name } = item
  const ctx = useContext(CartContext)

  let removeQuantity: (item: CartItem) => void
  if (ctx?.removeQuantity !== undefined) {
    removeQuantity = ctx.removeQuantity
  }

  let addQuantity: (item: CartItem) => void
  if (ctx && ctx.addQuantity !== undefined) {
    addQuantity = ctx.addQuantity
  }

  let clearItem: (item: CartItem) => void
  if (ctx && ctx.clearItem !== undefined) {
    clearItem = ctx.clearItem
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
          <div className="col-3">
            <ActionButtonComponent
              styleArray={['actionbtn', 'subtractbtn']}
              onClick={() => {
                removeQuantity(item)
              }}
            >
              <img src={SubtractIcon} alt="subtract-icon" />
            </ActionButtonComponent>
          </div>

          <div className="col-3">{quantity}</div>

          <div className="col-3">
            <ActionButtonComponent
              styleArray={['actionbtn', 'addbtn']}
              onClick={() => {
                addQuantity(item)
              }}
            >
              <img src={AddIcon} alt="add-icon" />
            </ActionButtonComponent>
          </div>
        </div>
      </div>
      <div className={`col-2 py-4 ${styles['item-details']}`}>
        <div className="row justify-content-center">${price}</div>
      </div>
      <div className={`col-2 py-3`}>
        <div className="row justify-content-center">
          <ActionButtonComponent
            styleArray={['removeitemfromcart']}
            onClick={() => clearItem(item)}
          >
            <img src={RemoveIcon} alt="remove-icon" />
          </ActionButtonComponent>
        </div>
      </div>
    </div>
  )
}
