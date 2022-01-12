import React from 'react'
import styles from './CategoryShopPageComponent.module.css'

import { RouteComponentProps, useLocation, Link } from 'react-router-dom'
import CollectionCategoryComponent from '../../components/collection-category/CollectionCategoryComponent'
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

  const categoryItems = SHOP_DATA[`${category}`]

  console.log(`+++> CatShopPageComp props:`, props)
  console.log(`+++> CatShopPageComp category:`, category)

  return (
    <div className={`container ${styles['shop-category']}`}>
      <div className="row">
        <div className="col-12">
          <h1>{props.match.params.category.toUpperCase()}</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <Link
            to={{
              pathname: `/admin/${category}/new`,
              state: { category: category },
            }}
          >
            <h3 className={styles['category-items-link']}>Create</h3>
          </Link>
        </div>
      </div>
      <div className="row">
        <div className={`col-12 ${styles.preview}`}>
          <CollectionCategoryComponent items={categoryItems.items} />
        </div>
      </div>
    </div>
  )
}
