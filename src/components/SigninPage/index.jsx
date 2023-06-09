import React, { useState, useRef } from 'react'
import { BtnWrap, Button, Main, Heading, Input, InputWrap, Label, Container, Link, Login } from './style'
import { Checkbox } from 'antd'

const SignIn = () => {
  const [display, setDisplay] = useState(false)
  const [signin, setSignin] = useState(true)
  const [check, setCheck] = useState(false)
  const [mailAlert, setMailAlert] = useState(false)
  const [telAlert, setTelAlert] = useState(false)
  const [checkAlert, setCheckAlert] = useState(false)
  const [loginAlert, setLoginAlert] = useState(false)
  const [passAlert, setPassAlert] = useState(false)

  const mail = useRef('');
  const tel = useRef('')
  const onChange = (e) =>{
    setCheck(e.target.checked)
  }
  // SIGN IN SUBMIT FUNCTION
  const onSubmit = () => {
    if(check === true && mail.current.value.length > 4 && mail.current.value.includes('@')
    && mail.current.value.includes('.')&& tel.current.value.length > 5 && /[a-zA-Z]/.test(tel.current.value)===false){
      setDisplay(true)
      const email = mail.current.value
      const phone = tel.current.value
      const data = {email, phone}
      fetch('https://api.mever.me:8080/insMember', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error(error);
      });

      localStorage.setItem('Email', email)
      localStorage.setItem('Phone', phone)
    }else{
      if(mail.current.value.length < 5 || !mail.current.value.includes('@')|| !mail.current.value.includes('.')){setMailAlert(true)}
      if(tel.current.value.length < 6 || /[a-zA-Z]/.test(tel.current.value)===true){setTelAlert(true)}
      if(check === false){setCheckAlert(true)}
    }
  }
  const login = useRef('');
  const pass = useRef('');
  // LOGIN SUBMIT FUCTION
  const onLogin = () => {
    if(login.current.value.length > 4 && login.current.value.includes('@')
    && login.current.value.includes('.')&& pass.current.value.length > 5 && /[a-zA-Z]/.test(pass.current.value)===false){
      const email = login.current.value;
      const password = pass.current.value;
      const data = {email, password}
      setDisplay(true)

      fetch('https://api.mever.me:8080/chkLogin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error(error);
      });
      localStorage.setItem('Email', email)
      localStorage.setItem('Phone', password)
    }else{
      if(login.current.value.length < 5 || !login.current.value.includes('@')|| !login.current.value.includes('.')){setLoginAlert(true)}
      if(pass.current.value.length < 6 || /[a-zA-Z]/.test(pass.current.value)===true){setPassAlert(true)}
    }
  }
  return (
    <Container style={display ?{display: 'none'}:{display: 'block'}}>
      {signin ===true ? <Main>
        <Heading>무료 이용시간이 지났습니다. 계속해서 3D홈페이지 체험을 원하시면, 아래 간단한 정보를 입력해 주세요.</Heading>
        <InputWrap>
          <Label style={mailAlert ? {color: 'red'}:{}}>이메일 주소 :</Label>
          <Input  style={mailAlert ? {borderColor: 'red'}:{}} type='email' autoComplete='false' ref={mail} onFocus={()=>{setMailAlert(false)}} placeholder='(예)sm@mever.me'/>
        </InputWrap>
        <InputWrap>
          <Label style={telAlert ? {color: 'red'} : {}}>핸드폰번호 :</Label>
          <Input style={telAlert ? {borderColor: 'red'} : {}} type='tel' ref={tel} onFocus={()=>{setTelAlert(false)}} autoComplete='false' placeholder='(예)01075521110'/>
        </InputWrap>
        <BtnWrap>
          <Checkbox style={checkAlert ? {color: 'red', fontWeight: '600'}:{fontWeight: '600'}} size onChange={onChange} onFocus={()=>{setCheckAlert(false)}}>개인정보활용 동의</Checkbox>
          <Button onClick={onSubmit}>전송</Button>
          <Link onClick={()=>{setSignin(false)}}>직접 로그인하기</Link>
        </BtnWrap>
      </Main> :
      <Login>
        <Heading>로그인하기</Heading>
        <Label style={loginAlert ? {color: 'red'}:{}}>이메일 주소 :</Label>
          <Input width='100%' style={loginAlert ? {borderColor: 'red'}:{}} type='email' autoComplete='false' ref={login} onFocus={()=>{setLoginAlert(false)}} placeholder='(예)sm@mever.me'/>
          <Label style={passAlert ? {color: 'red'} : {}}>비밀번호 (핸드폰번호) :</Label>
          <Input width='100%' style={passAlert ? {borderColor: 'red'} : {}} type='tel' ref={pass} onFocus={()=>{setPassAlert(false)}} autoComplete='false' placeholder='(예)01075521110'/>
          <Button width='100%' onClick={onLogin}>로그인</Button>
          
      </Login>
      }
    </Container>
  )
}

export default SignIn
