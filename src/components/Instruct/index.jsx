import React, { useState } from 'react'
import { Btn, Container, Icon, Img, ImgBox, Main, Text, Title, Wrap } from './style'
import FirstImg from '../../assets/images/direct.jpg'
import SecondImg from '../../assets/images/click.jpg'
import ThirdImg from '../../assets/images/left-right.jpg'
import FourthImg from '../../assets/images/zoom out.jpg'
import FifthImg from '../../assets/images/zoom in.jpg'
const Instruct = ({signIn}) => {
  const iData = [
    {id: 1, content: '1번 클릭 : 클릭 장소로 이동', picture: FirstImg},
    {id: 2, content: '2번 클릭 : 클릭 장소까지 계속 이동', picture: SecondImg},
    {id: 3, content: '좌우 드래그 : 보이는 시선 이동', picture: ThirdImg},
    {id: 4, content: '줌아웃 : 가까이 보기', picture: FourthImg},
    {id: 5, content: '줌인 : 멀리서 보기', picture: FifthImg},
  ];
  const [close, setClose] = useState(false)

  const onHide = () => {
    setClose(true);
    localStorage.getItem('Email')=== null ? signIn(true) : signIn(false);
    localStorage.setItem('instruct', 'hide')
  }
  const onClose =()=>{
    setClose(true); 
    localStorage.getItem('Email')=== null ? signIn(true) : signIn(false)
  }
  
  return (
    <Container style={close?{display: 'none'}: {display: 'block'}}>
        <Btn onClick={onHide}>다시는 보지 않기</Btn>
        <Icon.Close onClick = {onClose} />
      <Main>
        <Title>사용 방법</Title>
        <Wrap>
          {iData.map((page)=>(
          <ImgBox key={page.id}>
            <Text>{page.content}</Text>
            <Img src={page.picture} alt='instruct'/>
          </ImgBox>
          ))
          }
        </Wrap>
      </Main>
    </Container>
  )
}

export default Instruct
