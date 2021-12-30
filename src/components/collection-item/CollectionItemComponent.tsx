import React, { useContext } from 'react'

import styles from './CollectionItemComponent.module.css'

import AddToCartButtonComponent from '../../ui/button/AddToCartButtonComponent'
import { CartContext } from '../../providers/CartProvider'

interface CollectionItemComponentProps {
  item: any
}

export default function CollectionItemComponent(
  props: CollectionItemComponentProps
) {
  // const { item } = props
  // console.log(`+++> CIC props:`, props)
  const { item } = props
  const { name, price, imageUrl } = item
  const { addItem } = useContext(CartContext)

  // const ctx = useContext(CartContext)

  // const addToCartClickHandler = () => {
  //   console.log(`+++> CIC addToCartClickHandler clicked!`)
  // }

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
