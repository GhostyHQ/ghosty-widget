import React, { useEffect, useState } from 'react'
import { Avatar, Box, Text } from '@chakra-ui/react'
import { IUser } from '../../interface/users'
import useStore from '../../stores/store'
import { IMessages } from '../../interface/messages'
import { IconLocked } from '../Icons/Icon'
import LogoPlayingPhone from '../Icons/Logo/LogoPlayingPhone'
import { prettyTruncate } from '../../utils/common'
import Introduce from '../Common/Introduce'

const Main = () => {
  const [currentChat, setCurrentChat] = useState<IUser>()
  const [messages, setMessages] = useState<IMessages[]>()
  const store = useStore()
  const currentUser = 'testingbaleee.testnet'

  useEffect(() => {
    if (localStorage['current-chat']) {
      setCurrentChat(JSON.parse(localStorage.getItem('current-chat') || ''))
    }
  }, [store.isClickCurrentUser])

  useEffect(() => {
    const result = dataMessage.data.filter(
      (message) => message.senderId === currentChat?.accountId || message.receiverId === currentChat?.accountId,
    )
    setMessages(result)
  }, [currentChat])

  if (!currentChat) {
    return <Introduce />
  }

  return (
    <Box h='300px' className='flex flex-col gap-y-1 p-2 overflow-y-scroll'>
      {messages?.length !== 0 ? (
        messages?.map((data) =>
          data.messages.map((msg, idx) =>
            currentUser === msg.senderId ? (
              <Box key={idx} className='flex justify-end'>
                <Box bg='blue.100' ml='16' className='p-2 rounded-md'>
                  <Text className='text-[11px]'>{msg.message}</Text>
                  <Text className='text-right text-[10px] text-gray-500'>4 minutes ago</Text>
                </Box>
              </Box>
            ) : (
              <Box key={idx} className='flex gap-2'>
                <Avatar size='xs' name={currentChat?.accountId} src={currentChat?.avatar} />
                <Box bg='gray.100' mr='16' className='p-2 rounded-md'>
                  <Text className='text-[11px]'>{msg.message}</Text>
                  <Text className='text-right text-[10px] text-gray-500'>4 minutes ago</Text>
                </Box>
              </Box>
            ),
          ),
        )
      ) : (
        <Box className='flex flex-col justify-center'>
          <Box className='mx-auto'>
            <LogoPlayingPhone size={150} />
          </Box>
          <Text className='text-xs text-center font-semibold'>... Your new conversation starts here ...</Text>
          <Box bg='yellow.400' className='flex justify-center items-center gap-1 m-2 p-1 rounded-lg'>
            <IconLocked size={20} color='black' />
            <Text className='text-[10px]'>
              Messages to {prettyTruncate(currentChat?.accountId, 14, 'address')} are not encrypted until the address
              has signed in to Ghosty.
            </Text>
          </Box>
        </Box>
      )}
    </Box>
  )
}

export default Main

const dataMessage = {
  data: [
    {
      id: 1,
      senderId: 'testingbaleee.testnet',
      receiverId: 'kentdodds.testnet',
      messages: [
        {
          id: 1,
          senderId: 'testingbaleee.testnet',
          receiverId: 'kentdodds.testnet',
          message: 'Hello kentdodds!',
        },
        {
          id: 2,
          senderId: 'kentdodds.testnet',
          receiverId: 'testingbaleee.testnet',
          message: 'Hi baleee',
        },
        {
          id: 3,
          senderId: 'kentdodds.testnet',
          receiverId: 'testingbaleee.testnet',
          message: 'can i help you?',
        },
        {
          id: 4,
          senderId: 'testingbaleee.testnet',
          receiverId: 'kentdodds.testnet',
          message: '',
          image:
            'https://new.paras.id/_next/image?url=https%3A%2F%2Fparas-cdn.imgix.net%2Fbafybeid4j5gx4vhxjhky6nnsutb7tqjgit6iuj74csmxg426cxtqftdfiu%3Fw%3D600&w=3840&q=75',
        },
        {
          id: 5,
          senderId: 'testingbaleee.testnet',
          receiverId: 'kentdodds.testnet',
          message: 'you know this NFT?',
        },
      ],
    },
    {
      id: 2,
      senderId: 'testingbaleee.testnet',
      receiverId: 'code.beast.testnet',
      messages: [
        {
          id: 1,
          senderId: 'testingbaleee.testnet',
          receiverId: 'code.beast.testnet',
          message: 'Hello code beast!',
        },
        {
          id: 2,
          senderId: 'code.beast.testnet',
          receiverId: 'testingbaleee.testnet',
          message: 'yo whatsup baleee👋🏻',
        },
      ],
    },
  ],
}
