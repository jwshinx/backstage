import React, { useState } from 'react'
import styles from './SignInComponent.module.css'

export default function SignInComponent() {
  const [enteredEmail, setEnteredEmail] = useState('')
  const [emailIsTouched, setEmailIsTouched] = useState(false)
  const [enteredPassword, setEnteredPassword] = useState('')
  const [passwordIsTouched, setPasswordIsTouched] = useState(false)

  const formSubmitHandler = (event: React.SyntheticEvent) => {
    event.preventDefault()
    console.log(`+++> SIC formSubmitHandler 0`)
  }

  const emailChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    console.log(`+++> SIC emailChangeHandler 0:`, event.currentTarget.value)
    setEnteredEmail(event.currentTarget.value)
  }

  const emailInputBlurHandler = (event: React.FormEvent<HTMLInputElement>) => {
    console.log(`+++> SIC emailInputBlurHandler 0:`, event.currentTarget.value)
    setEmailIsTouched(true)
  }

  const passwordChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    console.log(`+++> SIC passwordChangeHandler 0:`, event.currentTarget.value)
    setEnteredPassword(event.currentTarget.value)
  }

  const passwordInputBlurHandler = (
    event: React.FormEvent<HTMLInputElement>
  ) => {
    console.log(
      `+++> SIC passwordInputBlurHandler 0:`,
      event.currentTarget.value
    )
    setPasswordIsTouched(true)
  }

  const emailInputStyle = `six wide field input`
  const passwordInputStyle = `six wide field input`

  const enteredEmailIsValid = enteredEmail.includes('@')
  const enteredPasswordIsValid = enteredPassword.trim() !== ''

  const formIsValid =
    enteredEmailIsValid &&
    emailIsTouched &&
    enteredPasswordIsValid &&
    passwordIsTouched

  return (
    <div className={styles['sign-in']}>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={formSubmitHandler} className="ui form">
        <div className={emailInputStyle}>
          <input
            placeholder="Email"
            type="text"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={emailInputBlurHandler}
          />
        </div>
        <div className={passwordInputStyle}>
          <input
            placeholder="Password"
            type="text"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={passwordInputBlurHandler}
          />
        </div>

        <br />
        <div className="form-actions">
          <button disabled={!formIsValid} className="ui button primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}
