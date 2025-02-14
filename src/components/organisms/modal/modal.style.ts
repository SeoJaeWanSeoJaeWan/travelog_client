import CommonInput from "@/components/atoms/input/input.style";
import styled from "styled-components";

const Container = styled.aside`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  position: relative;
  z-index: 2;

  display: flex;
  flex-direction: column;
  gap: 5px;

  width: 300px;
  height: 120px;

  padding: 10px;

  border-radius: 5px;
  background-color: ${(props) => props.theme.color.white};

  box-shadow: 0 0 10px ${(props) => props.theme.color.shadow};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

interface TextProps {
  $isInfo: boolean;
}

const Text = styled.p<TextProps>`
  width: 100%;

  font-size: ${(props) =>
    props.$isInfo ? props.theme.font(16) : props.theme.font(14)};
  text-align: ${(props) => (props.$isInfo ? "center" : "left")};
  font-weight: 500;
`;

const Input = styled(CommonInput)`
  width: 100%;

  margin-bottom: 20px;
`;

const ButtonList = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 5px;

  width: 100%;
`;

const Button = styled.button`
  width: 40px;
  height: 25px;

  background-color: ${(props) => props.theme.color.primary};
  border-radius: 5px;

  color: ${(props) => props.theme.color.white};

  &:first-child {
    background-color: ${(props) => props.theme.color.white};
    border: 1px solid ${(props) => props.theme.color.darkGray};

    color: ${(props) => props.theme.color.darkGray};
  }
`;

const Background = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;

  width: 100%;
  height: 100%;

  cursor: default;
`;

const ModalStyle = {
  Container,
  Content,
  Text,
  Input,
  ButtonList,
  Button,
  Background,
};

export default ModalStyle;
