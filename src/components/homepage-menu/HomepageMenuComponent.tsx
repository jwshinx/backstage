import React from 'react'
// import React, { useContext } from 'react'
import MenuItemComponent from '../menu-item/MenuItemComponent'
import styles from './HomepageMenuComponent.module.css'

import CATEGORY_DATA from '../../reducers/categoryData'
import { Category } from '../../types/category'
// import CategoryContext from '../../store/category-context'

const HomepageMenuComponent: React.FC<any> = (): JSX.Element => {
  // const ctx = useContext(CategoryContext)
  const categoryData = CATEGORY_DATA

  return (
    <div className={styles['category-menu']}>
      {/* {ctx!.categories.map((category: Category) => ( */}
      {categoryData.map((category: Category) => (
        <MenuItemComponent
          key={category.id}
          id={category.id}
          name={category.name}
          imageUrl={category.imageUrl}
          linkUrl={category.linkUrl}
        />
      ))}
    </div>
  )
}

export default HomepageMenuComponent
