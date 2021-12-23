import React from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'
// import './family_item.css';

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
  console.log('+++> MenuItemComponent bbb props:', props)
  const { title, imageUrl, size, history, linkUrl, match } = props
  console.log('+++> MenuItemComponent bbb match:', match)
  console.log('+++> MenuItemComponent linkUrl:', linkUrl)
  console.log('+++> MenuItemComponent history:', history)

  return (
    <div
      className={`${size} family-item`}
      // onClick={() => history.push(`${match.url}/${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  )
}

export default withRouter(MenuItemComponent)
