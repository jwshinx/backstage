import React, { useState, useEffect } from 'react'
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

interface CategoryType {
  id: string
  name: string
  linkUrl: string
  imageUrl: string
  size?: string
}

interface CategoryContextType {
  categories: Array<CategoryType>
}

const CategoryContext = React.createContext<CategoryContextType>({
  categories: [],
})

export const CategoryContextProvider = (props: any) => {
  const [categories, setCategories] = useState<Array<CategoryType>>([])
  useEffect(() => {
    const unsubscribeCategories = firebase
      .firestore()
      .collection('categories')
      .onSnapshot(
        (snapShot) => {
          const data = snapShot.docs.map((doc) => {
            return {
              linkUrl: doc.data().linkUrl,
              imageUrl: doc.data().imageUrl,
              name: doc.data().name,
              size: doc.data().size,
              id: doc.id,
            }
          })
          setCategories(data)
        },
        () => {
          console.log(`+++> onSnapshot callback`)
        }
      )
    return () => unsubscribeCategories()
  }, [])

  return (
    <CategoryContext.Provider
      value={{
        categories: categories,
      }}
    >
      {props.children}
    </CategoryContext.Provider>
  )
}

export default CategoryContext
