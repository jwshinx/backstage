import React from 'react'
import { Link } from 'react-router-dom'

// import { ReactComponent as Logo } from '../../assets/radio_black_24dp.svg'

// import { ReactComponent as Logo } from '../../assets/radio_black_24dp.svg'

import styles from './HeaderComponent.module.css'

export default function HeaderComponent() {
  return (
    <div className="ui secondary pointing menu">
      <div className="row">
        <div className={`col-1 ${styles['logo-container']}`}>
          <Link className="logo-container" to="/">
            <div className="logo">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#000000"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M20 6H8.3l8.26-3.34L15.88 1 3.24 6.15C2.51 6.43 2 7.17 2 8v12c0 1.1.89 2 2 2h16c1.11 0 2-.9 2-2V8c0-1.11-.89-2-2-2zm0 2v3h-2V9h-2v2H4V8h16zM4 20v-7h16v7H4z" />
                <circle cx="8" cy="16.48" r="2.5" />
              </svg>
            </div>
          </Link>
        </div>

        <div className="col-7"></div>

        <div className={`col-4 ${styles.options}`}>
          <Link className={`p-2 ${styles.option}`} to="/shop">
            SHOP
          </Link>
          <Link className={`p-2 ${styles.option}`} to="/shop">
            CONTACT
          </Link>
        </div>
      </div>
    </div>
  )
}
