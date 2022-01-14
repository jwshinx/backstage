import React, { useState, useEffect } from 'react'
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

interface ItemType {
  id: string
  name: string
  price: string
  imageUrl: string
  routeName: string
}

interface ItemContextType {
  items: Array<ItemType>
}

const ItemContext = React.createContext<ItemContextType>({
  items: [],
})

export const ItemContextProvider = (props: any) => {
  console.log(`+++> ItemContext props: ${props}`)

  const [items, setItems] = useState<Array<ItemType>>([])

  useEffect(() => {
    const unsubscribeItems = firebase
      .firestore()
      .collection('items')
      .onSnapshot(
        (snapShot) => {
          const data = snapShot.docs.map((doc) => {
            return {
              imageUrl: doc.data().imageUrl,
              name: doc.data().name,
              price: doc.data().price,
              routeName: doc.data().routeName,
              id: doc.id,
            }
          })
          setItems(data)
        },
        () => {
          console.log(`+++> onSnapshot callback`)
        }
      )
    return () => unsubscribeItems()
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
