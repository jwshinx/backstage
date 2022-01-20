import React from 'react'
import { ItemType, SortPropertyType, SortableItemType } from '../../types/item'
import CollectionItemComponent from '../collection-item/CollectionItemComponent'
import genericSearch from '../../utils/genericSearch'
import genericSort from '../../utils/genericSort'

interface CollectionCategoryComponentProps {
  items: Array<ItemType>
  query: string
  sortProperty: SortPropertyType<SortableItemType>
}

export default function CollectionCategoryComponent(
  props: CollectionCategoryComponentProps
) {
  const { items, query, sortProperty } = props

  return (
    <>
      <div className="row my-3">
        {items
          .filter((item) =>
            genericSearch(item, ['name', 'price'], query, false)
          )
          .sort((a, b) => genericSort(a, b, sortProperty))
          .map((item: ItemType) => (
            <div className="col-3" key={item.id}>
              <CollectionItemComponent key={item.id} item={item} />
            </div>
          ))}
      </div>
    </>
  )
}
