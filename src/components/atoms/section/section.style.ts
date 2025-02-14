import styled from "styled-components";

const SectionStyle = styled.section`
  position: relative;

  width: 400px;

  margin-left: 10px;
  margin-top: 10px;
  padding: 15px;

  border-radius: 10px;
  background-color: ${(props) => props.theme.color.white};

  box-shadow: 0 0 10px ${(props) => props.theme.color.shadow};
`;

export default SectionStyle;
