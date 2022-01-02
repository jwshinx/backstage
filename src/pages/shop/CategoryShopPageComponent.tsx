import React from 'react'
import styles from './CategoryShopPageComponent.module.css'

// import { RouteComponentProps, useLocation } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { Item } from '../../types/item'
import CollectionItemComponent from '../../components/collection-item/CollectionItemComponent'

import SHOP_DATA, { ShopDataType } from '../../reducers/shopData'

// interface CategoryShopPageComponentProps extends RouteComponentProps<any> {
//   // school: School;
//   // category: string
// }

interface stateType {
  category: keyof ShopDataType
}

export default function CategoryShopPageComponent(props: any) {
  console.log(`+++> CSPC props:`, props)
  console.log(`+++> CSPC shop_data:`, SHOP_DATA.guitars)
  console.log(
    `+++> CSPC props.match.params.category:`,
    props.match.params.category
  )
  const {
    state: { category },
  } = useLocation<stateType>()

  console.log(`+++> CSPC category:`, category)
  // const xxx = props.match.params.category
  // if (typeof category === 'string') {
  //   console.log(`+++> CSPC category:`, category)
  //   console.log(`+++> CSPC 100:`, SHOP_DATA[`${category}`])
  //   // console.log(`+++> CSPC 100:`, SHOP_DATA as ShopDataType[{ category }])
  // }
  console.log(`+++> CSPC 100:`, SHOP_DATA[`${category}`])

  const categoryItems = SHOP_DATA[`${category}`]
  console.log(`+++> CSPC 101:`, categoryItems)

  return (
    <div className={styles['shop-category']}>
      <h1>{props.match.params.category.toUpperCase()}</h1>
      <div className={styles.preview}>
        {categoryItems.items.map((item: Item) => (
          <CollectionItemComponent key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}
