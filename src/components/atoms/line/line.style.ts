import styled from "styled-components";

const LineStyle = styled.hr`
  width: 100%;
  height: 1px;

  margin: 5px 0;

  border: none;
  background-color: ${(props) => props.theme.color.gray};
`;

export default LineStyle;
