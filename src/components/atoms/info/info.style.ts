import styled, { keyframes } from "styled-components";

const infoAni = keyframes`
    0% {
        opacity: 0;
    }

    20% {
        opacity: 1;
    }

    80% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
`;

const Container = styled.p`
  position: fixed;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);

  padding: 5px 10px;

  border-radius: 50px;
  background-color: ${(props) => props.theme.color.darkShadow};

  color: ${(props) => props.theme.color.white};
  font-size: ${(props) => props.theme.font(12)};

  opacity: 0;

  animation: ${infoAni} 4s 0.5s forwards;
`;

const InfoStyle = {
  Container,
};

export default InfoStyle;
