import React from 'react'
// import styles from './CollectionPreviewComponent.module.css'

export default function CollectionPreviewComponent(props: any) {
  console.log(`+++> CPC props:`, props)

  const { title, items } = props
  return (
    <div>
      <h1>{title.toUpperCase()}</h1>
      <div className="preview">
        {items.map((item: any) => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div>
    </div>
  )
}
