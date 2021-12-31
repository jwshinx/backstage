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
import SignInPageComponent from './pages/signin/SignInPageComponent'
import CheckoutPageComponent from './pages/checkout/CheckoutPageComponent'
import { auth, createUserProfileDocument } from '../src/firebase/firebase.utils'

export const App = () => {
  const [currentUser, setCurrentUser] = useState<any | null>(null)
  // const [cartItems, setCartItems] = useState<number[]>([])

  // let authSubscription
  useEffect(() => {
    console.log(`+++> App useEffect 0a`)
    auth.onAuthStateChanged(async (userAuth: any) => {
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
    })

    return () => {
      console.log(`+++> App useEffect 100`)
      // authSubscription
    }
  }, [])

  // const onAddToCartClickHandler = () => {
  //   console.log(`+++> App onAddToCartClickHandler clicked 0!`)
  //   // console.log(`+++> App onAddToCartClickHandler price:`, price)
  //   setCartItems([9898])
  //   console.log(`+++> App onAddToCartClickHandler clicked 1!`)
  // }

  console.log(`+++> App useEffect 1a   currentUser:`, currentUser)

  return (
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
                      <SignInPageComponent />
                    )
                  }
                />
                <Route
                  exact
                  path="/checkout"
                  component={CheckoutPageComponent}
                />
              </Switch>
            </div>
          </div>
        </div>
      </AuthContext.Provider>
    </CartProvider>
  )
}
