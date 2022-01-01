import React from 'react'
// import _ from 'lodash'

import styles from './AddToCartButtonComponent.module.css'
import collectionItemComponentStyles from '../../components/collection-item/CollectionItemComponent.module.css'
import { CartItem } from '../../providers/cart'

export default function AddToCartButtonComponent({
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
  // let buttonStyles = ''
  // _.forEach(styleArray, (value) => {
  //   buttonStyles += ` \$\{styles['${value}']\}`
  // })

  const [firstElement, secondElement] = styleArray

  // _.forEach(x, (value) => {
  //   buttonStyles += ` $\{styles['${value}']}`
  // })

  console.log(`+++> @joel ATCBC firstElement:`, firstElement)
  console.log(`+++> @joel ATCBC secondElement:`, secondElement)
  // const buttonStyles = `
  //   ${styles[styleArray]}${' '}
  //   ${
  //     isCollectionItem
  //       ? collectionItemComponentStyles['collection-item-button']
  //       : ''
  //   }`

  // const yyy = 'yyy-button'
  // const uuu = 'yyy'

  return (
    <button
      // className={styles + '.' + firstElement + ' ' + styles.addtocartbutton}
      className={`${collectionItemComponentStyles['actionbutton']} ${styles[firstElement]} ${styles[secondElement]}`}
      // className={
      //   styles + '.' + firstElement + ' ' + styles + '.' + secondElement + ' '
      // }
      // className={`${styles['add-to-cart-button']} ${styles['xxx-button']} ${collectionItemComponentStyles['collection-item-button']} ${buttonStyles}`}
      // className={`${styles[{ firstElement }]} ${styles['xxx-button']} ${
      //   collectionItemComponentStyles['collection-item-button']
      // }`}
      type="button"
      onClick={(item: any) => onClick(item)}
    >
      {children}
    </button>
  )
}
