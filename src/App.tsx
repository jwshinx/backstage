import React, { useEffect, useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import HeaderComponent from './components/header/HeaderComponent'
import HomepageComponent from './pages/homepage/HomepageComponent'
import ShopPageComponent from './pages/shop/ShopPageComponent'
import SignInPageComponent from './pages/signin/SignInPageComponent'
import { auth } from '../src/firebase/firebase.utils'

export const App = () => {
  const [currentUser, setCurrentUser] = useState<any | null>(null)

  // let authSubscription
  useEffect(() => {
    console.log(`+++> App useEffect 0a`)
    auth.onAuthStateChanged((user: any) => {
      setCurrentUser(user)
    })
    // auth.onAuthStateChanged((user) => setCurrentUser({ currentUser: user }))

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
            <Route exact path="/signin" component={SignInPageComponent} />
          </Switch>
        </div>
      </div>
    </div>
  )
}
