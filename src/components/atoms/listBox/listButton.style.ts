import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;

  width: 100%;
  height: 40px;
`;

const Button = styled.button`
  width: 70px;
  height: 30px;

  border: 1px solid ${(props) => props.theme.color.darkGray};
  border-radius: 5px;

  &:hover {
    border: 1px solid ${(props) => props.theme.color.primary};
    background-color: ${(props) => props.theme.color.primary};
    color: ${(props) => props.theme.color.white};
  }
`;

const ListButtonStyle = {
  Container,
  Button,
};

export default ListButtonStyle;
