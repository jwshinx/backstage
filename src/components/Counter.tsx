import { useState } from 'react'

import styles from './Counter.module.css'

export const Counter = () => {
  const [count, setCount] = useState(0)
  return (
    <div className={`counter ${styles.dark}`}>
      <h3>Counter</h3>
      <button
        className="btn btn-primary"
        onClick={() => setCount((c) => c + 1)}
      >
        Count - {count}
      </button>
    </div>
  )
}
