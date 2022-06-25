import React, { useContext } from 'react'
import { RouteComponentProps, useLocation, useHistory } from 'react-router-dom'

import CollectionItemCreateComponent from '../../components/collection-item/CollectionItemCreateComponent'
import { ShopDataType } from '../../reducers/shopData'
import AuthContext from '../../store/auth-context'

import styles from './ItemCreatePageComponent.module.css'

interface stateType {
  category: keyof ShopDataType
}

/* 
todos:
- onClose cart from anywhere click. grep "veneer -i" in colleges
- firestore access security
- encodeUrl on create item form
- cache getItems
- hoc to ensure only logged in users can add item
- deploy!

*/
// const ItemCreatePageComponent = (props: RouteComponentProps<any>) => {
const ItemCreatePageComponent = () => {
  const authCtx: any = useContext(AuthContext)
  const history = useHistory()

  if (
    !(
      authCtx &&
      authCtx.user &&
      authCtx.user.currentUser &&
      authCtx.user.currentUser.email === 'jwshin@gmail.com'
    )
  ) {
    history.replace('/')
  }

  const {
    state: { category },
  } = useLocation<stateType>()

  return (
    <div className="row justify-content-start">
      <div className="col-12">
        <h3>{category.toUpperCase()}</h3>
        <span className={styles['description']}>
          Add details to create a new item.
        </span>
        <CollectionItemCreateComponent category={category} />
      </div>
    </div>
  )
}

export default ItemCreatePageComponent
