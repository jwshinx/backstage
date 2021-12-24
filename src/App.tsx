import React from 'react'
// import { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
// import styles from './App.module.css'

import HomepageComponent from './pages/homepage/HomepageComponent'

export const App = () => {
  return (
    <div className="container">
      <div className="col-12">
        <div className="row mt-3 mb-3">
          <h3>
            {process.env.NODE_ENV} {process.env.name} {process.env.city}{' '}
            {process.env.COLOR}
          </h3>
        </div>

        <div className="row mt-3 mb-3">
          <Switch>
            <Route path="/">
              <div className="col-12">
                <HomepageComponent />
              </div>
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  )
}
