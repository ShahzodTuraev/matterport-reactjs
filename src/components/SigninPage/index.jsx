import React from 'react'
import { Container, Heading } from './style'
import { Input } from 'antd'

const SignIn = () => {
  return (
    <Container>
      <Heading>무료 이용시간이 지났습니다. 계속해서 3D홈페이지 체험을 원하시면, 아래 간단한 정보를 입력해 주세요.</Heading>
      <Input placeholder="Basic usage"/>
    </Container>
  )
}

export default SignIn
