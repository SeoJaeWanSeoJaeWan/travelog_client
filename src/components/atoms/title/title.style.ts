import styled from "styled-components";

const Container = styled.h1`
  width: 100%;

  font-size: ${(props) => props.theme.font(16)};
  font-weight: 500;
  text-align: left;

  color: ${(props) => props.theme.color.black};
`;

const TitleStyle = {
  Container,
};

export default TitleStyle;
