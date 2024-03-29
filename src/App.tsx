import React, { useEffect, useState } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { QueryClient, QueryClientProvider } from 'react-query'

import AuthContext from './store/auth-context'
import CartProvider from './providers/CartProvider'
import { CategoryContextProvider } from './store/category-context'
// import { ItemContextProvider } from './store/item-context'
import { ItemContextProvider } from './store/item-context'
import HeaderComponent from './components/header/HeaderComponent'
import HomepageComponent from './pages/homepage/HomepageComponent'
import ShopPageComponent from './pages/shop/ShopPageComponent'
import CategoryShopPageComponent from './pages/shop/CategoryShopPageComponent'
import SignInAndSignUpPageComponent from './pages/signin/SignInAndSignUpPageComponent'
import CheckoutPageComponent from './pages/checkout/CheckoutPageComponent'
// import ItemCreatePageComponent from './pages/admin/ItemCreatePageComponent'
import ItemCreatePageComponent from './pages/admin/ItemCreatePageComponent'

import { auth, createUserProfileDocument } from '../src/firebase/firebase.utils'
import { CurrentUserType, UserType, AuthTimeType } from './types/auth'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      // refetchOnmount: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: 300000,
    },
  },
})

export const App = () => {
  const [currentUser, setCurrentUser] = useState<CurrentUserType | null>(null)
  const isLoggedIn = currentUser && currentUser.currentUser

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(
      async (userAuth: any) => {
        if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth, {
            color: 'red',
          })
          userRef!.onSnapshot((snapShot) => {
            setCurrentUser({
              currentUser: {
                id: snapShot.id,
                ...(snapShot.data() as {
                  displayName: string
                  email: string
                  color: string
                  createdAt: AuthTimeType
                }),
              },
            })
          })
        } else {
          setCurrentUser({ currentUser: userAuth })
        }
      }
    )

    return () => {
      // authSubscription
      unsubscribeFromAuth()
    }
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <ItemContextProvider>
        <CategoryContextProvider>
          <CartProvider>
            <AuthContext.Provider value={{ user: currentUser as UserType }}>
              <div className="container">
                <div className="col-12">
                  <div className="row mt-3 mb-3">
                    <HeaderComponent />
                  </div>

                  <div className="row mt-3 mb-3">
                    <Switch>
                      <Route exact path="/" component={HomepageComponent} />
                      <Route exact path="/shop" component={ShopPageComponent} />
                      {!isLoggedIn && (
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
                      )}
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
                      {isLoggedIn && (
                        <Route
                          exact
                          path="/admin/:category/new"
                          component={ItemCreatePageComponent}
                        />
                      )}
                      <Route path="*">
                        <Redirect to="/" />
                      </Route>
                    </Switch>
                  </div>
                </div>
              </div>
            </AuthContext.Provider>
          </CartProvider>
        </CategoryContextProvider>
      </ItemContextProvider>
    </QueryClientProvider>
  )
}
