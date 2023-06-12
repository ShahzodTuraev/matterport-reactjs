import { styled } from "styled-components";
import {device} from '../responsive'
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
  @media ${device.tablet}{
    right: 5%
  }
  @media ${device.mobile}{
    width: 40px;
    right: 3%;
    top: 12.5%;
  }
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
  @media ${device.tablet}{
    right: 15%;
  }
  @media ${device.mobile}{
    font-size: 14px;
    height: 40px;
    top: 14%;
  }
`;
const Title = styled.p`
  font-size: 52px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 14rem;
  line-height: 0;
  @media ${device.tablet}{
    margin-bottom: 5rem;
    margin-top: 13rem;
  }
  @media ${device.mobile}{
    font-size: 30px;
    margin-top: 5rem;
  }
`;

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  @media ${device.tablet}{
    flex-direction: column;
  }
  @media ${device.mobile}{
    gap: 5px;
  }
`;
const ImgBox = styled.div`
  width: 380px;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content:space-between;
  @media ${device.laptop}{
    width: 240px;
  }
  @media ${device.tablet}{
    flex-direction: row-reverse;
    width: 550px;
    justify-content: flex-end;
  }
  @media ${device.mobile}{
    width: 360px;
  }
`;
const Text = styled.p`
  font-size: 24px;
  text-align: center;
  margin-bottom: 60px;
  @media ${device.laptop}{
    font-size: 18px;
  }
  @media ${device.mobile}{
    font-size: 1rem;
  }
`;
const Img = styled.img`
  max-width: 330px;
  max-height: 330px;
  width: 100%;
  height: 100%;
  @media ${device.laptop}{
    width: 220px;
    height: 220px;
  }
  @media ${device.tablet}{
    width: 120px;
    height: 120px;
    margin-right: 30px;
  }
  @media ${device.mobile}{
    width: 80px;
    height: 80px;
    margin-right: 15px;
  }
`;


export {Btn, Container, Main, Title, Wrap, ImgBox, Text, Img, Icon} 