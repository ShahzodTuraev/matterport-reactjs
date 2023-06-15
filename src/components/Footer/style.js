import { styled } from "styled-components";
import {ReactComponent as bottom} from '../../assets/icons/to-bottom.svg';
import {device} from '../responsive'

const Container = styled.div`
  /* background: linear-gradient(#F5F9FC, #E6EFFA); */
  background: #fff;
  position: fixed;
  width: 100%;
  height: 60px;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  z-index: 2;
`;
const Main= styled.div`
  width: 500px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${device.tablet}{
    width: 90%;
  }
`;
const Icon = styled.div``;
Icon.BottomClose =styled(bottom)`
  width: 50px;
  height: 50px;
  cursor: pointer;
  margin: 10px 0;
`;
const Img = styled.img`
  height: 50px;
  width: 50px;
  margin: 0;
  border-radius: 5px;
  cursor: pointer;
`;
const TextBox = styled.div`
  /* background: linear-gradient(#F5F9FC, #E6EFFA); */
  background: #fff;
  position: fixed;
  width: 500px;
  height: 70vh;
  transform: translateX(-50%);
  left: 50%;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${device.tablet}{
    width: 100%;
    height: 65vh;
  }
`;

export {Container, Icon, Img, Main, TextBox,}