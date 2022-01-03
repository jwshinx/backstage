import React from 'react'
import { Item } from '../../types/item'

interface CollectionCategoryComponentProps {
  item: Item
}

export default function CollectionCategoryComponent(
  props: CollectionCategoryComponentProps
) {
  // console.log(`+++> CollectionCategoryComponent props:`, props)
  return (
    <div>
      <h3>
        CollectionCategoryComponent {props.item.id} {props.item.name}
      </h3>
    </div>
  )
}
