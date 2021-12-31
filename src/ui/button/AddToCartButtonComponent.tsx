import React from 'react'

import styles from './AddToCartButtonComponent.module.css'
import collectionItemComponentStyles from '../../components/collection-item/CollectionItemComponent.module.css'
import { CartItem } from '../../providers/cart'

export default function AddToCartButtonComponent({
  children,
  isCollectionItem,
  onClick,
}: // ...otherProps
{
  children: any
  isCollectionItem: boolean
  onClick: (item: CartItem) => void
  // otherProps: any
}) {
  const buttonStyles = `
    ${styles['add-to-cart-button']} 
    ${
      isCollectionItem
        ? collectionItemComponentStyles['collection-item-button']
        : ''
    }`

  return (
    <button
      className={buttonStyles}
      type="button"
      onClick={(item: any) => onClick(item)}
    >
      {children}
    </button>
  )
}
