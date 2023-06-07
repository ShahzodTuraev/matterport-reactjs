import { styled } from "styled-components";
import {ReactComponent as close} from '../../assets/icons/close-icon.svg'
const Container = styled.div`
  background: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 2;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  border-radius: 5px;
  /* box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; */
`;
const Main = styled.div`
  position: fixed;
  transform: translate(-50%, -50%);
  top: 40%;
  left: 50%;
  color: #fff;
  `;

const Icon = styled.div``;

Icon.Close = styled(close)`
  width: 70px;
  position: absolute;
  top: 15%;
  right: 12%;
  z-index: 3;
  cursor: pointer;
`;
const Btn = styled.button`
  width: 140px;
  height: 55px;
  border-radius: 10px;
  background:  rgba(255, 255, 255, 0.3);
  border: none;
  font-size: 1rem;
  color: #fff;
  font-weight: 700;
  position: absolute;
  top: 15.5%;
  right: 17%;
  z-index: 3;
  cursor: pointer;
`;
const Title = styled.p`
  font-size: 52px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 14rem;
  line-height: 0;
`;
const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;
const ImgBox = styled.div`
  width: 380px;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content:space-between;
`;
const Text = styled.p`
  font-size: 24px;
  text-align: center;
  margin-bottom: 60px;
`;
const Img = styled.img`
  width: 330px;
  height: 330px;
`;


export {Btn, Container, Main, Title, Wrap, ImgBox, Text, Img, Icon} 