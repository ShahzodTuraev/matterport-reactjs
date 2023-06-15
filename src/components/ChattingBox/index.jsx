import React, { useState } from "react";
import io from 'socket.io-client';
import { Button, Container, Input } from "./style";
const socket = io.connect("http://localhost:4001")
const ChattingBox = () => {
  const [username, setUsername] = useState('');
  const [room, setRoom] = useState('');
  const joinRoom = () =>{
    if(username !=="" && room !==""){
      
    }
  }
return(
  <Container>
    <Input onChange={(e)=>{setUsername(e.target.value)}} type="text" placeholder="name"/>
    <Input onChange={(e)=>{setRoom(e.target.value)}} type="text" placeholder="rom id"/>
    <Button>slkdfh</Button>
  </Container>
)
}
export default ChattingBox;



