import styled, { keyframes } from "styled-components";

const sectionShowAni = keyframes`
  0% {
    max-width:0;
    opacity: 0;

    margin-left: 0
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 1;
    max-width: 400px;
  
    margin-left: 10px;
  }
`;

const sectionHideAni = keyframes`
  0% {
    opacity: 1;
    max-width: 400px;
  }

  70% {
    margin-left: 10px;
  }

  100% {
    max-width: 0;
    opacity: 0;
    margin-left: 0;
  }
`;

const SectionStyle = styled.section`
  position: relative;

  width: 400px;
  max-width: 400px;

  margin-left: 10px;
  margin-top: 5px;

  border-radius: 10px;
  background-color: ${(props) => props.theme.color.white};

  box-shadow: 0 0 10px ${(props) => props.theme.color.shadow};
  overflow: hidden;

  animation: ${sectionShowAni} 0.5s forwards;

  &.hide {
    animation: ${sectionHideAni} 0.5s forwards;
  }

  > div {
    width: 400px;
    padding: 15px;
  }
`;

export default SectionStyle;
