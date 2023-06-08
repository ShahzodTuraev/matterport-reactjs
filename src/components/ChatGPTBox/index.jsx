import React, { useState } from 'react';
import axios from 'axios';
import { Answer, Btn, Container, Form, Input } from './style';

const ChatGPTBox = () => {
  const [userInput, setUserInput] = useState('');
  const [chatLog, setChatLog] = useState([]);

  const callChatGPT = async (message) => {
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [
            { role: 'system', content: 'You are a helpful assistant.' },
            { role: 'user', content: message },
          ],
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer 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',
          },
        }
      );

      const reply = response.data.choices[0].message.content;
      displayReply(reply);
    } catch (error) {
      console.error('API request failed:', error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    displayUserInput(userInput);
    callChatGPT(userInput);
    setUserInput('');
  };

  const displayUserInput = (input) => {
    setChatLog((prevLog) => [
      ...prevLog,
      <p key={prevLog.length} style={{ color: 'coral', margin: '5px 0' }}>
        <strong>User : </strong>
        {input}
      </p>,
    ]);
  };

  const displayReply = (reply) => {
    setChatLog((prevLog) => [
      ...prevLog,
      <p key={prevLog.length} style={{ color: 'rgb(79, 79, 79)' }}>
        <strong>ChatGPT : </strong>
        {reply}
      </p>,
    ]);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          autoComplete="off"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="메시지 입력"
        />
        <Btn type="submit">전송</Btn>
      </Form>
      <Answer >{chatLog}</Answer>
    </Container>
  );
};

export default ChatGPTBox