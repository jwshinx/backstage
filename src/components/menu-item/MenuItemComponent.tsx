import React from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import styles from './MenuItemComponent.module.css'

interface MenuItemComponentProps extends RouteComponentProps<any> {
  title: string
  // id: number;
  imageUrl: string
  linkUrl: string
  size?: string
  // catalog: Group[];
  // history: {};
  // location: {};
  // match: {};
}

const MenuItemComponent: React.FC<MenuItemComponentProps> = (
  props
): JSX.Element => {
  // console.log('+++> MenuItemComponent bbb props:', props)
  // const { title, imageUrl, size, history, linkUrl, match } = props
  const { title, imageUrl } = props
  // console.log('+++> MenuItemComponent bbb match:', match)
  // console.log('+++> MenuItemComponent linkUrl:', linkUrl)
  // console.log('+++> MenuItemComponent history:', history)
  // console.log('+++> MenuItemComponent size:', size)

  return (
    <div
      className={styles['menu-item']}
      // onClick={() => history.push(`${match.url}/${linkUrl}`)}
    >
      <div
        className={styles['background-image']}
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className={styles.content}>
        <h1 className={styles.title}>{title.toUpperCase()}</h1>
        <span className={styles.subtitle}>SHOP NOW</span>
      </div>
    </div>
  )
}

export default withRouter(MenuItemComponent)
