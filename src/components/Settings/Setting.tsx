import React from 'react'
import { Avatar, Box, Button, Text } from '@chakra-ui/react'
import useStore from '../../stores/store'
import { prettyTruncate } from '../../utils/common'
import { LogoGhosty } from '../Icons/Logo'

const Setting = () => {
  const store = useStore()

  return (
    <Box>
      <Text className='mb-4 py-2 font-semibold text-center border-b'>Settings</Text>
      <Box className='flex gap-2 px-4'>
        <Avatar size='lg' name={store.currentUser as string} src={`https://bit.ly/${store.currentUser}`} />
        <Box>
          <Text className='mb-2 text-md'>{prettyTruncate(store.currentUser as string, 24, 'address')}</Text>
          <Button size='xs'>Edit Avatar</Button>
        </Box>
      </Box>
      <Box className='flex flex-col justify-center gap-y-2 mt-6 pt-4 px-4 border-t'>
        <Button size='sm'>Blocked Users</Button>
        <Button size='sm'>FAQs</Button>
      </Box>
      <Box className='flex justify-center mt-24'>
        <LogoGhosty size={50} />
      </Box>
    </Box>
  )
}

export default Setting
