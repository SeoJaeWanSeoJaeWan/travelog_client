import styled from "styled-components";

const Pin = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 30px;
  height: 30px;

  border-radius: 50%;
  background-color: ${(props) => props.theme.color.primary};

  color: ${(props) => props.theme.color.white};
`;

const DayDetailStyle = {
  Pin,
};

export default DayDetailStyle;
