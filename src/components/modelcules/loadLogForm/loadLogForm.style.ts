import CommonInput from "@/components/atoms/input/input.style";
import styled from "styled-components";

const Container = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  width: 100%;
  height: 50px;

  padding: 10px;

  border-bottom: 1px solid ${(props) => props.theme.color.gray};
`;

const Input = styled(CommonInput)`
  flex: 1;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 28px;
  height: 28px;

  background-color: ${(props) => props.theme.color.primary};
  border-radius: 5px;

  color: ${(props) => props.theme.color.white};
`;

const LoadLogFormStyle = {
  Container,
  Input,
  Button,
};

export default LoadLogFormStyle;
