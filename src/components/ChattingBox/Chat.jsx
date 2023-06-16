import React, { useEffect, useState } from 'react'
import { Box, ChatBody, ChatFooter, ChatHeader, MassageInput } from './style'

const Chat = ({socket, username, room}) => {
  const [currentMessage, setCurrentMessage] = useState("")
  const sendMessage = async() => {
    if(currentMessage !== ""){
      const messageData = {
          room: room,
          author: username,
          message: currentMessage,
          time: new Date(Date.now()).getHours() + ":" +
          new Date(Date.now()).getMinutes(),
      };
      await socket.emit("send_message", messageData);

    }
  }
  useEffect(()=>{
    socket.on("receive_message", (data)=>{

    })
  }, [socket])
  return (
    <Box>
      <ChatHeader>Live Chat</ChatHeader>
      <ChatBody></ChatBody>
      <ChatFooter>
        <MassageInput onChange={(e)=>{setCurrentMessage(e.target.value)}} type='text' placeholder='hey'/>
        <button onClick={sendMessage}>&#9658;</button>
      </ChatFooter>
    </Box>
  )
}

export default Chat
