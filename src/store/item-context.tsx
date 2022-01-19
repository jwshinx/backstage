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

const fetchItemsData = () => {
  console.log(`+++> @joel xxx item-context useEffect: fetch items`)
  const itemsRef = firebase.firestore().collection('items')

  const itemsData: Array<ItemType> = []
  itemsRef
    .get()
    .then((doc) => {
      doc.forEach((item) => {
        itemsData.push({ id: item.id, ...item.data() } as ItemType)
      })
      // setItems(itemsData)
    })
    .catch((error) => {
      console.log(`items fetch error:`, error)
    })
  console.log(`+++> @joel xxx itemsData`, itemsData)
  return itemsData
}

export const ItemContextProvider = (props: any) => {
  const [items, setItems] = useState<Array<ItemType>>([])

  useEffect(() => {
    const results = fetchItemsData()
    setItems(results)
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
