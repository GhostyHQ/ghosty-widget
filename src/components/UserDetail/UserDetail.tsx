import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Avatar,
  Box,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import { IMessages } from '../../interface/messages'
import { IUser } from '../../interface/users'
import useStore from '../../stores/store'
import { prettyTruncate } from '../../utils/common'
import IconBlocked from '../Icons/Icon/IconBlocked'
import IconTag from '../Icons/Icon/IconTag'

interface UserDetailProps {
  dataCurrentChat: IMessages[]
  currentChatId: string
}

const UserDetail = ({ dataCurrentChat, currentChatId }: UserDetailProps) => {
  const [currentUserChat, setCurrentUserChat] = useState<IUser>()
  const { onOpen } = useDisclosure()
  const store = useStore()

  const hasMedia = dataCurrentChat?.some(
    (msg) => msg.message.image !== '' && (msg.senderId === store.currentUser || msg.receiverId === store.currentUser),
  )

  useEffect(() => {
    const getUser = async () => {
      const res = await axios.get(`http://localhost:9090/api/profile`, {
        params: {
          accountId: currentChatId,
        },
      })
      console.log('ressss', res.data)
      setCurrentUserChat(res.data.data)
    }

    getUser()
  }, [currentChatId])

  return (
    <Box className='mt-2 text-center'>
      <Avatar size='lg' name={currentUserChat?.accountId} src={`https://bit.ly/${currentUserChat?.accountId}`} />
      <Text className='mt-1 text-md'>{prettyTruncate(currentUserChat?.accountId, 24, 'address')}</Text>
      <Text className='text-[12px] text-green-500'>Online</Text>
      <Accordion allowToggle className='mt-4'>
        <AccordionItem>
          <AccordionButton>
            <Box flex='1' textAlign='left' className='font-semibold'>
              Customize Chat
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <Box
              className='flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-neutral-200 transition duration-200'
              onClick={onOpen}
            >
              <IconTag size={18} />
              <Text>Set Nickname</Text>
            </Box>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton>
            <Box flex='1' textAlign='left' className='font-semibold'>
              Media
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <Box className='grid grid-cols-4 place-items-center gap-2 overflow-y-scroll h-20'>
              {hasMedia ? (
                dataCurrentChat?.map((msg, idx) => (
                  <Fragment key={idx}>
                    {msg.message.image && (
                      <img
                        className='p-2 rounded-md cursor-pointer hover:bg-neutral-200 transition duration-200'
                        src={`https://paras-cdn.imgix.net/${msg.message.image}?width=800`}
                        width={100}
                        height={100}
                        // onClick={() => handleImageClick(`https://paras-cdn.imgix.net/${msg.message.image}?width=800`)}
                      />
                    )}
                  </Fragment>
                ))
              ) : (
                <Box className='col-span-2 mt-10'>
                  <img className='w-60 mx-auto' src={'/assets/peeps-2.png'} alt='empty media' />
                  <Text className='mt-4 text-center text-xl'>Has No Media</Text>
                </Box>
              )}
            </Box>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton>
            <Box flex='1' textAlign='left' className='font-semibold'>
              Privacy & Support
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <Box className='flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-neutral-200 transition duration-200'>
              <IconBlocked size={18} />
              <Text>Block Address</Text>
            </Box>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  )
}

export default UserDetail
