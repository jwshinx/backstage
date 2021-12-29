import React from 'react'

import styles from './AddToCartButtonComponent.module.css'
import collectionItemComponentStyles from '../../components/collection-item/CollectionItemComponent.module.css'

export default function AddToCartButtonComponent({
  children,
  isCollectionItem,
}: // ...otherProps
{
  children: any
  isCollectionItem: boolean
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
    <button className={buttonStyles} type="button">
      {children}
    </button>
  )
}
