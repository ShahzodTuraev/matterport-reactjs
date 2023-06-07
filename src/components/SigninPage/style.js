import { styled } from "styled-components";

const Container = styled.div`
  width: 600px;
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
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Heading = styled.p`
  font-size: 22px;
  font-weight: 500;
  text-align: center;
`

export {Container, Heading}