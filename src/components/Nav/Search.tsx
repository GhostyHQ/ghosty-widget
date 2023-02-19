import React, { useEffect, useState } from 'react'
import { Box, Text } from '@chakra-ui/react'
import { IconGear, IconPlus, IconSearch } from '../Icons/Icon'
import _ from 'lodash'
import { IUserChatList } from '../../interface/users'
import useStore from '../../stores/store'

interface SearchProps {
  dataChatList: IUserChatList[]
  setSearchUsers: (val: IUserChatList[]) => void
}

const Search = (props: SearchProps) => {
  const [searchValue, setSearchValue] = useState('')
  const store = useStore()

  const handleSearchFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      const filter = _.filter(props.dataChatList, (user) => {
        return _.includes(_.lowerCase(JSON.stringify(_.values(user))).replace(/\s/g, ''), _.lowerCase(searchValue))
      })
      props.setSearchUsers(filter)
    }, 100)
    return () => clearTimeout(timeout)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue, props.dataChatList])

  const onCLickAddAddress = () => {
    store.setIsAddUser(!store.isAddUser)
    store.setIsUserDetail(false)
    store.setIsSetting(false)
    store.setIsSetNickname(false)
  }

  const onCLickSetting = () => {
    store.setIsSetting(!store.isSetting)
    store.setIsUserDetail(false)
    store.setIsAddUser(false)
    store.setIsSetNickname(false)
  }

  return (
    <Box>
      <Box className='flex justify-between items-center gap-2'>
        <Text color='black'>Chat</Text>
        <Box className='flex justify-between items-center gap-2'>
          <Box
            className='p-1 hover:bg-black hover:bg-opacity-5 rounded-full cursor-pointer'
            onClick={onCLickAddAddress}
          >
            <IconPlus size={22} color='black' />
          </Box>
          <Box className='p-1 hover:bg-black hover:bg-opacity-5 rounded-full cursor-pointer' onClick={onCLickSetting}>
            <IconGear size={22} color='black' />
          </Box>
        </Box>
      </Box>
      <Box className='flex items-center gap-1 p-1 mt-2 text-xs font-thin border border-black rounded-full'>
        <IconSearch size={20} color='#262626' />
        <input
          type='text'
          className='w-full focus:outline-none'
          placeholder='Search address..'
          value={searchValue}
          onChange={handleSearchFilter}
          style={{ WebkitAppearance: 'none', fontSize: '10px', color: 'black' }}
        />
      </Box>
    </Box>
  )
}

export default Search
