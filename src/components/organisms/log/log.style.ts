import styled from "styled-components";

const Container = styled.section`
  width: 350px;
  height: 100%;

  border-right: 1px solid ${(props) => props.theme.color.gray};
  background-color: ${(props) => props.theme.color.white};
`;

const ButtonList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1px;

  width: 100%;
  height: 47px;

  border-bottom: 1px solid ${(props) => props.theme.color.gray};
  background-color: ${(props) => props.theme.color.gray};
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  flex: 1;

  padding: 15px 0;
  background-color: ${(props) => props.theme.color.white};
`;

const List = styled.ul`
  width: 100%;
  height: calc(100% - 47px);

  overflow-y: auto;

  li {
    position: relative;
  }
`;

const Item = styled.button`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: 15px 10px;

  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => props.theme.color.lightGray};
  }
`;

const SaveButton = styled.button`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);

  width: 24px;
  height: 24px;
`;

const TotalPrice = styled.p`
  margin-top: 5px;

  font-size: ${(props) => props.theme.font(14)};
  font-weight: 500;
  color: ${(props) => props.theme.color.darkGray};
`;

const LogStyle = {
  Container,
  ButtonList,
  Button,
  List,
  Item,
  SaveButton,
  TotalPrice,
};

export default LogStyle;
