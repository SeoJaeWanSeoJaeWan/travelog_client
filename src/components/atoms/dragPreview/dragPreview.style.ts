import styled from "styled-components";

interface PreviewProps {
  $top: number;
  $left: number;
}

const Container = styled.div<PreviewProps>`
  position: fixed;
  top: ${(props) => props.$top}px;
  left: ${(props) => props.$left}px;

  width: 30px;
  height: 30px;

  z-index: 20;
  pointer-events: none;
`;

const DragPreviewStyle = {
  Container,
};

export default DragPreviewStyle;
