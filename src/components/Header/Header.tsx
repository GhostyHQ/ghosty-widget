import React, { useEffect, useState } from 'react'
import { Avatar, AvatarBadge, Box, Text } from '@chakra-ui/react'
import { prettyTruncate } from '../../utils/common'
import { IconEllipsisVertical } from '../Icons/Icon'
import useStore from '../../stores/store'
import { IUserChatList } from '../../interface/users'

const Header = () => {
  const [currentChat, setCurrentChat] = useState<IUserChatList>()
  const store = useStore()

  useEffect(() => {
    if (localStorage['current-chat']) {
      setCurrentChat(JSON.parse(localStorage.getItem('current-chat') || ''))
    }
  }, [store.isClickCurrentUser])

  const onClickUserDetail = () => {
    store.setIsUserDetail(true)
  }

  return (
    <Box className='flex justify-between items-center'>
      <Box className='flex items-center gap-2'>
        <Avatar size='sm' name={currentChat?.accountChatList} src={`https://bit.ly/${currentChat?.accountChatList}`}>
          {true && <AvatarBadge boxSize='1em' bg='green.500' />}
        </Avatar>
        <Box>
          <Text className='text-xs'>{prettyTruncate(currentChat?.accountChatList, 20, 'address')}</Text>
          {true && <Text className='text-[9px] text-green-500'>Online</Text>}
        </Box>
      </Box>
      <Box className='cursor-pointer' onClick={onClickUserDetail}>
        <IconEllipsisVertical size={20} color='black' />
      </Box>
    </Box>
  )
}

export default Header
