import React, { useState } from 'react'

const Clickers = () => {
  const [count, setCount] = useState(0)

  const increase = () => {
    setCount(count + 1)
  }
  const decrease = () => {
    setCount(count - 1)
  }
  return (
    <div>
      <button onClick={increase}>Up</button>
      <button onClick={decrease}>Down</button>
      <span data-testid='clickersId'>{count}</span>
    </div>
  )
}

export default Clickers