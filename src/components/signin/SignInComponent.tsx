import React from 'react'
// import styles from './SignInComponent.module.css'
import styles from '../../ui/button/CustomButtonComponent.module.css'
import CustomButton from '../../ui/button/CustomButtonComponent'
import useInput from '../../hooks/useInput'
import { signInWithGoogle } from '../../firebase/firebase.utils'

export default function SignInComponent() {
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailHasError,
    enteredValueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
  } = useInput((value: string) => value.includes('@'))

  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: passwordHasError,
    enteredValueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordInputBlurHandler,
  } = useInput((value: string) => value.trim() !== '')

  const formSubmitHandler = (event: React.SyntheticEvent) => {
    event.preventDefault()

    if (!formIsValid) {
      return
    }

    console.log(`+++> SIC formSubmitHandler 0`)
  }

  const emailFormGroupStyle = emailHasError
    ? `form-group my-3 has-error has-feedback`
    : `form-group my-3`

  const passwordFormGroupStyle = emailHasError
    ? `form-group my-3 has-error has-feedback`
    : `form-group my-3`

  const emailInputStyle = emailHasError
    ? `form-control is-invalid`
    : `form-control`
  const passwordInputStyle = passwordHasError
    ? `form-control is-invalid`
    : `form-control`

  let formIsValid = false
  if (enteredEmailIsValid && enteredPasswordIsValid) {
    formIsValid = true
  }

  return (
    <div className="col-8">
      <div className="row">
        <div className="col-12">
          <h2>I already have an account</h2>
          <span className="text-secondary">
            Sign in with your email and password
          </span>

          <form onSubmit={formSubmitHandler}>
            <div className={emailFormGroupStyle}>
              <input
                className={emailInputStyle}
                placeholder="Email"
                type="email"
                id="email"
                value={enteredEmail}
                onChange={emailChangeHandler}
                onBlur={emailInputBlurHandler}
              />
              {emailHasError && (
                <p className="text-danger">
                  <small>Please enter a value.</small>
                </p>
              )}
            </div>
            <div className={passwordFormGroupStyle}>
              <input
                className={passwordInputStyle}
                placeholder="Password"
                type="password"
                id="password"
                value={enteredPassword}
                onChange={passwordChangeHandler}
                onBlur={passwordInputBlurHandler}
              />
              {passwordHasError && (
                <p className="text-danger">
                  <small>Please enter a value.</small>
                </p>
              )}
            </div>

            <br />
            <div className="form-actions">
              <CustomButton isDisabled={!formIsValid} type="submit">
                Sign In
              </CustomButton>
              <button
                className={`google-sign-in ${styles['custom-button']}`}
                onClick={signInWithGoogle}
                type="submit"
              >
                Sign in with Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
