import React from 'react'
import { Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
// import styles from './App.module.css'

import HeaderComponent from './components/header/HeaderComponent'

import HomepageComponent from './pages/homepage/HomepageComponent'
import ShopPageComponent from './pages/shop/ShopPageComponent'
import SignInPageComponent from './pages/signin/SignInPageComponent'

export const App = () => {
  return (
    <div className="container">
      <div className="col-12">
        <div className="row mt-3 mb-3">
          <HeaderComponent />
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
