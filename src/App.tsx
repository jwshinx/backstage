import React, { useEffect, useState } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// import CartContext from './store/cart-context'
import AuthContext from './store/auth-context'
import CartProvider from './providers/CartProvider'
import HeaderComponent from './components/header/HeaderComponent'
import HomepageComponent from './pages/homepage/HomepageComponent'
import ShopPageComponent from './pages/shop/ShopPageComponent'
import CategoryShopPageComponent from './pages/shop/CategoryShopPageComponent'
import SignInAndSignUpPageComponent from './pages/signin/SignInAndSignUpPageComponent'
import CheckoutPageComponent from './pages/checkout/CheckoutPageComponent'
import { auth, createUserProfileDocument } from '../src/firebase/firebase.utils'

// import { collection, query, where, getDocs } from 'firebase/firestore'
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

interface CategoryType {
  id: string
  name: string
  linkUrl: string
  imageUrl: string
  size?: string
}

export const App = () => {
  const [currentUser, setCurrentUser] = useState<any | null>(null)
  // const [cartItems, setCartItems] = useState<number[]>([])
  const [categories, setCategories] = useState<Array<CategoryType>>([])

  useEffect(() => {
    console.log(`+++> App useEffect categories 0a`)

    const unsubscribeCategories = firebase
      .firestore()
      .collection('categories')
      .onSnapshot(
        (snapShot) => {
          const data = snapShot.docs.map((doc) => {
            console.log(`+++> @joel doc data:`, doc.data())

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

  // let authSubscription
  useEffect(() => {
    console.log(`+++> App useEffect 0a`)
    const unsubscribeFromAuth = auth.onAuthStateChanged(
      async (userAuth: any) => {
        console.log(`+++> App useEffect 1 userAuth:`, userAuth)
        if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth, {
            color: 'red',
          })
          userRef!.onSnapshot((snapShot) => {
            console.log(`+++> App useEffect 2 snapShot:`, snapShot)
            console.log(`+++> App useEffect 2 snapShot.id:`, snapShot.id)
            console.log(
              `+++> App useEffect 2 snapShot.data():`,
              snapShot.data()
            )
            setCurrentUser({
              currentUser: {
                id: snapShot.id,
                ...snapShot.data(),
              },
            })
          })
        } else {
          setCurrentUser({ currentUser: userAuth })
        }
      }
    )

    return () => {
      console.log(`+++> App useEffect 100`)
      // authSubscription
      unsubscribeFromAuth()
    }
  }, [])

  return (
    <CartProvider>
      <AuthContext.Provider value={{ user: currentUser }}>
        <div className="container">
          <div className="col-12">
            <div className="row mt-3 mb-3">
              <HeaderComponent />
            </div>

            <div className="row">
              {categories.map((item) => (
                <p key={item.id}>
                  {item.id} {item.name} {item.linkUrl} - {item.size || 'NA'}
                </p>
              ))}
            </div>

            <div className="row mt-3 mb-3">
              <Switch>
                <Route exact path="/" component={HomepageComponent} />
                <Route exact path="/shop" component={ShopPageComponent} />
                <Route
                  path="/signin"
                  exact
                  render={() =>
                    currentUser && currentUser.currentUser ? (
                      <Redirect to="/" />
                    ) : (
                      <SignInAndSignUpPageComponent />
                    )
                  }
                />
                <Route
                  exact
                  path="/checkout"
                  component={CheckoutPageComponent}
                />
                <Route
                  exact
                  path="/shop/:category"
                  component={CategoryShopPageComponent}
                />
              </Switch>
            </div>
          </div>
        </div>
      </AuthContext.Provider>
    </CartProvider>
  )
}
