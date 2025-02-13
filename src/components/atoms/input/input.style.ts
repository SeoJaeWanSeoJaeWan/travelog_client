import styled from "styled-components";

const InputStyle = styled.input`
  padding: 5px 10px;
  border-radius: 5px;

  border: 1px solid ${(props) => props.theme.color.black};
`;

export default InputStyle;
