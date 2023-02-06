import React, { useEffect, useState } from 'react'
import { Avatar, AvatarBadge, Box, Text } from '@chakra-ui/react'
import { prettyTruncate } from '../../utils/common'
import { IconEllipsisVertical } from '../Icons/Icon'
import useStore from '../../stores/store'
import { IUser } from '../../interface/users'

const Header = () => {
  const [currentChat, setCurrentChat] = useState<IUser>()
  const store = useStore()

  useEffect(() => {
    if (localStorage['current-chat']) {
      setCurrentChat(JSON.parse(localStorage.getItem('current-chat') || ''))
    }
  }, [store.isClickCurrentUser])

  return (
    <Box className='flex justify-between items-center'>
      <Box className='flex items-center gap-2'>
        <Avatar size='sm' name={currentChat?.accountId} src={currentChat?.avatar}>
          {currentChat?.isActive && <AvatarBadge boxSize='1em' bg='green.500' />}
        </Avatar>
        <Box>
          <Text className='text-xs'>{prettyTruncate(currentChat?.accountId, 20, 'address')}</Text>
          {currentChat?.isActive && <Text className='text-[9px] text-green-500'>Online</Text>}
        </Box>
      </Box>
      <Box>
        <IconEllipsisVertical size={20} color='black' />
      </Box>
    </Box>
  )
}

export default Header
