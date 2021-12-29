import React from 'react'

import styles from './CollectionItemComponent.module.css'

import AddToCartButtonComponent from '../../ui/button/AddToCartButtonComponent'

interface CollectionItemComponentProps {
  name: string
  imageUrl: string
  price: number
}

export default function CollectionItemComponent(
  props: CollectionItemComponentProps
) {
  // const { item } = props
  // console.log(`+++> CIC props:`, props)
  const { name, price, imageUrl } = props

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
      <AddToCartButtonComponent isCollectionItem>
        Add to cart
      </AddToCartButtonComponent>
    </div>
  )
}
