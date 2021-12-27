import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/firebase.utils'
import Logo from '../../assets/radio_black_24dp.svg'
import CartIconComponent from '../cart-icon/CartIconComponent'

import styles from './HeaderComponent.module.css'

export default function HeaderComponent(props: any) {
  console.log(`+++> HeaderComponent props:`, props)

  let currentUser = null
  if (props.currentUser) {
    currentUser = props.currentUser.currentUser
  }
  // const { currentUser } = props.currentUser
  console.log(`+++> HeaderComponent currentUser:`, currentUser)
  // console.log(
  //   `+++> HeaderComponent currentUser.displayName:`,
  //   currentUser.currentUser.displayName
  // )
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

        <div className="col-3">
          {currentUser && <span>{currentUser.displayName}</span>}
        </div>

        <div className={`col-8`}>
          <div className="row">
            <div className="col-sm-auto">
              <Link to="/shop">SHOP</Link>
            </div>
            <div className="col-sm-auto">
              <Link to="/shop">CONTACT</Link>
            </div>
            {currentUser ? (
              <div
                className={`col-sm-auto link-primary ${styles['sign-out']}`}
                onClick={() => auth.signOut()}
                aria-hidden="true"
              >
                SIGN OUT
              </div>
            ) : (
              <div className="col-sm-auto">
                <Link to="/signin">SIGN IN</Link>
              </div>
            )}
            <div className="col-sm-auto">
              <CartIconComponent />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
