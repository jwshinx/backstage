import React from 'react'
import CollectionPreviewComponent from '../../components/collection-preview/CollectionPreviewComponent'
import SHOP_DATA from '../../reducers/shopData'

// interface ItemsByCollectionType<T> {
//   guitars: Array<T>
//   basses: Array<T>
//   amps: Array<T>
//   speakers: Array<T>
//   pedals: Array<T>
// }

export default function ShopPageComponent() {
  const itemsByCollection = SHOP_DATA

  return (
    <>
      {Object.keys(itemsByCollection).map((key) => {
        return (
          <CollectionPreviewComponent
            key={key}
            title={key}
            items={
              itemsByCollection[key as keyof typeof itemsByCollection].items
            }
          />
        )
      })}
    </>
  )
}
