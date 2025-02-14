import styled from "styled-components";

const AddPin = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 30px;
  height: 30px;

  border-radius: 50%;

  color: ${(props) => props.theme.color.white};
  background-color: ${(props) => props.theme.color.primary};
`;

const DayDetailStyle = {
  AddPin,
};

export default DayDetailStyle;
