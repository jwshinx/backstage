import React from 'react'
import styles from './CollectionPreviewComponent.module.css'
import CollectionItemComponent from '../collection-item/CollectionItemComponent'
import { Item } from '../../types/item'

interface CollectionPreviewComponentProps {
  title: string
  items: Array<Item>
}

export default function CollectionPreviewComponent(
  props: CollectionPreviewComponentProps
) {
  console.log(`+++> CPC props:`, props)

  const { title, items } = props
  return (
    <div className={styles['shop-preview']}>
      <h1>{title.toUpperCase()}</h1>
      <div className={styles.preview}>
        {items
          .filter((item: Item, idx: number) => idx < 4)
          .map((item: any) => (
            <CollectionItemComponent key={item.id} item={item} />
          ))}
      </div>
    </div>
  )
}
