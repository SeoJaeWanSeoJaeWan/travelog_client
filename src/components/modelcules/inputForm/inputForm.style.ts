import CommonInput from "@/components/atoms/input/input.style";
import CommonTextArea from "@/components/atoms/textarea/textarea.style";
import styled from "styled-components";

interface ContainerProps {
  $type: "input" | "textarea";
}

const Container = styled.form<ContainerProps>`
  display: flex;
  flex-direction: ${(props) => (props.$type === "input" ? "row" : "column")};
  align-items: flex-end;
  gap: 5px;

  width: 100%;
  height: ${(props) => (props.$type === "input" ? "auto" : "100%")};
`;

const Input = styled(CommonInput)`
  flex: 1;
`;

const TextArea = styled(CommonTextArea)`
  flex: 1;

  min-height: 115px;
`;

const Button = styled.button`
  width: 28px;
  height: 28px;

  border: none;
  border-radius: 5px;

  background-color: ${(props) => props.theme.color.primary};
  color: ${(props) => props.theme.color.white};
`;

const InputFormStyle = {
  Container,

  Input,
  TextArea,
  Button,
};

export default InputFormStyle;
