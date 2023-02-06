import React from 'react'

interface IconEllipsisVerticalProps {
  size: number
  color: string
  className?: string
}

const IconEllipsisVertical = (props: IconEllipsisVerticalProps) => {
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
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z'
      ></path>
    </svg>
  )
}

export default IconEllipsisVertical
