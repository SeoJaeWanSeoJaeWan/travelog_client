import styled, { css, keyframes } from "styled-components";

const boardOpen = keyframes`
    from {
        transform: translateX(calc(-100% ));
    }
    to {
        transform: translateX(0);
    }
`;

const boardClose = keyframes`
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(calc(-100% ));
    }
`;

interface ContainerProps {
  $isOpen: boolean;
}

const Container = styled.div<ContainerProps>`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;

  display: flex;

  width: auto;
  height: 100vh;

  transition: all 0.5s;

  ${(props) =>
    props.$isOpen
      ? css`
          animation: ${boardOpen} 0.5s forwards;
        `
      : css`
          animation: ${boardClose} 0.5s forwards;
        `}
`;

const SecondTab = styled.div`
  position: relative;
  z-index: 1;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ToggleButton = styled.button`
  position: absolute;
  top: 10%;
  right: 0;
  transform: translateX(100%);
  z-index: 2;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 20px;
  height: 50px;

  border: 1px solid ${(props) => props.theme.color.gray};
  border-left: none;
  background-color: ${(props) => props.theme.color.white};

  border-radius: 0 5px 5px 0;

  color: ${(props) => props.theme.color.gray};
`;

const BoardStyle = {
  Container,
  SecondTab,
  ToggleButton,
};

export default BoardStyle;
