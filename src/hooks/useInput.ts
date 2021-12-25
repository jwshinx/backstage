import { useState } from 'react'

export default function useInput(validationFn: any) {
  const [enteredValue, setEnteredValue] = useState('')
  const [isTouched, setIsTouched] = useState(false)

  const valueIsValid = validationFn(enteredValue)

  const inputHasError = !valueIsValid && isTouched

  const enteredValueChangeHandler = (
    event: React.FormEvent<HTMLInputElement>
  ) => {
    console.log(
      `+++> useInput enteredValueChangeHandler 0:`,
      event.currentTarget.value
    )
    setEnteredValue(event.currentTarget.value)
  }

  const inputBlurHandler = (event: React.FormEvent<HTMLInputElement>) => {
    console.log(`+++> useInput inputBlurHandler 0:`, event.currentTarget.value)
    setIsTouched(true)
  }

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError: inputHasError,
    enteredValueChangeHandler: enteredValueChangeHandler,
    inputBlurHandler: inputBlurHandler,
  }
}
