import React, { useState } from 'react'
import { Box } from '@chakra-ui/react'
import Search from './Search'
import ChatList from './ChatList'
import { IUser } from '../../interface/users'

const Nav = () => {
  const [filteredUsers, setFilteredUsers] = useState<IUser[]>()

  return (
    <Box>
      <Search setSearchUsers={(e) => setFilteredUsers(e)} />
      <ChatList filteredUsers={filteredUsers || []} />
    </Box>
  )
}

export default Nav
