import { Box, PopoverTrigger, Text } from '@chakra-ui/react'
import React from 'react'
import { Logo } from '../Icons/Logo'

const ButtonChat = () => {
  return (
    <Box className='fixed bottom-4 right-8'>
      <PopoverTrigger>
        <Box className='flex items-center gap-2 px-3 py-2 rounded-full bg-white shadow-2xl border cursor-pointer hover:bg-opacity-90 transition duration-150'>
          <Logo size={25} />
          <Text className='text-xl text-black font-semibold'>Chat</Text>
        </Box>
      </PopoverTrigger>
    </Box>
  )
}

export default ButtonChat
