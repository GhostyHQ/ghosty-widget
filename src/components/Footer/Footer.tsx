import React, { useContext, useEffect, useRef, useState } from 'react'
import { Box, Popover, PopoverArrow, PopoverContent, PopoverTrigger, useDisclosure } from '@chakra-ui/react'
import { IconFaceSmile, IconPhoto, IconSend } from '../Icons/Icon'
import EmojiPicker from 'emoji-picker-react'
import useStore from '../../stores/store'
import { IUserChatList } from '../../interface/users'
import axios from 'axios'
import clsx from 'clsx'
import { API_URL } from '../../utils/baseUrl'
import { SocketContext } from '../../contexts/SocketContext'

const Footer = () => {
  const [currentChat, setCurrentChat] = useState<IUserChatList>()
  const [message, setMessage] = useState<string>('')
  const [rowMessage, setRowMessage] = useState<number>(1)
  const { isOpen, onToggle, onClose } = useDisclosure()
  const ref = useRef<HTMLTextAreaElement>(null)
  const store = useStore()
  const socket = useContext(SocketContext)

  useEffect(() => {
    socket.emit('typingMessage', {
      senderId: store.currentUser,
      receiverId: currentChat?.accountChatList,
      message: message,
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message])

  useEffect(() => {
    if (localStorage['current-chat']) {
      setCurrentChat(JSON.parse(localStorage.getItem('current-chat') || ''))
    }
  }, [store.isClickCurrentUser])

  const onEmojiClick = (emojiObject: any) => {
    const cursor = ref?.current?.selectionStart
    const text = message.slice(0, cursor) + emojiObject.emoji + message.slice(cursor)
    setMessage(text)
  }

  const sendMessage = async () => {
    const messageData = {
      senderId: store.currentUser,
      receiverId: currentChat?.accountChatList,
      message: message,
    }

    socket.emit('sendMessage', {
      senderId: store.currentUser,
      receiverId: currentChat?.accountChatList,
      message: {
        text: message,
        image: '',
      },
      time: new Date(),
      is_new: store.messages ? true : false,
    })

    setMessage('')

    try {
      const res = await axios.post(`${API_URL}/api/send-message`, messageData, {
        headers: { authorization: await store.authToken },
      })

      const id = await res.data.message._id
      sendDeliveredMessage(id)
    } catch (error) {
      console.log(error)
    }
  }

  const sendDeliveredMessage = async (id: string) => {
    const data = {
      _id: id,
    }

    try {
      await axios.post(`${API_URL}/api/delivered-message`, data, {
        headers: {
          'Content-Type': 'application/json',
          authorization: await store.authToken,
        },
      })
    } catch (error) {
      console.log(error)
    }
  }

  const onChangeMessage = (value: string) => {
    setMessage(value)
    if (value === '') setRowMessage(1)
  }

  const onKeyPress = (e: any) => {
    if (e.keyCode === 13 && !e.shiftKey && message.length > 0) sendMessage()
    if (e.keyCode === 13 && e.shiftKey && rowMessage <= 4) {
      e.preventDefault()

      let start = e.target.selectionStart
      let end = e.target.selectionEnd

      setMessage(message.substring(0, start) + '\n' + message.substring(end))
      start = end = start + 1
      setRowMessage(rowMessage + 1)
    } else if (e.keyCode === 13) {
      e.preventDefault()

      let start = e.target.selectionStart
      let end = e.target.selectionEnd

      if (rowMessage >= 4) {
        setMessage(message.substring(0, start) + '\n' + message.substring(end))
        start = end = start + 1
      }
    }
  }

  return (
    <Box
      bg='gray.100'
      roundedBottomRight='md'
      className='absolute inset-x-0 bottom-0 flex items-center gap-x-2 px-2 py-1'
    >
      <label htmlFor='pic' className='cursor-pointer'>
        <IconPhoto size={20} />
        <input id='pic' type='file' className='hidden' />
      </label>
      <Popover placement='top' isOpen={isOpen} onClose={onClose}>
        <PopoverTrigger>
          <div
            className='cursor-pointer hover:bg-primary-light-grey-200 rounded-full transition duration-200'
            onClick={onToggle}
          >
            <IconFaceSmile size={20} />
          </div>
        </PopoverTrigger>
        {isOpen && (
          <PopoverContent color='white' position='relative' className='mx-4 md:mx-0'>
            <PopoverArrow bg='white' />
            <EmojiPicker height={320} onEmojiClick={(emoji) => onEmojiClick(emoji)} />
          </PopoverContent>
        )}
      </Popover>
      <textarea
        ref={ref}
        id='text'
        className={clsx(
          'w-full p-2 pl-4 text-xs border-2 rounded-full overflow-y-scroll focus:outline-none',
          rowMessage === 1 && 'rounded-full',
          rowMessage > 1 && 'rounded-xl',
        )}
        placeholder='Aa'
        rows={rowMessage}
        style={{ WebkitAppearance: 'none', resize: 'none' }}
        value={message}
        onChange={(e) => onChangeMessage(e.target.value)}
        onKeyDown={onKeyPress}
      />
      <Box
        className='cursor-pointer hover:bg-primary-light-grey-200 rounded-full transition duration-200'
        onClick={sendMessage}
      >
        <IconSend size={20} />
      </Box>
    </Box>
  )
}

export default Footer
