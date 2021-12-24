import React from 'react'

import SignInComponent from '../../components/signin/SignInComponent'
import styles from './SignInPageComponent.module.css'

export default function SignInPageComponent() {
  return (
    <div className={styles['sign-in']}>
      <SignInComponent />
    </div>
  )
}
