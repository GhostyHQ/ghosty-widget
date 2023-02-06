import React, { useEffect, useState } from 'react'
import { ChakraProvider, Grid, GridItem, Popover, PopoverContent, Portal } from '@chakra-ui/react'
import Header from './Header/Header'
import Nav from './Nav/Nav'
import Main from './Main/Main'
import ButtonChat from './Common/ButtonChat'
import { IUser } from '../interface/users'
import useStore from '../stores/store'

const WidgetChat = () => {
  const [currentChat, setCurrentChat] = useState<IUser>()
  const store = useStore()

  useEffect(() => {
    if (localStorage['current-chat']) {
      setCurrentChat(JSON.parse(localStorage.getItem('current-chat') || ''))
    }
  }, [store.isClickCurrentUser])

  return (
    <ChakraProvider>
      <Popover>
        <ButtonChat />
        <Portal>
          <PopoverContent minW='lg' minH='sm' className='mx-8 rounded-lg'>
            <Grid
              templateAreas={
                currentChat
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
              {currentChat && (
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
              {currentChat && <GridItem area={'footer'}>Footer</GridItem>}
            </Grid>
          </PopoverContent>
        </Portal>
      </Popover>
    </ChakraProvider>
  )
}

export default WidgetChat
