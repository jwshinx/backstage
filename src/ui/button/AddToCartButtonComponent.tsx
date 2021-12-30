import React from 'react'

import styles from './AddToCartButtonComponent.module.css'
import collectionItemComponentStyles from '../../components/collection-item/CollectionItemComponent.module.css'

export default function AddToCartButtonComponent({
  value,
  children,
  isCollectionItem,
  onClickHandler,
}: // ...otherProps
{
  value: number
  children: any
  isCollectionItem: boolean
  // onClickHandler: (value: number) => void
  onClickHandler: any
  // otherProps: any
}) {
  console.log(`+++> AddToCartButtonComponent 0 value:`, value)
  const buttonStyles = `
    ${styles['add-to-cart-button']} 
    ${
      isCollectionItem
        ? collectionItemComponentStyles['collection-item-button']
        : ''
    }`

  return (
    <button className={buttonStyles} type="button" onClick={onClickHandler}>
      {children}
    </button>
  )
}
