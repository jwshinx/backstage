import React, { useReducer } from 'react'

interface InputStateType {
  value: string
  isTouched: boolean
}

interface DefaultActionType {
  type: string
  value: string
}

interface OptionalValueActionType {
  type: string
  value?: string
}

const initialInputState: InputStateType = {
  value: '',
  isTouched: false,
}

const inputStateReducer = (
  state: InputStateType,
  action: DefaultActionType | OptionalValueActionType
): InputStateType => {
  if (action.type === 'BLUR') {
    return { isTouched: true, value: state.value }
  }
  if (action.type === 'INPUT') {
    return { isTouched: state.isTouched, value: action.value! }
  }
  if (action.type === 'RESET') {
    return { isTouched: false, value: '' }
  }
  return initialInputState
}

export default function useInput(validateFn: (arg: string) => boolean) {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  )
  const valueIsValid = validateFn(inputState.value)
  const hasError = !valueIsValid && inputState.isTouched

  const valueChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    dispatch({ type: 'INPUT', value: event.currentTarget.value })
  }

  const inputBlurHandler = () => {
    dispatch({ type: 'BLUR' })
  }

  const reset = () => {
    dispatch({ type: 'RESET' })
  }

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  }
}
