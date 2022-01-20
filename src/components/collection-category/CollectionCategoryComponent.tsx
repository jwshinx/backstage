import React from 'react'
import { ItemType } from '../../types/item'
import CollectionItemComponent from '../collection-item/CollectionItemComponent'
import genericSearch from '../../utils/genericSearch'

interface CollectionCategoryComponentProps {
  items: Array<ItemType>
  query: string
}

export default function CollectionCategoryComponent(
  props: CollectionCategoryComponentProps
) {
  const { items, query } = props

  console.log(`+++> CCC xxx query:`, query)

  return (
    <>
      <div className="row my-3">
        {items
          .filter((item) =>
            genericSearch(item, ['name', 'price'], query, false)
          )
          .map((item: ItemType) => (
            <div className="col-3" key={item.id}>
              <CollectionItemComponent key={item.id} item={item} />
            </div>
          ))}
      </div>
    </>
  )
}
