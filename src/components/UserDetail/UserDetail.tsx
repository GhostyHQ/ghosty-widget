import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Avatar,
  Box,
  Text,
} from '@chakra-ui/react'
import React, { Fragment } from 'react'
import { IMessages } from '../../interface/messages'
import { IUserChatList } from '../../interface/users'
import useStore from '../../stores/store'
import { prettyTruncate } from '../../utils/common'
import IconBlocked from '../Icons/Icon/IconBlocked'
import IconTag from '../Icons/Icon/IconTag'

interface UserDetailProps {
  dataCurrentMessage: IMessages[]
  dataCurrentChat: IUserChatList
}

const UserDetail = ({ dataCurrentMessage, dataCurrentChat }: UserDetailProps) => {
  const store = useStore()

  const hasMedia = dataCurrentMessage?.some(
    (msg) => msg.message.image !== '' && (msg.senderId === store.currentUser || msg.receiverId === store.currentUser),
  )

  const onClickSetNickname = () => {
    store.setIsSetNickname(true)
  }

  return (
    <Box className='mt-2 text-center'>
      <Avatar
        size='lg'
        name={dataCurrentChat?.accountChatList}
        src={`https://bit.ly/${dataCurrentChat?.accountChatList}`}
      />
      <Text className='mt-1 text-md'>
        {prettyTruncate(
          (store.alias?.accountId === dataCurrentChat?.accountChatList && store.alias?.alias) ||
            dataCurrentChat?.alias ||
            dataCurrentChat?.accountChatList,
          24,
          'address',
        )}
      </Text>
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
              onClick={onClickSetNickname}
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
            {hasMedia ? (
              dataCurrentMessage?.map((msg, idx) => (
                <Box key={idx} className='grid grid-cols-4 place-items-center gap-2 overflow-y-scroll h-20'>
                  <Fragment>
                    {msg.message.image && (
                      <img
                        className='p-2 rounded-md cursor-pointer hover:bg-neutral-200 transition duration-200'
                        src={`https://paras-cdn.imgix.net/${msg.message.image}?width=800`}
                        width={100}
                        height={100}
                      />
                    )}
                  </Fragment>
                </Box>
              ))
            ) : (
              <Box>
                <Text className='text-center text-xs'>Has No Media</Text>
              </Box>
            )}
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
