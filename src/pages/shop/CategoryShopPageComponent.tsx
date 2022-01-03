import React from 'react'
import styles from './CategoryShopPageComponent.module.css'

import { RouteComponentProps, useLocation } from 'react-router-dom'
import { Item } from '../../types/item'
import CollectionItemComponent from '../../components/collection-item/CollectionItemComponent'
// import CollectionCategoryComponent from '../../components/collection-category/CollectionCategoryComponent'
import RowFactory from '../../utils/RowFactory'
import SHOP_DATA, { ShopDataType } from '../../reducers/shopData'

interface CategoryShopPageComponentProps extends RouteComponentProps<any> {
  category: string
}

interface stateType {
  category: keyof ShopDataType
}

export default function CategoryShopPageComponent(
  props: CategoryShopPageComponentProps
) {
  const {
    state: { category },
  } = useLocation<stateType>()

  console.log(`+++> CategoryShopPageComponent props:`, props)
  const categoryItems = SHOP_DATA[`${category}`]

  const factory = new RowFactory(categoryItems.items)
  console.log(`+++> @joel factory length:`, factory.getLength())
  console.log(`+++> @joel categoryItems.items:`, categoryItems.items)
  console.log(`+++> @joel factory.rowsOfItemsHash:`, factory.rowsOfItemsHash)

  return (
    <div className={`container ${styles['shop-category']}`}>
      <div className="row bg-warning">
        <div className="col-12">
          <h1>{props.match.params.category.toUpperCase()}</h1>
        </div>
      </div>
      <div className="row bg-warning">
        <div className={`col-12 bg-secondary ${styles.preview}`}>
          {Object.keys(factory.rowsOfItemsHash).map(
            (keyValue: string, idx: number) => {
              return (
                <div className="row" key={idx}>
                  {factory.rowsOfItemsHash[parseInt(keyValue)].map(
                    (item: Item) => {
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
        </div>
      </div>
    </div>
  )
}
