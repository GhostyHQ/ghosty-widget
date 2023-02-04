import React, { useState } from 'react'

interface MyCounterProps {
  value?: number
}

const MyCounter = ({ value = 0 }: MyCounterProps) => {
  const [counter, setCounter] = useState<number>(value)

  const onMinus = () => {
    setCounter((prev) => prev - 1)
  }

  const onPlus = () => {
    setCounter((prev) => prev + 1)
  }

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={onMinus}>-</button>
      <button onClick={onPlus}>+</button>
    </div>
  )
}

export default MyCounter
