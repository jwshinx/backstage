import React from 'react'
import CollectionPreviewComponent from '../../components/collection-preview/CollectionPreviewComponent'

// interface ItemType {
//   id: number
//   name: string
//   imageUrl: string
//   price: number
// }

// interface CollectionType {
//   // id: 'guitars' | 'basses' | 'amps' | 'pedals' | 'speakers'
//   id: number
//   title: string
//   routeName: string
//   items: ItemType[]
// }

import SHOP_DATA from '../../reducers/shopData'

export default function ShopPageComponent() {
  // console.log(`+++> @joel200 ShopPageComponent SHOP_DATA:`, SHOP_DATA)
  // console.log(`+++> ShopPageComponent SHOP_DATA keys:`, Object.keys(SHOP_DATA))

  return (
    <>
      {Object.keys(SHOP_DATA).map((key) => {
        return (
          <CollectionPreviewComponent
            key={key}
            title={key}
            items={SHOP_DATA[key as keyof typeof SHOP_DATA].items}
          />
        )
      })}
    </>
  )
}
