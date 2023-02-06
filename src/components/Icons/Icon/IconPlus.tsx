import React from 'react'

interface IconPlusProps {
  size: number
  color: string
  className?: string
}

const IconPlus = (props: IconPlusProps) => {
  return (
    <svg
      className={props.className}
      width={props.size}
      height={props.size}
      fill='none'
      stroke={props.color}
      strokeWidth='1.5'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      aria-hidden='true'
    >
      <path strokeLinecap='round' strokeLinejoin='round' d='M12 4.5v15m7.5-7.5h-15'></path>
    </svg>
  )
}

export default IconPlus
