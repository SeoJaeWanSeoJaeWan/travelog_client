import styled from "styled-components";

interface ContainerProps {
  $width: string;
}

const Container = styled.h1<ContainerProps>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;

  width: ${(props) => props.$width};
  height: 28px;

  font-size: ${(props) => props.theme.font(16)};
  font-weight: 500;
  text-align: left;
  word-break: break-all;

  color: ${(props) => props.theme.color.black};
`;

const TitleStyle = {
  Container,
};

export default TitleStyle;
