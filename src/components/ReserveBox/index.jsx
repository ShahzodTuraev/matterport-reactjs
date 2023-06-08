import React, { useState } from 'react';
import { InputWrap, Button, Container, Heading, Input, Text } from "./style";

const ReserveBox = ({setClose}) => {
  const [date, setDate] = useState('')
  const onDate = (e) => {
    setDate(e.target.value)
  }
  const onSelect = () => {
  if(date.length > 0){
    alert('방문 예약이 성공적으로 완료되였슴니다 !')
    setClose('')
  }else{
    alert('날짜를 선택하세요 !')
  }
  }

  return (
    <Container>
      <Heading>방문 예약하기</Heading>
      <InputWrap>
        <Text>날짜 선택 :</Text>
        <Input onChange={onDate} type='datetime-local'/>
      </InputWrap>
      <Button onClick={onSelect}>방문 예약</Button>
    </Container>
  )
}

export default ReserveBox
