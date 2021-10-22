import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import styles from './App.module.css'
import IMAGE from './gsw.png'
import LOGO from './logo.svg'
import { Counter } from './components/Counter'
import Footer from './components/Footer'

export const App = () => {
  return (
    <Router>
      <div className="container">
        <div className="row">
          <div className={`col-3 ${styles.sidenav}`}>
            <h2>Logo</h2>
            <nav>
              <ul className="list-group">
                <li className="list-group-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="list-group-item">
                  <Link to="/age">Age</Link>
                </li>
                <li className="list-group-item">
                  <Link to="/gender">Gender</Link>
                </li>
                <li className="list-group-item">
                  <Link to="/geo">Geo</Link>
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
              <div className="col-3">
                <img src={IMAGE} alt="Golden State Warriors" width="200" />
              </div>

              <div className="col-3">
                <img src={LOGO} alt="Golden State Warriors" width="200" />
              </div>

              <div className="col-3">
                <Counter />
              </div>
              <div className="col-3">
                <div className={`well ${styles.orange}`}>
                  <h4>Dashboard</h4>
                </div>
              </div>
            </div>

            <div className="row mt-3 mb-3">
              <div className="col-3">
                <div className="card card-body bg-light">
                  <h4>Users</h4>
                </div>
              </div>
              <div className="col-3">
                <div className="card card-body bg-light">
                  <p>ketchupp</p>
                </div>
              </div>
              <div className="col-3">
                <div className="card card-body bg-faded">
                  <p>lettuce</p>
                </div>
              </div>
              <div className="col-3">
                <div className="card card-body bg-info">
                  <h4>Bounce</h4>
                  <p>30%</p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-4">
                <div className="card card-body bg-faded">
                  <p>Text</p>
                  <p>Text</p>
                  <p>Text</p>
                </div>
              </div>
              <div className="col-4">
                <div className="card card-body bg-warning">
                  <p>Text</p>
                  <p>Text</p>
                  <p>Text</p>
                </div>
              </div>
              <div className="col-4">
                <div className="card card-body bg-secondary">
                  <p className="text-danger">Text</p>
                  <p>Text</p>
                  <p>Text</p>
                </div>
              </div>
            </div>

            <div className="row mt-3 mb-3">
              <Switch>
                <Route path="/age">
                  <div className="col-12">
                    <div className="card card-body">
                      <AgeComponent />
                    </div>
                  </div>
                </Route>
                <Route path="/gender">
                  <div className="col-12">
                    <div className="card card-body">
                      <GenderComponent />
                    </div>
                  </div>
                </Route>
                <Route path="/geo">
                  <div className="col-12">
                    <div className="card card-body">
                      <GeoComponent />
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

            <div className="row">
              <div className="col-8">
                <div className="card card-body bg-danger">
                  <Footer />
                </div>
              </div>
              <div className="col-4">
                <div className="card card-body bg-success">
                  <p>Text</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Router>
  )
}

function HomeComponent() {
  return <h4>Home</h4>
}

function GeoComponent() {
  return <h4>Geo component</h4>
}

function AgeComponent() {
  return <h4>Age component</h4>
}

function GenderComponent() {
  return <h4>Gender component</h4>
}
