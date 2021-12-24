import React from 'react'

import styles from './CustomButtonComponent.module.css'

export default function CustomButtonComponent({
  isDisabled,
  type,
  children,
}: {
  isDisabled: boolean
  type: 'button' | 'submit' | 'reset' | undefined
  children: any
}) {
  return (
    <button
      disabled={isDisabled}
      className={styles['custom-button']}
      type={type}
    >
      {children}
    </button>
  )
}
