// import React from 'react'
import React, { useContext } from 'react'
// import _ from 'lodash'
import CollectionPreviewComponent from '../../components/collection-preview/CollectionPreviewComponent'
import ItemContext from '../../store/item-context'

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

// import SHOP_DATA from '../../reducers/shopData'

export default function ShopPageComponent() {
  const ctx = useContext(ItemContext)
  // console.log(`+++> @joel200 ShopPageComponent SHOP_DATA:`, SHOP_DATA)
  // console.log(`+++> ShopPageComponent SHOP_DATA keys:`, Object.keys(SHOP_DATA))

  const { items } = ctx

  console.log(`+++> SPC items:`, items)

  const foo = {}
  items.forEach((item) => {
    // console.log(`+++> item:`, item)

    if (foo.hasOwnProperty(item.routeName)) {
      console.log(`   yes key:`, item.routeName)
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      foo[item.routeName].push(item)
    } else {
      console.log(`   no key:`, item.routeName)
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      foo[item.routeName] = [item]
    }
    // foo[item.routeName] = [item]
  })

  // const collectionItems = _.mapKeys(items, 'routeName')

  // console.log(`+++> collectionItems:`, collectionItems)
  console.log(`+++> foo:`, foo)
  console.log(`+++> keys:`, Object.keys(foo))

  const myItems = Object.keys(foo).map((key: string) => {
    console.log(`     ---> key:`, key)
    // console.log(`     ---> fookey:`, foo[key])

    return foo[key as keyof typeof foo]
  })

  console.log(`>>>> myItems:`, myItems)
  return (
    <>
      {/* {ctx.items.map((item: any) => {

      })} */}
      {Object.keys(foo).map((key) => {
        return (
          <CollectionPreviewComponent
            key={key}
            title={key}
            items={foo[key as keyof typeof foo]}
          />
        )
      })}
    </>
  )
}
