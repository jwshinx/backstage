import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/firebase.utils'
import Logo from '../../assets/radio_black_24dp.svg'
import CartIconComponent from '../cart-icon/CartIconComponent'
import CartDropdownComponent from '../cart-dropdown/CartDropdownComponent'

/* eslint-disable */
// @ts-ignore
import CartContext from '../../store/cart-context'

import styles from './HeaderComponent.module.css'

export default function HeaderComponent(props: any) {
  const ctx: any = useContext(CartContext)
  const [showCart, setShowCart] = useState(false)

  console.log(`+++> HeaderComponent props:`, props)

  let loggedInUser = null
  if (ctx && ctx.user && ctx.user.currentUser) {
    console.log(
      `+++> HeaderComponent ctx.user.currentUser:`,
      ctx.user.currentUser
    )
    loggedInUser = ctx.user.currentUser
  } else {
    console.log(`+++> HeaderComponent ctx.user.currentUser is undefined`)
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
