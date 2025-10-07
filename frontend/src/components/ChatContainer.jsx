import { useChatStore } from "../store/useChatStore"
import { useEffect } from "react"
import ChatHeader from "./ChatHeader"
import MessagesInput from "./MessagesInput"

const ChatContainer = () => {
  const { messages, getMessages, isMessagesLoading, selectedUser } = useChatStore()

  useEffect(() => {
    getMessages(selectedUser._id)
  }, [selectedUser._id, getMessages])

  if(isMessagesLoading) return <div>loading...</div>

  return (
    <div className="flex-1 flex flex-col overflow-auto">
      <ChatHeader />
      <p>messages...</p>
      <MessagesInput />
    </div>
  )
}

export default ChatContainer
