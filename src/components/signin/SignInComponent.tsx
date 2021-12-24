import React, { useState } from 'react'
// import styles from './SignInComponent.module.css'
import CustomButton from '../../ui/button/CustomButtonComponent'

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

  const emailInputStyle = `form-group my-3`
  const passwordInputStyle = `form-group my-3`

  const enteredEmailIsValid = enteredEmail.includes('@')
  const enteredPasswordIsValid = enteredPassword.trim() !== ''

  const formIsValid =
    enteredEmailIsValid &&
    emailIsTouched &&
    enteredPasswordIsValid &&
    passwordIsTouched

  return (
    <div className="col-6">
      <div className="row">
        <div className="col-12">
          <h2>I already have an account</h2>
          <span className="text-secondary">
            Sign in with your email and password
          </span>

          <form onSubmit={formSubmitHandler}>
            <div className={emailInputStyle}>
              <input
                className="form-control"
                placeholder="Email"
                type="email"
                id="email"
                value={enteredEmail}
                onChange={emailChangeHandler}
                onBlur={emailInputBlurHandler}
              />
            </div>
            <div className={passwordInputStyle}>
              <input
                className="form-control"
                placeholder="Password"
                type="password"
                id="password"
                value={enteredPassword}
                onChange={passwordChangeHandler}
                onBlur={passwordInputBlurHandler}
              />
            </div>

            <br />
            <div className="form-actions">
              <CustomButton isDisabled={!formIsValid} type="submit">
                Sign In
              </CustomButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
