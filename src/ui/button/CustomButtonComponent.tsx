import React from 'react'

import styles from './CustomButtonComponent.module.css'

export default function CustomButtonComponent({
  isDisabled,
  type,
  children,
  onClick,
  ...otherProps
}: {
  isDisabled: boolean
  type: 'button' | 'submit' | 'reset' | undefined
  children: any
  onClick?: () => void
  otherProps?: any
}) {
  console.log(`+++> CBC otherProps:`, otherProps)
  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      className={styles['custom-button']}
      type={type}
    >
      {children}
    </button>
  )
}
