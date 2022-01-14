import React from 'react'
import { Link } from 'react-router-dom'
import styles from './CollectionPreviewComponent.module.css'
import CollectionItemComponent from '../collection-item/CollectionItemComponent'
import { ItemType } from '../../types/item'

interface CollectionPreviewComponentProps {
  title: string
  items: Array<ItemType>
}

export default function CollectionPreviewComponent(
  props: CollectionPreviewComponentProps
) {
  const { title, items } = props
  return (
    <div className={`container ${styles['shop-preview']}`}>
      <div className="row">
        <div className="col-12">
          <h1>{title.toUpperCase()}</h1>
        </div>
      </div>

      <div className="row">
        <div className={`col-12 ${styles.preview}`}>
          {items
            .filter((item: ItemType, idx: number) => idx < 4)
            .map((item: ItemType) => (
              <div key={item.id} className="col-2">
                <CollectionItemComponent key={item.id} item={item} />
              </div>
            ))}
          <div className="col-4">
            <Link
              to={{
                pathname: `/shop/${title}`,
                state: { category: title },
              }}
            >
              <h3 className={styles['category-items-link']}>More...</h3>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
