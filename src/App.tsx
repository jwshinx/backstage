import { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import styles from './App.module.css'

import airbrake from './api/airbrake'
import GroupComponent from './components/group/GroupComponent'

export const App = () => {
  useEffect(() => {
    const fetch = async () => {
      try {
        const url = `/projects
/${process.env.REACT_APP_AIRBRAKE_PROJECT_ID}
/groups
?page=1
&limit=5
&order=last_notice
&key=${process.env.REACT_APP_AIRBRAKE_TOKEN}`

        // console.log('+++> cocktails url 1:', url)
        const { data }: { data: any } = await airbrake.get(url)
        console.log('+++> airbrake fetched data 6:', data)
      } catch (error) {
        console.log('+++> api error:', error)
      }
    }

    const identifier = setTimeout(() => {
      fetch()
    }, 2000)

    return () => {
      clearTimeout(identifier)
    }
  }, [])

  return (
    <Router>
      <div className="container">
        <div className="row mt-3">
          <div className={`col-3 ${styles.sidenav}`}>
            <nav>
              <ul className="list-group">
                <li className="list-group-item">
                  <Link to="/" className="item">
                    Home
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link to="/deploys" className="item">
                    Deploys
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link to="/groups" className="item">
                    Groups
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link to="/projects" className="item">
                    Projects
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="col-9">
            <div className="row mt-3 mb-3">
              <h3>
                {process.env.NODE_ENV} {process.env.name} {process.env.city}{' '}
                {process.env.COLOR}
              </h3>
            </div>

            <div className="row mt-3 mb-3">
              <Switch>
                <Route path="/deploys">
                  <div className="col-12">
                    <div className="card card-body">
                      <DeployComponent />
                    </div>
                  </div>
                </Route>
                <Route path="/projects">
                  <div className="col-12">
                    <div className="card card-body">
                      <ProjectComponent />
                    </div>
                  </div>
                </Route>
                <Route path="/groups">
                  <div className="col-12">
                    <div className="card card-body">
                      <GroupComponent />
                    </div>
                  </div>
                </Route>
                <Route path="/">
                  <div className="col-12">
                    <div className="card card-body">
                      <HomeComponent />
                    </div>
                  </div>
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  )
}

function HomeComponent() {
  return <h4>Home component</h4>
}

function DeployComponent() {
  return <h4>Deploy component</h4>
}

function ProjectComponent() {
  return <h4>Project component</h4>
}
