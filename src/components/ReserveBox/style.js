import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 0;
`;
const Heading = styled.h2`
  color: #000672;
  font-size: 30px;
`;
const InputWrap = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 90%;
  margin: 20px 0;
`;
const Button = styled.button`
  background: #2469FF;
  border-color: #2469FF;
  color: #fff;
  width: 150px;
  height: 40px;
  border-radius: 5px;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  border: none;
  &:hover{
    filter: contrast(190%);
  }
`;
const Input = styled.input`
  border: 1px solid #dbdbdb;
  height: 40px;
  border-radius: 5px;
  font-size: 16px;
  color: #000672;
  cursor: pointer;
  &:focus{outline: 1px solid #2469FF}
`;
const Text= styled.p`
  font-size: 18px;
  font-weight: 600;
  color: #000672;
`;

export { InputWrap, Container, Button, Input, Heading, Text}