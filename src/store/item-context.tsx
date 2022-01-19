import React, { useState, useEffect } from 'react'
// import React, { useState } from 'react'
import { useQuery } from 'react-query'
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

import { ItemType } from '../types/item'

interface ItemContextType {
  items: Array<ItemType>
}

const ItemContext = React.createContext<ItemContextType>({
  items: [],
})

const fetchItemsData = async () => {
  // console.log(`+++> @joel xxx item-context useEffect: fetch items`)
  const itemsRef = firebase.firestore().collection('items')

  const itemsData: Array<ItemType> = []
  await itemsRef
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
  // console.log(`+++> @joel xxx fetchItemsData`, itemsData)
  return itemsData
}

export const ItemContextProvider = (props: any) => {
  const [items, setItems] = useState<Array<ItemType>>([])

  const { data } = useQuery('items', fetchItemsData, {
    staleTime: 300000,
    cacheTime: 300000,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchInterval: false,
    refetchOnReconnect: false,
    onSuccess: () => console.log('xxx> 333 @joel react-query onSuccess!:'),
  })

  useEffect(() => {
    console.log(`xxx> @joel useEffect`)
    // e slint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ t s-ignore
    setItems(data!)
  }, [data])

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
