import styled, { keyframes } from "styled-components";

const Container = styled.div`
  position: relative;
`;

const Pin = styled.button`
  position: relative;
  top: 50%;
  left: 50%;

  width: 40px;
  height: 40px;

  background: ${(props) => props.theme.color.white};
  border-radius: 50% 50% 50% 0;
  border: 2px solid ${(props) => props.theme.color.primary};

  transform: translate(-50%, -50%) rotate(-45deg);
`;

const PinContainer = styled.span`
  position: absolute;
  top: 3px;
  left: 3px;

  transform: rotate(45deg);
`;

const pulsate = keyframes`
  0% {
    transform: translate(-50%, -50%) scale(0.1, 0.1);
    opacity: 0.0;
  }
  50% {
    opacity: 1.0;
  }
  100%{
    transform : translate(-50%, -50%) scale(1.2, 1.2);
    opacity: 0;
  }
`;

const Pulse = styled.div`
  position: absolute;
  left: 50%;
  top: 60%;
  transform: translate(-50%, -50%);
  z-index: -2;

  width: 14px;
  height: 14px;

  background: rgba(0, 0, 0, 0.2);
  border-radius: 50%;

  &:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 20px;
    height: 20px;

    border-radius: 50%;
    box-shadow: 0 0 1px 2px #89849b;

    opacity: 0;

    animation: ${pulsate} 1s ease-out;
    animation-iteration-count: infinite;
    animation-delay: 1.1s;
  }
`;

const MarkerStyle = {
  Container,
  Pin,
  PinContainer,
  Pulse,
};

export default MarkerStyle;
