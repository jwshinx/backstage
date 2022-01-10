import React from 'react'

import SignInComponent from '../../components/signin/SignInComponent'
import SignUpComponent from '../../components/signup/SignUpComponent'
import styles from './SignInAndSignUpPageComponent.module.css'

export default function SignInAndSignUpPageComponent() {
  return (
    <div className={`row ${styles['sign-in']}`}>
      <div className={`col-6`}>
        <SignInComponent />
      </div>
      <div className={`col-6`}>
        <SignUpComponent />
      </div>
    </div>
  )
}
