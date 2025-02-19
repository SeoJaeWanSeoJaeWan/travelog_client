import styled from "styled-components";

const CommonInput = styled.input`
  padding: 5px 5px;
  border-radius: 5px;

  border: 1px solid ${(props) => props.theme.color.darkGray};
`;

export default CommonInput;
