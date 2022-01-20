import React, { useContext, useState } from 'react'
import _ from 'lodash'
import styles from './CategoryShopPageComponent.module.css'

import { RouteComponentProps, useLocation, Link } from 'react-router-dom'
import CollectionCategoryComponent from '../../components/collection-category/CollectionCategoryComponent'
import { ShopDataType } from '../../reducers/shopData'
import ItemContext from '../../store/item-context'
import { SearchInput } from '../../ui/SearchInput'

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

  const [query, setQuery] = useState<string>('')

  const ctx = useContext(ItemContext)
  const { items } = ctx

  if (!items) {
    return <h3>Loading...</h3>
  }

  const categoryItems = items.filter((item) => item.routeName === category)

  console.log(`+++> cspc query:`, query)

  return (
    <div className={`container ${styles['shop-category']}`}>
      <div className="row">
        <div className="col-10">
          <h1>{props.match.params.category.toUpperCase()}</h1>
        </div>
        <div className="col-2">
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
        <div className={`col-2`}>
          <div className="row mt-3">
            {_.isEmpty(items) ? (
              <></>
            ) : (
              <SearchInput
                placeholderText="Search name or price"
                setSearchQuery={(query) => {
                  setQuery(query)
                }}
              />
            )}
          </div>
        </div>
        <div className={`col-10 ${styles.preview}`}>
          <CollectionCategoryComponent query={query} items={categoryItems} />
        </div>
      </div>
    </div>
  )
}
