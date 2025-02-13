import styled from "styled-components";

const Container = styled.section`
  position: relative;

  width: 400px;

  margin-top: 10px;
  margin-left: 10px;

  padding: 15px;

  border-radius: 10px;
  background-color: ${(props) => props.theme.color.white};

  box-shadow: 0 0 10px ${(props) => props.theme.color.shadow};
`;

const TotalPrice = styled.p`
  font-size: ${(props) => props.theme.font(14)};

  strong {
    font-weight: 600;
    font-size: ${(props) => props.theme.font(16)};
  }
`;

const DayList = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 5px;

  width: 100%;
  height: 100px;

  overflow-y: auto;

  margin-top: 10px;
`;

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

const DayStyle = {
  Container,
  TotalPrice,
  DayList,
  Day,
};

export default DayStyle;
