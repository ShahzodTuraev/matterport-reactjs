import { styled } from "styled-components";

const Container = styled.div`
  width: 95%;
  height: 80%;
`;
const Form = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Input = styled.input`
  width: 74%;
  padding: 0 10px;
  height: 40px;
  border-radius: 5px;
  outline: none;
  border: 1px solid #000;
  font-size: 16px;
`;
const Btn = styled.button`
  width: 15%;
  height: 40px;
  background: #0FCFED;
  color: #fff;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
const Answer = styled.div`
  height: 650px;
  margin-top: 20px;
  overflow-y: auto;
`
export {Answer, Btn, Container, Form, Input}