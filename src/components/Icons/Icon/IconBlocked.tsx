import React from 'react'

interface IconBlockedProps {
  size: number
  className?: string
}

const IconBlocked = (props: IconBlockedProps) => {
  return (
    <svg
      className={props.className}
      width={props.size}
      height={props.size}
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth='1.5'
      stroke='black'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636'
      />
    </svg>
  )
}

export default IconBlocked
