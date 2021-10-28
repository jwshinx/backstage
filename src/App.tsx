import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import styles from './App.module.css'

export const App = () => {
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

function GroupComponent() {
  return <h4>Group component</h4>
}

function DeployComponent() {
  return <h4>Deploy component</h4>
}

function ProjectComponent() {
  return <h4>Project component</h4>
}
