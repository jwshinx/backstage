import React from 'react'

import styles from './CollectionItemComponent.module.css'

export default function CollectionItemComponent(props: any) {
  // const { item } = props
  console.log(`+++> CIC props:`, props)
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
    </div>
  )
}
