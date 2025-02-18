import styled, { keyframes } from "styled-components";

const searchAni = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Container = styled.div`
  position: fixed;
  z-index: 1;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);

  width: 360px;
  height: 36px;

  animation: ${searchAni} 0.5s forwards;
`;

const Form = styled.form`
  width: 100%;
  height: 100%;

  border: 2px solid ${(props) => props.theme.color.black};
  border-radius: 50px;

  background-color: ${(props) => props.theme.color.white};

  overflow: hidden;
`;

const Input = styled.input`
  width: calc(100% - 36px);
  height: 100%;

  padding-left: 10px;

  border: none;
  outline: none;
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  right: 4px;
  transform: translateY(-50%);

  display: flex;
  justify-content: center;
  align-items: center;

  width: 32px;
  height: 32px;

  border: none;
  background-color: transparent;
`;

const Select = styled.ul`
  position: absolute;
  top: 46px;
  left: 0;

  width: 100%;
  padding: 5px 0;

  border: 2px solid ${(props) => props.theme.color.black};
  background-color: ${(props) => props.theme.color.white};

  border-radius: 10px;
`;

const Item = styled.button`
  padding: 5px 10px;

  width: 100%;
  height: 25px;

  font-size: ${(props) => props.theme.font(16)};
  text-align: left;

  &:hover {
    background-color: ${(props) => props.theme.color.lightGray};
  }
`;

const SearchStyle = {
  Container,
  Form,
  Input,
  Button,
  Select,
  Item,
};

export default SearchStyle;
