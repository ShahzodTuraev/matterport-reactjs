import React, { useState } from 'react';
import axios from 'axios';
import { Btn, Container, Form, Input, Answer } from './style';

const ChatGPTBox = () => {
  // const [userInput, setUserInput] = useState('')
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('')
  const handleSubmit = (e) => {
  e.preventDefault();
  axios
  .post('http://localhost:8022/chat', {prompt})
  .then((res)=>{setResponse(res.data)})
  .catch((err)=>{console.log(err)})
  }
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          autoComplete="off"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="메시지 입력"
        />
        <Btn type="submit">전송</Btn>
      </Form>
      <Answer >{response}</Answer>
    </Container>
  );
};

export default ChatGPTBox