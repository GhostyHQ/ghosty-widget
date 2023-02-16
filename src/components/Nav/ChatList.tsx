import React, { useEffect, useState } from 'react'
import { Avatar, AvatarBadge, Box, Text, Tooltip } from '@chakra-ui/react'
import { prettyTruncate } from '../../utils/common'
import clsx from 'clsx'
import { IUserChatList } from '../../interface/users'
import { LogoBeardedMan, LogoThinking } from '../Icons/Logo'
import useStore from '../../stores/store'
import moment from 'moment'

interface ChatListProps {
  dataChatList: IUserChatList[]
  filteredUsers: IUserChatList[]
}

const ChatList = (props: ChatListProps) => {
  const [activeChat, setActiveChat] = useState<string>()
  const store = useStore()

  useEffect(() => {
    if (localStorage['current-chat']) {
      const data = JSON.parse(localStorage.getItem('current-chat') || '')
      setActiveChat(data.accountChatList)
    }
  }, [store.isClickCurrentUser])

  const onClickCurrentUser = (user: IUserChatList) => {
    localStorage.setItem('current-chat', JSON.stringify(user))
    store.setIsClickCurrentUser(!store.isClickCurrentUser)
    store.setIsAddUser(false)
    store.setIsSetting(false)
    store.setIsUserDetail(false)
  }

  return (
    <Box h='310px' className='flex flex-col overflow-y-scroll -mx-2'>
      {props.dataChatList?.length !== 0 ? (
        props.filteredUsers?.length !== 0 ? (
          props.filteredUsers?.map((user, idx) => {
            return (
              <Tooltip
                key={idx}
                placement='top'
                size='10px'
                isDisabled={user.alias === ''}
                label={prettyTruncate(user.accountChatList, 14, 'address')}
              >
                <Box
                  bg={activeChat === user.accountChatList ? 'gray.100' : ''}
                  _hover={{ bg: 'gray.100' }}
                  className={clsx('flex items-center gap-2 pl-2 py-1 cursor-pointer', idx === 0 && 'mt-2')}
                  onClick={() => onClickCurrentUser(user)}
                >
                  <Avatar size='sm' name={user.accountChatList} src={`https://bit.ly/${user.accountChatList}`}>
                    {true && <AvatarBadge boxSize='1em' bg='green.500' />}
                  </Avatar>
                  <Box>
                    <Text className='text-[10px] font-semibold'>
                      {prettyTruncate(user.alias || user.accountChatList, 14, 'address')}
                    </Text>
                    <Text className='text-[9px]'>
                      {moment(user.lastMessage[0]?.createdAt).startOf('minute').fromNow()}
                    </Text>
                  </Box>
                </Box>
              </Tooltip>
            )
          })
        ) : (
          <Box className='flex flex-col justify-center mt-4'>
            <Box className='mx-auto'>
              <LogoThinking size={100} />
            </Box>
            <Text className='mx-4 text-xs text-center'>The account name you are looking for does not exist</Text>
          </Box>
        )
      ) : (
        <Box className='flex flex-col justify-center mt-4'>
          <Box className='mx-auto'>
            <LogoBeardedMan size={100} />
          </Box>
          <Box className='mx-4 text-center'>
            <Text className='text-xs font-semibold'>Your chat is empty!</Text>
            <Text className='mt-2 text-[10px]'>
              Once you start a new conversation, you{`'`}ll see the address lists here.
            </Text>
          </Box>
        </Box>
      )}
    </Box>
  )
}

export default ChatList

export const dataUserList = {
  data: [
    {
      id: 1,
      accountId: 'abramov.testnet',
      avatar: 'https://bit.ly/dan-abramov',
      isActive: true, // will be state
      lastMessage: 'Thats cool🔥', // will be state
    },
    {
      id: 2,
      accountId: 'kolawole.testnet',
      avatar: 'https://bit.ly/tioluwani-kolawole',
      isActive: false,
      lastMessage: 'New Chat👻',
    },
    {
      id: 3,
      accountId: 'kentdodds.testnet',
      avatar: 'https://bit.ly/kent-c-dodds',
      isActive: true,
      lastMessage: 'Send a image',
    },
    {
      id: 4,
      accountId: 'florence.testnet',
      avatar: 'https://bit.ly/ryan-florence',
      isActive: true,
      lastMessage: 'GM!',
    },
    {
      id: 5,
      accountId: '13b0c002f440b747f81f279526ad07c8678c85e6aab493e673c4f9a15d71e287',
      avatar: '',
      isActive: false,
      lastMessage: 'Send a image',
    },
    {
      id: 6,
      accountId: 'prosper.baba.testnet',
      avatar: 'https://bit.ly/prosper-baba',
      isActive: false,
      lastMessage: 'New Chat👻',
    },
    {
      id: 7,
      accountId: 'code.beast.testnet',
      avatar: 'https://bit.ly/code-beast',
      isActive: false,
      lastMessage: 'Mantap bro, mangat!',
    },
    {
      id: 8,
      accountId: 'tamiya.testnet',
      avatar: 'https://bit.ly/tioluwani-kolawole',
      isActive: false,
      lastMessage: '🔥🔥🔥🔥',
    },
    {
      id: 9,
      accountId: 'tuku.enak.testnet',
      avatar: 'https://bit.ly/sage-adebayo',
      isActive: true,
      lastMessage: 'Ghosty👻🚀',
    },
  ],
}
