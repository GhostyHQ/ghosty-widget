import { Box, Button, Text } from '@chakra-ui/react'
import React from 'react'
import { IconExclamation, IconPlus } from '../Icons/Icon'

const Introduce = () => {
  return (
    <Box h='385px' p='12' bg='gray.100' className='flex flex-col gap-y-1 rounded-r-md'>
      <Box className='w-[200px] mx-auto p-2 bg-white rounded-lg shadow-2xl'>
        <Box>
          <Text className='text-sm text-justify font-semibold'>Welcome to Ghosty</Text>
          <Text className='text-[10px] mt-2'>
            Built for Near users, Ghosty a messaging platform for NEAR users to simply and instantly messaging across
            wallet-to-wallet on the NEAR network.
          </Text>
          <Text className='text-[10px] mt-2'>Check out our FAQs for more details.</Text>
        </Box>
      </Box>

      <Box className='w-[200px] mx-auto mt-2 p-2 bg-white rounded-lg shadow-2xl'>
        <Box className='flex items-center gap-1 text-sm font-semibold'>
          <IconExclamation size={18} color='red' />
          <p>Important!</p>
        </Box>
        <Text className='text-[10px] text-justify mt-2'>
          Never share your confidential information, passwords, private keys or seed phrases with ANYONE! Be extra
          careful when receiving any external links or online forms.🔑
        </Text>
      </Box>

      <Box className='flex justify-center mt-4'>
        <Button
          className='hover:bg-primary-black hover:bg-opacity-80'
          variant='solid'
          colorScheme='primary.light_grey'
          color='white'
          bg='black'
          size='xs'
          leftIcon={<IconPlus size={18} color='white' />}
        >
          Start new conversation
        </Button>
      </Box>
    </Box>
  )
}

export default Introduce
