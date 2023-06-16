import React, { useState } from "react";
import io from 'socket.io-client';
import { Button, Container, Input } from "./style";
import Chat from "./Chat";
const socket = io.connect("http://localhost:4001")
const ChattingBox = () => {
  const [username, setUsername] = useState('');
  const [room, setRoom] = useState('');
  const joinRoom = () =>{
    if(username !=="" && room !==""){
      socket.emit("join_room", room)
    }
  }
return(
  <Container>
    <Input onChange={(e)=>{setUsername(e.target.value)}} type="text" placeholder="name"/>
    <Input onChange={(e)=>{setRoom(e.target.value)}} type="text" placeholder="rom id"/>
    <Button onClick={joinRoom}>join chat </Button>
    <Chat socket={socket} username={username} room={room}/>
  </Container>
)
}
export default ChattingBox;
