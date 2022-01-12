import React, { useEffect, useState } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import AuthContext from './store/auth-context'
import CartProvider from './providers/CartProvider'
import { CategoryContextProvider } from './store/category-context'
import HeaderComponent from './components/header/HeaderComponent'
import HomepageComponent from './pages/homepage/HomepageComponent'
import ShopPageComponent from './pages/shop/ShopPageComponent'
import CategoryShopPageComponent from './pages/shop/CategoryShopPageComponent'
import SignInAndSignUpPageComponent from './pages/signin/SignInAndSignUpPageComponent'
import CheckoutPageComponent from './pages/checkout/CheckoutPageComponent'
import GuitarCreatePageComponent from './pages/admin/GuitarCreatePageComponent'

import { auth, createUserProfileDocument } from '../src/firebase/firebase.utils'

export const App = () => {
  const [currentUser, setCurrentUser] = useState<any | null>(null)

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
    <CategoryContextProvider>
      <CartProvider>
        <AuthContext.Provider value={{ user: currentUser }}>
          <div className="container">
            <div className="col-12">
              <div className="row mt-3 mb-3">
                <HeaderComponent />
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
                  <Route
                    exact
                    path="/admin/guitars/new"
                    component={GuitarCreatePageComponent}
                  />
                </Switch>
              </div>
            </div>
          </div>
        </AuthContext.Provider>
      </CartProvider>
    </CategoryContextProvider>
  )
}
