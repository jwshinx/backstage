import React from 'react'

import styles from './ActionButtonComponent.module.css'
import collectionItemComponentStyles from '../../components/collection-item/CollectionItemComponent.module.css'
import { CartItem } from '../../providers/cart'

export default function ActionButtonComponent({
  children,
  styleArray,
  onClick,
}: // ...otherProps
{
  children: any
  onClick: (item: CartItem) => void
  styleArray: Array<string>
  // otherProps: any
}) {
  const [firstElement, secondElement] = styleArray

  return (
    <button
      className={`${collectionItemComponentStyles['actionbutton']} ${styles[firstElement]} ${styles[secondElement]}`}
      type="button"
      onClick={(item: any) => onClick(item)}
    >
      {children}
    </button>
  )
}
