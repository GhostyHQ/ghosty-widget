import React, { useEffect, useState } from 'react'
import { Box, ChakraProvider, Grid, GridItem, Popover, PopoverContent, Portal } from '@chakra-ui/react'
import Header from './Header/Header'
import Nav from './Nav/Nav'
import Main from './Main/Main'
import ButtonChat from './Common/ButtonChat'
import { IUser } from '../interface/users'
import useStore from '../stores/store'
import Footer from './Footer/Footer'
import axios from 'axios'
import { LogoGhosty } from './Icons/Logo'

interface WidgetChatProps {
  currentUser: string
  generateAuthToken: Promise<string>
}

const WidgetChat = ({ currentUser, generateAuthToken }: WidgetChatProps) => {
  const [currentChat, setCurrentChat] = useState<IUser>()
  const store = useStore()

  useEffect(() => {
    store.setAuthToken(generateAuthToken)
    _init()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser])

  const _init = async () => {
    if (currentUser) {
      const res = await axios.get(`http://localhost:9090/api/profile`, {
        params: {
          accountId: currentUser,
        },
      })
      const user = res.data.data

      if (user.length === 0) {
        const formData = new FormData()
        formData.append('accountId', currentUser)

        try {
          const resp = await axios.put(`http://localhost:9090/api/profiles`, formData, {
            headers: {
              'Content-Type': 'application/json',
              authorization: await generateAuthToken,
            },
          })
          store.setUserProfile(resp.data.data)
          store.setChatList(resp.data.data.chatList)
        } catch (err) {
          store.setUserProfile({})
        }
      } else {
        const userProfile = user
        store.setUserProfile(userProfile)
        store.setChatList(user.chatList)
      }
      store.setCurrentUser(currentUser)
    }
    store.setInitialized(true)
  }

  useEffect(() => {
    if (localStorage['current-chat']) {
      setCurrentChat(JSON.parse(localStorage.getItem('current-chat') || ''))
    }
  }, [store.isClickCurrentUser])

  return (
    <ChakraProvider>
      <Popover>
        <ButtonChat />
        {currentUser ? (
          <Portal>
            <PopoverContent minW='lg' minH='sm' className='mx-8 rounded-lg'>
              <Grid
                templateAreas={
                  currentChat && !store.isSetting && !store.isUserDetail
                    ? `"nav header"
                "nav main"
                "nav footer"`
                    : `"nav main"
                "nav main"
                "nav main"`
                }
                gridTemplateRows={'50px 1fr 30px'}
                gridTemplateColumns={'150px 1fr'}
                h='sm'
                fontFamily='manrope'
              >
                {currentChat && !store.isSetting && !store.isUserDetail && (
                  <GridItem area={'header'} shadow='md' className='rounded-tr-md p-2'>
                    <Header />
                  </GridItem>
                )}
                <GridItem area={'nav'} className='rounded-l-md border-r p-2'>
                  <Nav />
                </GridItem>
                <GridItem area={'main'}>
                  <Main />
                </GridItem>
                {currentChat && !store.isSetting && !store.isUserDetail && (
                  <GridItem area={'footer'} className='relative'>
                    <Footer />
                  </GridItem>
                )}
              </Grid>
            </PopoverContent>
          </Portal>
        ) : (
          <Portal>
            <PopoverContent minW='lg' minH='sm' className='flex justify-center mx-8 rounded-lg'>
              <Box className='mx-auto'>
                <LogoGhosty size={100} />
              </Box>
            </PopoverContent>
          </Portal>
        )}
      </Popover>
    </ChakraProvider>
  )
}

export default WidgetChat
