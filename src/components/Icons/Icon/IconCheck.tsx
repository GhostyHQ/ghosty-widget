import React from 'react'

interface IconCheckProps {
  size: number
  color: string
  className?: string
}

const IconCheck = (props: IconCheckProps) => {
  return (
    <svg
      className={props.className}
      width={props.size}
      height={props.size}
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth='3'
      stroke={props.color}
    >
      <path strokeLinecap='round' strokeLinejoin='round' d='M4.5 12.75l6 6 9-13.5' />
    </svg>
  )
}

export default IconCheck
