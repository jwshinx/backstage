import React from 'react'
// import styles from './CollectionPreviewComponent.module.css'
import { Item } from '../../types/item'

interface CollectionPreviewComponentProps {
  title: string
  items: Array<Item>
}

export default function CollectionPreviewComponent(
  props: CollectionPreviewComponentProps
) {
  // console.log(`+++> CPC props:`, props)

  const { title, items } = props
  return (
    <div>
      <h1>{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item: Item, idx: number) => idx < 4)
          .map((item: Item) => (
            <div key={item.id}>{item.name}</div>
          ))}
      </div>
    </div>
  )
}
