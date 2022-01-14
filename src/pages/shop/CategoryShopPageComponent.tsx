import React, { useContext } from 'react'
import styles from './CategoryShopPageComponent.module.css'

import { RouteComponentProps, useLocation, Link } from 'react-router-dom'
import CollectionCategoryComponent from '../../components/collection-category/CollectionCategoryComponent'
import SHOP_DATA, { ShopDataType } from '../../reducers/shopData'
import ItemContext from '../../store/item-context'

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

  const ctx = useContext(ItemContext)
  const { items } = ctx

  const categoryItems = SHOP_DATA[`${category}`]

  console.log(`+++> CatShopPageComp props:`, props)
  console.log(`+++> CatShopPageComp category:`, category)
  console.log(`+++> CatShopPageComp categoryItems.items:`, categoryItems.items)
  console.log(`+++> CatShopPageComp items:`, items)

  const foo = items.filter((item) => item.routeName === category)
  console.log(`+++> CatShopPageComp foo:`, foo)

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
          <CollectionCategoryComponent items={foo} />
        </div>
      </div>
    </div>
  )
}
