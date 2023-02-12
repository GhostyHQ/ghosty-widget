import React from 'react'

interface IconSendProps {
  size: number
  className?: string
}

const IconSend = (props: IconSendProps) => {
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
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5'
      ></path>
    </svg>
  )
}

export default IconSend
