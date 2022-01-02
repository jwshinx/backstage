import React from 'react'
import MenuItemComponent from '../menu-item/MenuItemComponent'
import styles from './HomepageMenuComponent.module.css'
import CATEGORY_DATA from '../../reducers/categoryData'
// import SHOP_DATA from './shop.data';
// import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';

// import { selectStudioFamilies } from '../../../selectors/studio/StudioSelectors';
// import FamilyItem from './FamilyItem';
// import MenuItemComponent from '../menu-item/MenuItemComponent'
// import { Entity, Group } from '../../../models/studio';

// import './family_menu.css';

// interface State {
//   studio: {
//     families: Entity[]
//     catalog: Group[]
//   }
// }

// // aka ConnectedProps
// interface DesiredProps {
//   families: Entity[]
// }

// interface OwnProps {}

// type FamilyMenuProps = OwnProps & DesiredProps

// const FamilyMenu: React.FC<FamilyMenuProps> = (props): JSX.Element => {
const HomepageMenuComponent: React.FC<any> = (): JSX.Element => {
  // console.log(`+++> HMC 0 props:`, props)
  const categoryData = CATEGORY_DATA
  // console.log(`+++> HMC 0 categoryData:`, categoryData)

  return (
    <div className={styles['category-menu']}>
      {categoryData.map((category: any) => (
        <MenuItemComponent
          key={category.id}
          title={category.title}
          imageUrl={category.imageUrl}
          linkUrl={category.linkUrl}
        />
      ))}
    </div>
  )
}

export default HomepageMenuComponent
