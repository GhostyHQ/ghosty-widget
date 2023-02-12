import React from 'react'
import { Box, Popover, PopoverArrow, PopoverContent, PopoverTrigger, useDisclosure } from '@chakra-ui/react'
import { IconFaceSmile, IconPhoto, IconSend } from '../Icons/Icon'
import EmojiPicker from 'emoji-picker-react'

const Footer = () => {
  const { isOpen, onToggle, onClose } = useDisclosure()

  return (
    <Box
      bg='gray.100'
      roundedBottomRight='md'
      className='absolute inset-x-0 bottom-0 flex items-center gap-x-2 px-2 py-1'
    >
      <label htmlFor='pic' className='cursor-pointer bg-blue-400'>
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
          <PopoverContent
            color='white'
            bg='primary.light_grey_2'
            borderColor='primary.light_grey_2'
            position='relative'
            className='mx-4 md:mx-0'
          >
            <PopoverArrow bg='primary.light_grey_2' />
            <EmojiPicker width={300} height={320} onEmojiClick={(e, emoji) => console.log('emoji=>', e, emoji)} />
          </PopoverContent>
        )}
      </Popover>
      <textarea
        id='text'
        className='w-full p-2 pl-4 text-xs border-2 rounded-full overflow-y-scroll focus:outline-none'
        placeholder='Aa'
        rows={1}
        style={{ WebkitAppearance: 'none', resize: 'none' }}
      />
      <Box className='cursor-pointer hover:bg-primary-light-grey-200 rounded-full transition duration-200'>
        <IconSend size={20} />
      </Box>
    </Box>
  )
}

export default Footer
