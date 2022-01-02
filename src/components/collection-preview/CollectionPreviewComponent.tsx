import React from 'react'
import { Link } from 'react-router-dom'
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
      <Link
        to={{
          pathname: `/shop/${title}`,
          state: { category: title },
        }}
      >
        <span className={styles['category-items-link']}>More...</span>
      </Link>
      <div className={styles.preview}>
        {items
          .filter((item: Item, idx: number) => idx < 4)
          .map((item: Item) => (
            <CollectionItemComponent key={item.id} item={item} />
          ))}
      </div>
    </div>
  )
}
