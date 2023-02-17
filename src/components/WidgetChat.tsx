import React, { useEffect, useState } from 'react'
import { Box, ChakraProvider, Grid, GridItem, Popover, PopoverContent, Portal, Text } from '@chakra-ui/react'
import Header from './Header/Header'
import Nav from './Nav/Nav'
import Main from './Main/Main'
import ButtonChat from './Common/ButtonChat'
import { IUser } from '../interface/users'
import useStore from '../stores/store'
import Footer from './Footer/Footer'
import axios from 'axios'
import { LogoGhosty } from './Icons/Logo'
import { API_URL } from '../utils/baseUrl'

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
      const res = await axios.get(`${API_URL}/api/profile`, {
        params: {
          accountId: currentUser,
        },
      })
      const user = res.data.data

      if (user.length === 0) {
        const formData = new FormData()
        formData.append('accountId', currentUser)

        try {
          const resp = await axios.put(`${API_URL}/api/profiles`, formData, {
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
          <Box className='relative mx-8'>
            <Portal>
              <PopoverContent minW='lg' minH='sm' className='absolute mx-8 rounded-lg'>
                <Grid
                  templateAreas={
                    currentChat && !store.isAddUser && !store.isSetting && !store.isUserDetail && !store.isSetNickname
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
                  {currentChat &&
                    !store.isAddUser &&
                    !store.isSetting &&
                    !store.isUserDetail &&
                    !store.isSetNickname && (
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
                  {currentChat &&
                    !store.isAddUser &&
                    !store.isSetting &&
                    !store.isUserDetail &&
                    !store.isSetNickname && (
                      <GridItem area={'footer'} className='relative'>
                        <Footer />
                      </GridItem>
                    )}
                </Grid>
              </PopoverContent>
            </Portal>
          </Box>
        ) : (
          <Portal>
            <PopoverContent minW='lg' minH='sm' className='flex justify-center mx-8 rounded-lg'>
              <Grid
                templateAreas={`"nav main"
        "nav main"
        "nav main"`}
                gridTemplateRows={'50px 1fr 30px'}
                gridTemplateColumns={'150px 1fr'}
                h='sm'
                fontFamily='manrope'
              >
                <GridItem
                  area={'nav'}
                  className='rounded-l-md border-r p-2'
                  backgroundImage={`https://paras-cdn.imgix.net/bafybeiey5ag2lwaoxqccpzzrdpjuu4qnrg342loc2yiqoce7sjnabc4og4`}
                  backgroundSize='cover'
                ></GridItem>
                <GridItem area={'main'} className='relative'>
                  <Box className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-center'>
                    <Box className='mx-auto'>
                      <LogoGhosty size={100} />
                    </Box>
                    <Text className='text-xs'>please login to use chat widget from Ghosty</Text>
                  </Box>
                </GridItem>
              </Grid>
            </PopoverContent>
          </Portal>
        )}
      </Popover>
    </ChakraProvider>
  )
}

export default WidgetChat
