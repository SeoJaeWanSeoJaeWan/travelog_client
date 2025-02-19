import styled from "styled-components";

const Container = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  z-index: 5;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 20px;
  height: 20px;

  border: none;
  background-color: transparent;

  color: ${(props) => props.theme.color.black};
  font-size: ${(props) => props.theme.font(16)};
`;

const CloseStyle = {
  Container,
};

export default CloseStyle;
