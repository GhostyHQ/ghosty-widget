import React, { useEffect, useState } from 'react'
import { Box, Button, Input, Text } from '@chakra-ui/react'
import useStore from '../../stores/store'
import { IconArrowLeft } from '../Icons/Icon'
import axios from 'axios'
import { useSWRConfig } from 'swr'
import { API_URL } from '../../utils/baseUrl'
import { IUserChatList } from '../../interface/users'

const SetNickname = () => {
  const [nickname, setNickname] = useState<string>('')
  const [isDisable, setIsDisable] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isError, setIsError] = useState<string>('')
  const [currentChat, setCurrentChat] = useState<IUserChatList>()

  const { mutate } = useSWRConfig()
  const store = useStore()

  useEffect(() => {
    if (localStorage['current-chat']) {
      setCurrentChat(JSON.parse(localStorage.getItem('current-chat') || ''))
    }
  }, [store.isClickCurrentUser])

  useEffect(() => {
    setNickname('')
  }, [store.isSetNickname])

  const onFocusInput = () => {
    setIsDisable(false)
    setIsLoading(false)
  }

  const checkAddressOnNear = async () => {
    setIsDisable(true)
    setIsLoading(true)

    try {
      const formData = new FormData()

      formData.append('accountId', store.currentUser as string)
      formData.append('accountUser', currentChat?.accountChatList as string)
      formData.append('alias', nickname)

      await axios
        .put(`${API_URL}/api/nickname`, formData, {
          headers: {
            'Content-Type': 'application/json',
            authorization: await store.authToken,
          },
        })
        .then(() => {
          mutate(store.currentUser, true)

          store.setAlias({
            accountId: currentChat?.accountChatList as string,
            alias: nickname,
          })
          store.setIsSetNickname(false)
          store.setIsUserDetail(false)
          setIsLoading(false)
          setIsDisable(false)
        })
        .catch((err) => {
          const message = err.message || 'Something went wrong, try again later'
          setIsError(message)
        })
    } catch (err) {
      if (err instanceof Error) {
        const message = err.message || 'Something went wrong, try again later'
        setIsError(message)
      }
    }
  }

  const onCLickBackSetNicname = () => {
    store.setIsSetNickname(false)
    store.setIsUserDetail(true)
  }

  return (
    <Box>
      <Box className='relative flex items-center border-b m-2 pb-2'>
        <Box
          className='p-1 hover:bg-black hover:bg-opacity-5 rounded-full cursor-pointer z-50'
          onClick={onCLickBackSetNicname}
        >
          <IconArrowLeft size={20} />
        </Box>
        <Box className='absolute inset-x-0'>
          <Text className='font-semibold text-center'>Set Nickname</Text>
        </Box>
      </Box>
      <Box className='flex flex-col gap-y-2 mx-8'>
        <Text className='text-sm font-semibold mb-1'>User Address</Text>
        <Input value={currentChat?.accountChatList} disabled size='sm' rounded='md' />
        <Text className='text-xs mt-1'>
          Check address on{' '}
          <a
            href={`https://explorer.testnet.near.org/accounts/${currentChat?.accountChatList}`}
            target='_blank'
            rel='noreferrer'
          >
            <span className='cursor-pointer font-semibold hover:underline'>Explore</span>
          </a>
        </Text>
        <Text className='text-sm font-semibold mt-3 mb-1'>Nickname</Text>
        <Input
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          placeholder='e.g. John Doe'
          onFocus={onFocusInput}
          size='sm'
          rounded='md'
        />
        <Text className='text-xs mt-1'>Max 15 chars and this is only visible to you.</Text>
        <Button
          className='w-full mt-4'
          size='sm'
          variant='solid'
          color='white'
          bg='black'
          colorScheme='blackAlpha'
          onClick={checkAddressOnNear}
          isDisabled={nickname === '' || isDisable}
          isLoading={isLoading}
        >
          Save Changes
        </Button>
        {isError !== '' && <Text className='text-xs text-center text-red-500'>{isError}</Text>}
      </Box>
    </Box>
  )
}

export default SetNickname
