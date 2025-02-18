import styled from "styled-components";

interface ContainerProps {
  $opacity: number;
}

const Container = styled.div<ContainerProps>`
  position: relative;

  user-select: none;

  overflow: hidden;

  transform: translate(0, 0);
  opacity: ${(props) => props.$opacity};
`;

const DragStyle = {
  Container,
};

export default DragStyle;
