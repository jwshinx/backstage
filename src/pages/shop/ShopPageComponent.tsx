import React, { useContext } from 'react'
import CollectionPreviewComponent from '../../components/collection-preview/CollectionPreviewComponent'
import ItemContext from '../../store/item-context'
import { ItemType } from '../../types/item'

type CategoryLabels = 'guitars' | 'basses' | 'amps' | 'pedals' | 'speakers'

interface ItemsByCollectionType<T> {
  guitars: Array<T>
  basses: Array<T>
  amps: Array<T>
  speakers: Array<T>
  pedals: Array<T>
}

export default function ShopPageComponent() {
  const ctx = useContext(ItemContext)
  const { items } = ctx

  const itemsByCollection: ItemsByCollectionType<ItemType> = {
    guitars: [],
    basses: [],
    amps: [],
    speakers: [],
    pedals: [],
  }

  items.forEach((item) => {
    itemsByCollection[item.routeName as CategoryLabels].push(item)
  })

  return (
    <>
      {Object.keys(itemsByCollection).map((key) => {
        return (
          <CollectionPreviewComponent
            key={key}
            title={key}
            items={itemsByCollection[key as keyof typeof itemsByCollection]}
          />
        )
      })}
    </>
  )
}
