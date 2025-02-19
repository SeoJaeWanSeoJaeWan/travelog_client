import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translateY(calc(100% + 10px));
  z-index: 2;

  display: flex;
  gap: 5px;

  padding: 5px 10px;

  background-color: ${(props) => props.theme.color.white};
  border-radius: 5px;

  box-shadow: 0 0 5px 0 ${(props) => props.theme.color.shadow};
`;

const PinSelectorStyle = {
  Container,
};

export default PinSelectorStyle;
