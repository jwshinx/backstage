import React from 'react'
import MenuItemComponent from '../menu-item/MenuItemComponent'
import styles from './HomepageMenuComponent.module.css'
// import CATEGORY_DATA from '../../reducers/categoryData'
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

const CATEGORY_DATA = [
  {
    title: 'amps',
    imageUrl:
      'https://images.unsplash.com/photo-1595949223670-27b78312fd2e?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=Mnw0Mjg5N3wwfDF8c2VhcmNofDh8fGFtcGxpZmllcnxlbnwwfHx8fDE2MjMwMDY3OTg\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080',
    id: 101,
    linkUrl: 'market/amps',
  },
  {
    title: 'pedals',
    imageUrl:
      'https://images.unsplash.com/photo-1613065053787-93fef9374112?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=Mnw0Mjg5N3wwfDF8c2VhcmNofDV8fGd1aXRhciUyMHBlZGFsc3xlbnwwfHx8fDE2MjMwMDcwMjg\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080',
    id: 102,
    linkUrl: 'market/pedals',
  },
  {
    title: 'speakers',
    imageUrl:
      'https://images.unsplash.com/photo-1593418309569-c78b2416476d?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=Mnw0Mjg5N3wwfDF8c2VhcmNofDJ8fGFtcGxpZmllcnxlbnwwfHx8fDE2MjMwMDY3OTg\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080',
    id: 103,
    linkUrl: 'market/speakers',
  },
  {
    title: 'guitars',
    imageUrl:
      'https://images.unsplash.com/photo-1550291652-6ea9114a47b1?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=Mnw0Mjg5N3wwfDF8c2VhcmNofDEwfHxndWl0YXJ8ZW58MHx8fHwxNjIzMDA2MjI3\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080',
    size: 'large',
    id: 104,
    linkUrl: 'market/guitars',
  },
  {
    title: 'basses',
    imageUrl:
      'https://images.unsplash.com/photo-1485278537138-4e8911a13c02?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=Mnw0Mjg5N3wwfDF8c2VhcmNofDF8fGJhc3N8ZW58MHx8fHwxNjIzMDA2NDEx\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080',
    size: 'large',
    id: 105,
    linkUrl: 'market/basses',
  },
]

// const FamilyMenu: React.FC<FamilyMenuProps> = (props): JSX.Element => {
const HomepageMenuComponent: React.FC<any> = (props): JSX.Element => {
  console.log(`+++> HMC 0 props:`, props)
  const categoryData = CATEGORY_DATA
  console.log(`+++> HMC 0 categoryData:`, categoryData)

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
