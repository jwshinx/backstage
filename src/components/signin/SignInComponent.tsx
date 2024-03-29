import React, { useState } from 'react'
import styles from '../../ui/button/CustomButtonComponent.module.css'
import CustomButton from '../../ui/button/CustomButtonComponent'
import useInput from '../../hooks/useInput'
import { auth, signInWithGoogle } from '../../firebase/firebase.utils'

export default function SignInComponent() {
  const [invalidLogin, setInvalidLogin] = useState(false)

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: resetEmailValue,
  } = useInput((value: string) => value.includes('@'))

  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordInputBlurHandler,
    reset: resetPasswordValue,
  } = useInput((value: string) => value.trim() !== '')

  const formSubmitHandler = async (event: React.SyntheticEvent) => {
    event.preventDefault()

    if (!formIsValid) {
      return
    }

    try {
      await auth.signInWithEmailAndPassword(enteredEmail, enteredPassword)
      resetEmailValue()
      resetPasswordValue()
    } catch (error) {
      setInvalidLogin(true)
    }
  }

  const emailFormGroupStyle = emailHasError
    ? `form-group has-error has-feedback`
    : `form-group`

  const passwordFormGroupStyle = emailHasError
    ? `form-group has-error has-feedback`
    : `form-group`

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
    <div className="col-12">
      <div className="row">
        <div className="col">
          <h2>I already have an account</h2>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <span className="text-secondary">
            Sign in with your email and password
          </span>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col">
          {invalidLogin && <p className="text-danger">Invalid login.</p>}
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <form onSubmit={formSubmitHandler}>
            <div className="row my-3">
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
            </div>
            <div className="row my-3">
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
            </div>

            <div className="row">
              <div className="col-4">
                <CustomButton isDisabled={!formIsValid} type="submit">
                  Sign In
                </CustomButton>
              </div>
              <div className="col-8">
                <button
                  className={`${styles['custom-button']} ${styles['google-sign-in']}`}
                  onClick={signInWithGoogle}
                  type="button"
                >
                  Sign in with Google
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
