import React from 'react'
import useInput from '../../hooks/useInput'
import CustomButton from '../../ui/button/CustomButtonComponent'

export default function SignUpComponent() {
  // const [enteredDisplayName, setEnteredDisplayName] = useState('')
  // const [displayNameIsTouched, setDisplayNameIsTouched] = useState(false)

  const {
    value: enteredDisplayName,
    isValid: enteredDisplayNameIsValid,
    hasError: displayNameHasError,
    enteredValueChangeHandler: displayNameChangeHandler,
    inputBlurHandler: displayNameInputBlurHandler,
    resetValue: resetDisplayNameValue,
  } = useInput((value: string) => value.trim() !== '')

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailHasError,
    enteredValueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    resetValue: resetEmailValue,
  } = useInput((value: string) => value.includes('@'))

  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: passwordHasError,
    enteredValueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordInputBlurHandler,
    resetValue: resetPasswordValue,
  } = useInput((value: string) => value.trim() !== '')

  const {
    value: enteredConfirmPassword,
    isValid: enteredConfirmPasswordIsValid,
    hasError: confirmPasswordHasError,
    enteredValueChangeHandler: confirmPasswordChangeHandler,
    inputBlurHandler: confirmPasswordInputBlurHandler,
    resetValue: resetConfirmPasswordValue,
  } = useInput((value: string) => value.trim() !== '')

  const formSubmitHandler = (event: React.SyntheticEvent) => {
    event.preventDefault()
    console.log(`+++> SUC formSubmitHandler 0`)

    if (!formIsValid) {
      return
    }

    resetDisplayNameValue()
    resetEmailValue()
    resetPasswordValue()
    resetConfirmPasswordValue()
    console.log(`+++> SUC formSubmitHandler 1`)
  }

  const displayNameFormGroupStyle = enteredDisplayNameIsValid
    ? `form-group has-error has-feedback`
    : `form-group`

  const displayNameInputStyle = displayNameHasError
    ? `form-control is-invalid`
    : `form-control`

  const emailFormGroupStyle = enteredEmailIsValid
    ? `form-group has-error has-feedback`
    : `form-group`

  const emailInputStyle = emailHasError
    ? `form-control is-invalid`
    : `form-control`

  const passwordFormGroupStyle = enteredPasswordIsValid
    ? `form-group has-error has-feedback`
    : `form-group`

  const passwordInputStyle = passwordHasError
    ? `form-control is-invalid`
    : `form-control`

  const confirmPasswordFormGroupStyle = enteredConfirmPasswordIsValid
    ? `form-group has-error has-feedback`
    : `form-group`

  const confirmPasswordInputStyle = confirmPasswordHasError
    ? `form-control is-invalid`
    : `form-control`

  let formIsValid = false
  if (
    enteredDisplayNameIsValid &&
    enteredEmailIsValid &&
    enteredPasswordIsValid &&
    enteredConfirmPasswordIsValid
  ) {
    formIsValid = true
  }

  return (
    <div className="col-12">
      <div className="row">
        <div className="col">
          <h2>I do not have an account</h2>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <span className="text-secondary">
            Sign up with your email and password
          </span>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <form onSubmit={formSubmitHandler}>
            <div className="row my-3">
              <div className={displayNameFormGroupStyle}>
                <input
                  className={displayNameInputStyle}
                  placeholder="Display Name"
                  type="text"
                  id="display-name"
                  value={enteredDisplayName}
                  onChange={displayNameChangeHandler}
                  onBlur={displayNameInputBlurHandler}
                />
                {displayNameHasError && (
                  <p className="text-danger">
                    <small>Please enter a value.</small>
                  </p>
                )}
              </div>
            </div>
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
            <div className="row my-3">
              <div className={confirmPasswordFormGroupStyle}>
                <input
                  className={confirmPasswordInputStyle}
                  placeholder="Confirm Password"
                  type="password"
                  id="confirm-password"
                  value={enteredConfirmPassword}
                  onChange={confirmPasswordChangeHandler}
                  onBlur={confirmPasswordInputBlurHandler}
                />
                {confirmPasswordHasError && (
                  <p className="text-danger">
                    <small>Please enter a value.</small>
                  </p>
                )}
              </div>
            </div>

            <div className="row">
              <div className="col">
                <CustomButton isDisabled={!formIsValid} type="submit">
                  Sign Up
                </CustomButton>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
