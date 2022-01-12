import React from 'react'
import { withRouter, RouteComponentProps, Link } from 'react-router-dom'
import styles from './MenuItemComponent.module.css'

interface MenuItemComponentProps extends RouteComponentProps<any> {
  name: string
  id: string
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
  const { name, imageUrl } = props

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
        <Link
          to={{
            pathname: `/shop/${name}`,
            state: { category: name },
          }}
        >
          <h1 className={styles.title}>{name.toUpperCase()}</h1>
          <span className={styles.subtitle}>SHOP NOW</span>
        </Link>
      </div>
    </div>
  )
}

export default withRouter(MenuItemComponent)
