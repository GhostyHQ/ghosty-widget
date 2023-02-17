import React from 'react'

interface IconArrowLeftProps {
  size: number
  className?: string
}

const IconArrowLeft = (props: IconArrowLeftProps) => {
  return (
    <svg
      className={props.className}
      width={props.size}
      height={props.size}
      fill='none'
      stroke='currentColor'
      strokeWidth='1.5'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      aria-hidden='true'
    >
      <path strokeLinecap='round' strokeLinejoin='round' d='M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18'></path>
    </svg>
  )
}

export default IconArrowLeft
