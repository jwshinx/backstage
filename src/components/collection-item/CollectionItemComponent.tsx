import React, { useContext } from 'react'

import styles from './CollectionItemComponent.module.css'

import AddToCartButtonComponent from '../../ui/button/AddToCartButtonComponent'
import CartContext from '../../store/cart-context'

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

  const ctx = useContext(CartContext)

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
      <AddToCartButtonComponent
        value={price}
        onClickHandler={ctx!.clickHandler}
        isCollectionItem
      >
        Add to cart
      </AddToCartButtonComponent>
    </div>
  )
}
