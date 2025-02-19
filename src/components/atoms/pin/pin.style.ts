import styled from "styled-components";

interface ContainerProps {
  $width: string;
}

const Container = styled.span<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${(props) => props.$width};
  height: auto;
  aspect-ratio: 1/1;

  border-radius: 50%;
  background-color: ${(props) => props.theme.color.primary};

  color: ${(props) => props.theme.color.white};
`;

const PinStyle = {
  Container,
};

export default PinStyle;
