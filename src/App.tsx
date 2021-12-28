import React, { useEffect, useState } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import HeaderComponent from './components/header/HeaderComponent'
import HomepageComponent from './pages/homepage/HomepageComponent'
import ShopPageComponent from './pages/shop/ShopPageComponent'
import SignInPageComponent from './pages/signin/SignInPageComponent'
import { auth, createUserProfileDocument } from '../src/firebase/firebase.utils'

export const App = () => {
  const [currentUser, setCurrentUser] = useState<any | null>(null)

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

  console.log(`+++> App useEffect 1a   currentUser:`, currentUser)

  return (
    <div className="container">
      <div className="col-12">
        <div className="row mt-3 mb-3">
          <HeaderComponent currentUser={currentUser} />
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
          </Switch>
        </div>
      </div>
    </div>
  )
}
