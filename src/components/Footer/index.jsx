import React, { useState } from 'react';
import { Container, Icon, Img, Main, TextBox } from './style'
import Chatting from '../../assets/icons/chatting.png'
import ChatGPT from '../../assets/icons/chatgpt-logo.png'
import Reserve from '../../assets/icons/time-lapse.png'
import Others from '../../assets/icons/list-paper.png'
import ChattingBox from '../ChattingBox';
import ChatGPTBox from '../ChatGPTBox';
import ReserveBox from '../ReserveBox';
import OthersBox from '../OthersBox';

const Footer = () => {
  const imgData = [
    {id: 1, source: Chatting, replace: 'chatting icon' },
    {id: 2, source: ChatGPT, replace: 'chatGpt icon' },
    {id: 3, source: Reserve, replace: 'reserve icon' },
    {id: 4, source: Others, replace: 'others icon' },
  ];
  const [select, setSelect] = useState(10)
  const boxData = [
    {id:1, page: <ChattingBox/>},
    {id:2, page: <ChatGPTBox/>},
    {id:3, page: <ReserveBox setClose = {setSelect}/>},
    {id:4, page: <OthersBox/>}
  ]

  const onActive =(index)=>{
    select === index ? setSelect(10) : setSelect(index)
  }
  return (
    <>
    <Container>
      <Main>
        {imgData.map((image, index)=>(
          <Img className={select ===(image.id - 1 ) ? 'activeBtn' : 'passiveBtn'} onClick={()=>{onActive(index)}} key={image.id} src={image.source} alt={image.replace}/>
          ))}
      </Main>
    </Container>
    {boxData.map((box)=>(
      <TextBox key={box.id} className={select === (box.id-1) ? 'activeBox' : 'passiveBox'}>
        <Icon.BottomClose onClick ={()=>{setSelect()}}/>
        {box.page}
      </TextBox>
    ))}

    </>
  )
}

export default Footer
