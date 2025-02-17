import styled from "styled-components";

interface ContainerProps {
  $opacity: number;
}

const Container = styled.li<ContainerProps>`
  position: relative;

  user-select: none;

  border-radius: 5px;
  overflow: hidden;

  transform: translate(0, 0);
  opacity: ${(props) => props.$opacity};
`;

interface DragProps {
  $isDragging: boolean;
}

const DragArea = styled.div<DragProps>`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 20;

  display: ${(props) => (props.$isDragging ? "block" : "none")};

  width: 10px;
  height: 30px;

  &:last-child {
    right: 0;
    left: initial;
  }
`;

interface PreviewProps {
  $top: number;
  $left: number;
}

const Preview = styled.li<PreviewProps>`
  position: fixed;
  top: ${(props) => props.$top}px;
  left: ${(props) => props.$left}px;

  width: 30px;
  height: 30px;

  z-index: 20;
  pointer-events: none;
`;

const DragStyle = {
  Container,
  DragArea,
  Preview,
};

export default DragStyle;
