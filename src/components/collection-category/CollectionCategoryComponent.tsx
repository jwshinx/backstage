import React from 'react'
import { ItemType } from '../../types/item'
import RowFactory from '../../utils/RowFactory'
import CollectionItemComponent from '../collection-item/CollectionItemComponent'

interface CollectionCategoryComponentProps {
  items: Array<ItemType>
  query: string
}

export default function CollectionCategoryComponent(
  props: CollectionCategoryComponentProps
) {
  const { items, query } = props
  const factory = new RowFactory(items)

  console.log(`+++> CCC query:`, query)
  console.log(`+++> CCC factory.rowsOfItemsHash:`, factory.rowsOfItemsHash)

  return (
    <>
      {Object.keys(factory.rowsOfItemsHash).map(
        (keyValue: string, idx: number) => {
          return (
            <div className="row my-3" key={idx}>
              {factory.rowsOfItemsHash[parseInt(keyValue)].map(
                (item: ItemType) => {
                  return (
                    <div className="col-3" key={item.id}>
                      <CollectionItemComponent key={item.id} item={item} />
                    </div>
                  )
                }
              )}
            </div>
          )
        }
      )}
    </>
  )
}
