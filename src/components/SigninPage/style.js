import { styled } from "styled-components";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, .4);
`;
const Main = styled.div`
  width: 600px;
  height: 500px;
  background: #FFF;
  transform: translate(-50%, -50%);
  position: fixed;
  top: 50%;
  left: 50%;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 40px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Login = styled.div`
  width: 350px;
  height: 400px;
  background: #FFF;
  transform: translate(-50%, -50%);
  position: fixed;
  top: 50%;
  left: 50%;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 40px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
const Heading = styled.p`
  font-size: 22px;
  font-weight: 600;
  text-align: center;
`;
const InputWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
`;
const Label = styled.p`
  font-size: 1rem;
  font-weight: 600;
`;
const Input = styled.input`
  width: ${({width})=>(width ? `${width}` : '60%')};
  height: 30px;
  font-size: 1rem;
  border: 1px solid #B7C6CE;
  box-sizing: border-box;
  border-radius: 3px;
  padding: 0 8px;
  &:focus{outline: 1px solid blue}
`;
const BtnWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;
const Button = styled.button`
  width: 250px;
  height: 40px;
  margin-top: 20px;
  background: #1CBCFF;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  border: 1px solid rgba(0, 0, 0, 0.13);
  border-radius: 5px;
  cursor: pointer;
  width: ${({width})=>(width ? `${width}` : '250px')};
  box-shadow: 0px 4px 8px 0px rgba(0, 28, 56, 0.15);
  transition: all, 0.1s;
  &:hover{background: rgba(1, 116, 199, 0.6);}
`;
const Link = styled.button`
  width: 250px;
  height: 40px;
  margin-top: 20px;
  font-size: 18px;
  font-weight: 600;
  background: #fff;
  border: 2px solid #1CBCFF;
  border-radius: 5px;
  color: #1CBCFF;
  cursor: pointer;
  transition: all, 0.1s;
  &:hover{box-shadow: 0px 4px 8px 0px rgba(0, 28, 56, 0.15)}
`

export {Container, Login, Main, Heading, Input, Label, InputWrap, Button, BtnWrap, Link}