import React from 'react'
import { RouteComponentProps, useLocation } from 'react-router-dom'

import CollectionItemCreateComponent from '../../components/collection-item/CollectionItemCreateComponent'
import { ShopDataType } from '../../reducers/shopData'

import styles from './ItemCreatePageComponent.module.css'

interface stateType {
  category: keyof ShopDataType
}

/* 
todos:
- add items to firestore. delete shotdata
- hoc to ensure only logged in users can add item
- deploy!
*/
const ItemCreatePageComponent = (props: RouteComponentProps<any>) => {
  console.log(`+++> ICPC props:`, props)

  const {
    state: { category },
  } = useLocation<stateType>()

  console.log(`+++> ICPC category:`, category)

  return (
    <div className="row justify-content-start">
      <div className="col-12">
        <h3>{category.toUpperCase()}</h3>
        <span className={styles['description']}>
          Add details for creating a new item.
        </span>
        <CollectionItemCreateComponent category={category} />
      </div>
    </div>
  )
}

export default ItemCreatePageComponent
