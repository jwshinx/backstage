import React, { useState, useEffect } from 'react'
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

import { ItemType } from '../types/item'

interface ItemContextType {
  items: Array<ItemType>
}

const ItemContext = React.createContext<ItemContextType>({
  items: [],
})

export const ItemContextProvider = (props: any) => {
  const [items, setItems] = useState<Array<ItemType>>([])

  useEffect(() => {
    const itemsRef = firebase.firestore().collection('items')

    const itemsData: Array<ItemType> = []
    itemsRef
      .get()
      .then((doc) => {
        doc.forEach((item) => {
          itemsData.push({ id: item.id, ...item.data() } as ItemType)
        })
        setItems(itemsData)
      })
      .catch((error) => {
        console.log(`items fetch error:`, error)
      })
  }, [])

  return (
    <ItemContext.Provider
      value={{
        items: items,
      }}
    >
      {props.children}
    </ItemContext.Provider>
  )
}

export default ItemContext
