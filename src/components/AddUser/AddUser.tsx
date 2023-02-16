import React, { useState } from 'react'
import { Box, Button, Input, Text } from '@chakra-ui/react'
import useStore from '../../stores/store'
import { IconChat } from '../Icons/Icon'
import axios from 'axios'
import getConfig from '../../config/near'
import { mutate } from 'swr'
import { API_URL } from '../../utils/baseUrl'

const AddUser = () => {
  const [nearAccount, setNearAccount] = useState<string>('')
  const [isDisable, setIsDisable] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isError, setIsError] = useState<string>('')
  const store = useStore()

  const onFocusInput = () => {
    setIsDisable(false)
  }

  const checkAddressOnNear = async () => {
    setIsDisable(true)
    setIsLoading(true)

    try {
      const nearConfig = getConfig('development')
      const res = await axios.post(nearConfig.nodeUrl, {
        jsonrpc: '2.0',
        id: 'dontcare',
        method: 'query',
        params: {
          request_type: 'view_account',
          finality: 'final',
          account_id: nearAccount,
        },
      })
      if (res.data.error) {
        setIsLoading(false)
        setIsError('Please enter a valid address or .testnet')
      } else {
        if (store.currentUser === nearAccount) {
          setIsLoading(false)
          setIsError(`You can't add the current address`)
          return
        }

        const res = await axios.get(`${API_URL}/api/profile`, {
          params: { accountId: store.currentUser },
        })

        const dataChatList = res.data.data.chatList

        const checkExistData = dataChatList.filter((data: any) => data.accountId === nearAccount)

        if (checkExistData.length > 0) {
          setIsLoading(false)
          setIsError('The address is already in the chat list')
          return
        }

        const formData = new FormData()

        formData.append('accountId', store.currentUser as string)
        formData.append('chatList', nearAccount)

        await axios
          .put(`${API_URL}/api/profiles/chatlist`, formData, {
            headers: {
              'Content-Type': 'application/json',
              authorization: await store.authToken,
            },
          })
          .then(() => {
            const dataCurrentChat = {
              accountChatList: nearAccount,
              alias: '',
              _id: '',
            }
            mutate(`chatlist-${store.currentUser}`)
            localStorage.setItem('current-chat', JSON.stringify(dataCurrentChat))
            store.setIsClickCurrentUser(!store.isClickCurrentUser)
            store.setIsAddUser(false)
            setIsLoading(false)
            setIsDisable(false)
          })
          .catch((err) => {
            const message = err.message || 'Something went wrong, try again later'
            setIsError(message)
          })
      }
    } catch (err) {
      if (err instanceof Error) {
        const message = err.message || 'Something went wrong, try again later'
        setIsError(message)
      }
    }
  }

  return (
    <Box>
      <Box className='border-b mb-4 py-1'>
        <Text className='font-semibold text-center'>Start New Chat</Text>
        <Text className='text-xs text-center'>Enter an address (or .testnet name) below to start a new chat</Text>
      </Box>
      <Box className='flex flex-col gap-y-2 mx-8 mt-8'>
        <Input
          value={nearAccount}
          onChange={(e) => setNearAccount(e.target.value)}
          placeholder='e.g. f1... or username.near'
          onFocus={onFocusInput}
        />
        <Button
          className='w-full hover:bg-opacity-20'
          variant='solid'
          color='white'
          colorScheme='blackAlpha'
          bg='black'
          leftIcon={<IconChat size={14} color='white' />}
          onClick={checkAddressOnNear}
          isDisabled={nearAccount === '' || isDisable}
          isLoading={isLoading}
        >
          Start Chatting
        </Button>
        {isError !== '' && <Text className='text-xs text-center text-red-500'>{isError}</Text>}
      </Box>
    </Box>
  )
}

export default AddUser
