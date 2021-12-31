import React, { useContext } from 'react'

import styles from './CollectionItemComponent.module.css'

import AddToCartButtonComponent from '../../ui/button/AddToCartButtonComponent'
import { CartContext } from '../../providers/CartProvider'
import { Item as CartItem } from '../../types/item'

interface CollectionItemComponentProps {
  item: CartItem
}

export default function CollectionItemComponent(
  props: CollectionItemComponentProps
) {
  const { item } = props
  const { name, price, imageUrl } = item
  const ctx = useContext(CartContext)

  let addItem: (item: CartItem) => void
  if (ctx && ctx.addItem !== undefined) {
    addItem = ctx.addItem
  }

  return (
    <div className={styles['collection-item']}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${imageUrl})` }}
      />

      <div className={styles['collection-footer']}>
        <span className={styles.name}>{name}</span>
        <span className={styles.price}>{price}</span>
      </div>
      <AddToCartButtonComponent onClick={() => addItem(item)} isCollectionItem>
        Add to cart
      </AddToCartButtonComponent>
    </div>
  )
}
