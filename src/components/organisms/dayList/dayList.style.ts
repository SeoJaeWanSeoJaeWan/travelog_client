import styled from "styled-components";

interface DayProps {
  $isCreateButton?: boolean;
}

const Day = styled.button<DayProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  width: 30px;
  height: 30px;

  border-radius: 5px;
  background-color: ${(props) =>
    props.$isCreateButton ? props.theme.color.gray : props.theme.color.primary};

  color: ${(props) => props.theme.color.white};
`;

const DayListStyle = {
  Day,
};

export default DayListStyle;
