import styled from "styled-components";

const Container = styled.div`
  position: relative;

  user-select: none;

  border-radius: 5px;
  overflow: hidden;

  transform: translate(0, 0);
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

const DragStyle = {
  Container,
  DragArea,
};

export default DragStyle;
