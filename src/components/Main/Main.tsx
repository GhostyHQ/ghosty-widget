import React, { useEffect, useState } from 'react'
import { Avatar, Box, Spinner, Text } from '@chakra-ui/react'
import { IUserChatList } from '../../interface/users'
import useStore from '../../stores/store'
import { IMessages } from '../../interface/messages'
import { IconLocked } from '../Icons/Icon'
import LogoPlayingPhone from '../Icons/Logo/LogoPlayingPhone'
import { prettyTruncate } from '../../utils/common'
import Introduce from '../Common/Introduce'
import Setting from '../Settings/Setting'
import axios from 'axios'
import ScrollableFeed from 'react-scrollable-feed'
import clsx from 'clsx'
import moment from 'moment'
import UserDetail from '../UserDetail/UserDetail'
import AddUser from '../AddUser/AddUser'
import { API_URL } from '../../utils/baseUrl'
import SetNickname from '../SetNickname/SetNickname'

const Main = () => {
  const [currentChat, setCurrentChat] = useState<IUserChatList>()
  const [messages, setMessages] = useState<IMessages[]>()
  const [isValidating, setIsValidating] = useState<boolean>(false)
  const store = useStore()

  useEffect(() => {
    if (localStorage['current-chat']) {
      setCurrentChat(JSON.parse(localStorage.getItem('current-chat') || ''))
    }
  }, [store.isClickCurrentUser, store.isUserDetail])

  useEffect(() => {
    const getMessage = async () => {
      setIsValidating(true)
      try {
        const res = await axios.get(`${API_URL}/api/get-message/${currentChat?.accountChatList}`, {
          headers: {
            'Content-Type': 'application/json',
            authorization: await store.authToken,
          },
        })
        const result = res.data.data.filter(
          (message: any) =>
            message.senderId === currentChat?.accountId || message.receiverId === currentChat?.accountId,
        )
        setMessages(result)
      } catch (error) {
        console.log(error)
      }
      setIsValidating(false)
    }

    getMessage()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentChat])

  if (store.isSetNickname) {
    return <SetNickname />
  }

  if (store.isUserDetail) {
    return <UserDetail dataCurrentMessage={messages as IMessages[]} dataCurrentChat={currentChat as IUserChatList} />
  }

  if (store.isAddUser) {
    return <AddUser />
  }

  if (store.isSetting) {
    return <Setting />
  }

  if (!currentChat) {
    return <Introduce />
  }

  return (
    <Box h='300px' className='flex flex-col gap-y-1 pb-2 overflow-y-scroll'>
      {isValidating ? (
        <Box className='flex flex-col justify-center mt-32'>
          <Box className='mx-auto'>
            <Spinner size='xs' />
          </Box>
        </Box>
      ) : messages?.length !== 0 ? (
        <ScrollableFeed>
          {messages?.map((msg, idx) =>
            store.currentUser === msg.senderId ? (
              msg.message.image === '' ? (
                <Box
                  key={idx}
                  className={clsx(
                    'flex justify-end py-0.5 mx-3',
                    messages.length - 1 === idx && 'pb-2',
                    idx === 0 && 'pt-2',
                  )}
                >
                  <Box bg='blue.100' ml='16' className='p-2 rounded-md'>
                    <Text className='text-[11px]'>{msg.message.text}</Text>
                    <Text className='text-right text-[10px] text-gray-500'>
                      {moment(msg.createdAt).startOf('minute').fromNow()}
                    </Text>
                  </Box>
                </Box>
              ) : (
                <Box
                  key={idx}
                  className={clsx(
                    'flex justify-end py-0.5 mx-3',
                    messages.length - 1 === idx && 'pb-2',
                    idx === 0 && 'pt-2',
                  )}
                >
                  <Box bg='blue.100' ml='16' className='p-2 rounded-md'>
                    <img
                      className='cursor-pointer'
                      src={`https://paras-cdn.imgix.net/${msg.message.image}?width=800`}
                      width={400}
                    />
                    <Text className='text-right text-[10px] text-gray-500'>
                      {moment(msg.createdAt).startOf('minute').fromNow()}
                    </Text>
                  </Box>
                </Box>
              )
            ) : msg.message.image === '' ? (
              <Box
                key={idx}
                className={clsx('flex gap-2 py-0.5 mx-3', messages.length - 1 === idx && 'pb-2', idx === 0 && 'pt-2')}
              >
                <Avatar size='xs' name={currentChat?.accountChatList} src={currentChat?.accountChatList} />
                <Box bg='gray.100' mr='16' className='p-2 rounded-md'>
                  <Text className='text-[11px]'>{msg.message.text}</Text>
                  <Text className='text-right text-[10px] text-gray-500'>
                    {moment(msg.createdAt).startOf('minute').fromNow()}
                  </Text>
                </Box>
              </Box>
            ) : (
              <Box
                key={idx}
                className={clsx('flex gap-2 py-0.5 mx-3', messages.length - 1 === idx && 'pb-2', idx === 0 && 'pt-2')}
              >
                <Avatar size='xs' name={currentChat?.accountChatList} src={currentChat?.accountChatList} />
                <Box bg='gray.100' mr='16' className='p-2 rounded-md'>
                  <img
                    className='cursor-pointer'
                    src={`https://paras-cdn.imgix.net/${msg.message.image}?width=800`}
                    width={400}
                  />
                  <Text className='text-right text-[10px] text-gray-500'>
                    {moment(msg.createdAt).startOf('minute').fromNow()}
                  </Text>
                </Box>
              </Box>
            ),
          )}
        </ScrollableFeed>
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
