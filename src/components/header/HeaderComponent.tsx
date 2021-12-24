import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../../assets/radio_black_24dp.svg'

import styles from './HeaderComponent.module.css'

export default function HeaderComponent() {
  return (
    <div className="ui secondary pointing menu">
      <div className="row">
        <div className={`col-1 ${styles['logo-container']}`}>
          <Link className="logo-container" to="/">
            <div className="logo">
              <img src={Logo} alt="logo" />
            </div>
          </Link>
        </div>

        <div className="col-5"></div>

        <div className={`col-6 ${styles.options}`}>
          <Link className={`p-2 ${styles.option}`} to="/shop">
            SHOP
          </Link>
          <Link className={`p-2 ${styles.option}`} to="/shop">
            CONTACT
          </Link>
          <Link className={`p-2 ${styles.option}`} to="/signin">
            SIGN IN
          </Link>
        </div>
      </div>
    </div>
  )
}
