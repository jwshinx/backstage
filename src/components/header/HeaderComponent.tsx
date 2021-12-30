import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/firebase.utils'
import Logo from '../../assets/radio_black_24dp.svg'
import CartIconComponent from '../cart-icon/CartIconComponent'
import CartDropdownComponent from '../cart-dropdown/CartDropdownComponent'

/* eslint-disable */
// @ts-ignore
import CartContext from '../../store/cart-context'
/* eslint-disable */
// @ts-ignore
import AuthContext from '../../store/auth-context'

import styles from './HeaderComponent.module.css'

export default function HeaderComponent(props: any) {
  const cartCtx: any = useContext(CartContext)
  const authCtx: any = useContext(AuthContext)
  const [showCart, setShowCart] = useState(false)

  console.log(`+++> HeaderComponent props:`, props)
  console.log(`+++> HeaderComponent cartCtx:`, cartCtx)

  let loggedInUser = null
  if (authCtx && authCtx.user && authCtx.user.currentUser) {
    console.log(
      `+++> HeaderComponent authCtx.user.currentUser:`,
      authCtx.user.currentUser
    )
    loggedInUser = authCtx.user.currentUser
  } else {
    console.log(`+++> HeaderComponent authCtx.user.currentUser is undefined`)
  }

  const cartIconClickHandler = () => {
    setShowCart((prevState) => !prevState)
  }

  return (
    <div className="ui secondary pointing menu">
      <div className={`row ${styles.header}`}>
        <div className={`col-1 ${styles['logo-container']}`}>
          <Link className="logo-container" to="/">
            <div className="logo">
              <img src={Logo} alt="logo" />
            </div>
          </Link>
        </div>

        <div className="col-3">
          {loggedInUser && <span>{loggedInUser.displayName}</span>}
        </div>

        <div className={`col-8`}>
          <div className="row">
            <div className="col-sm-auto">
              <Link to="/shop">SHOP</Link>
            </div>
            <div className="col-sm-auto">
              <Link to="/shop">CONTACT</Link>
            </div>
            {loggedInUser ? (
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
              <CartIconComponent cartIconClickHandler={cartIconClickHandler} />
              {showCart && (
                <div className={`${styles['cart-dropdown-area']}`}>
                  <CartDropdownComponent />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
