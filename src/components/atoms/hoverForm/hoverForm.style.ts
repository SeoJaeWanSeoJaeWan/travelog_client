import styled from "styled-components";

interface BackgroundProps {
  $radius?: string;
}

const Background = styled.button<BackgroundProps>`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;

  width: 100%;
  height: 100%;

  border-radius: ${(props) => props.$radius};
  background-color: ${(props) => props.theme.color.shadow};

  opacity: 0;
  transition: opacity 0.3s;
`;

const Container = styled.div`
  position: relative;

  width: 100%;
  height: auto;

  &:hover {
    ${Background} {
      opacity: 1;
    }
  }
`;

const HoverFormStyle = {
  Container,
  Background,
};

export default HoverFormStyle;
