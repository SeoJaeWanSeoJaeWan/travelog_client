import styled from "styled-components";

interface ContainerProps {
  $width: string;
}

const Container = styled.h1<ContainerProps>`
  width: ${(props) => props.$width};

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
