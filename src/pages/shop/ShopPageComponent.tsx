import React, { useContext } from 'react'
import CollectionPreviewComponent from '../../components/collection-preview/CollectionPreviewComponent'
import ItemContext from '../../store/item-context'
import { ItemType } from '../../types/item'

type CategoryLabels = 'guitars' | 'basses' | 'amps' | 'pedals' | 'speakers'
// interface ItemType {
//   id: string
//   name: string
//   imageUrl: string
//   price: string
//   routeName: string
// }

// interface CollectionType {
//   // id: 'guitars' | 'basses' | 'amps' | 'pedals' | 'speakers'
//   id: number
//   title: string
//   routeName: string
//   items: ItemType[]
// }

interface FooType<T> {
  guitars: Array<T>
  basses: Array<T>
  amps: Array<T>
  speakers: Array<T>
  pedals: Array<T>
}

// import SHOP_DATA from '../../reducers/shopData'

export default function ShopPageComponent() {
  const ctx = useContext(ItemContext)
  // console.log(`+++> @joel200 ShopPageComponent SHOP_DATA:`, SHOP_DATA)
  // console.log(`+++> ShopPageComponent SHOP_DATA keys:`, Object.keys(SHOP_DATA))

  const { items } = ctx

  console.log(`+++> SPC items:`, items)

  const itemsByCollection: FooType<ItemType> = {
    guitars: [],
    basses: [],
    amps: [],
    speakers: [],
    pedals: [],
  }

  items.forEach((item) => {
    // console.log(`+++> item:`, item)

    itemsByCollection[item.routeName as CategoryLabels].push(item)

    // if (foo.hasOwnProperty(item.routeName)) {
    //   console.log(`   yes key:`, item.routeName)
    //   // e slint-disable-next-line @typescript-eslint/ban-ts-comment
    //   // @ ts-ignore
    //   foo[item.routeName as CategoryLabels].push(item)
    // } else {
    //   console.log(`   no key:`, item.routeName)
    //   // e slint-disable-next-line @typescript-eslint/ban-ts-comment
    //   // @ ts-ignore
    //   foo[item.routeName as CategoryLabels] = [item]
    // }
  })

  // const collectionItems = _.mapKeys(items, 'routeName')

  // console.log(`+++> collectionItems:`, collectionItems)
  console.log(`+++> itemsByCollection:`, itemsByCollection)
  console.log(`+++> keys:`, Object.keys(itemsByCollection))

  // const myItems = Object.keys(itemsByCollection).map((key: string) => {
  //   console.log(`     ---> key:`, key)
  //   // console.log(`     ---> fookey:`, foo[key])
  //   return itemsByCollection[key as keyof typeof itemsByCollection]
  // })
  // console.log(`>>>> myItems:`, myItems)

  return (
    <>
      {/* {ctx.items.map((item: any) => {

      })} */}
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
