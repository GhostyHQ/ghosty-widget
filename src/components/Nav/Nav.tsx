import React, { useState } from 'react'
import { Box } from '@chakra-ui/react'
import Search from './Search'
import ChatList from './ChatList'
import { IUserChatList } from '../../interface/users'
import useStore from '../../stores/store'
import useSWR from 'swr'
import axios from 'axios'

const Nav = () => {
  const [filteredUsers, setFilteredUsers] = useState<IUserChatList[]>()
  const store = useStore()

  const fetchProfile = async () => {
    const res = await axios.get(`http://localhost:9090/api/profile/chatlist`, {
      params: {
        accountId: store.currentUser,
      },
    })
    return (await res.data.data) || null
  }

  const { data } = useSWR(store.currentUser, fetchProfile)

  return (
    <Box>
      <Search dataChatList={data} setSearchUsers={(e) => setFilteredUsers(e)} />
      <ChatList dataChatList={data} filteredUsers={filteredUsers as IUserChatList[]} />
    </Box>
  )
}

export default Nav
