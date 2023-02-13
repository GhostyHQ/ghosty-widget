import axios from 'axios'
import { IMessages } from '../interface/messages'
import useStore from '../stores/store'

export const MessageService = () => {
  const MessageRequest = axios.create({ baseURL: `http://localhost:9090` })
  const store = useStore()

  const getMessages = async ({ accountChat }: { accountChat: string }) => {
    const res = await MessageRequest.get<{ data: { results: IMessages[] } }>(`/api/get-message/${accountChat}`, {
      headers: {
        'Content-Type': 'application/json',
        aauthorization: await store.authToken,
      },
    })
    return res.data.data
  }

  return {
    getMessages,
  }
}
