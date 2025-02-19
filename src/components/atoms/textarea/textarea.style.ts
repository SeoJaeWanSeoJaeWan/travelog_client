import styled from "styled-components";

const CommonTextArea = styled.textarea`
  width: 100%;
  height: 100%;

  padding: 5px 5px;

  border: 1px solid ${(props) => props.theme.color.darkGray};
  border-radius: 5px;

  font-size: ${(props) => props.theme.font(14)};
  resize: none;
`;

export default CommonTextArea;
