import styled, { keyframes } from "styled-components";

const sectionShowAni = keyframes`
  from {
    opacity: 0;
    transform: scale(0)
  }

  to {
    opacity: 1;
    transform: scale(1)
  }
`;

const sectionHideAni = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }

  to {
    opacity: 0;
    transform: translateY(-100px);
  }
`;

const SectionStyle = styled.section`
  position: relative;

  width: 400px;

  margin-left: 10px;
  margin-top: 10px;
  padding: 15px;

  border-radius: 10px;
  background-color: ${(props) => props.theme.color.white};

  box-shadow: 0 0 10px ${(props) => props.theme.color.shadow};

  opacity: 0;
  transform: scale(0);

  animation: ${sectionShowAni} 0.4s cubic-bezier(0.25, 0.1, 0.3, 1.3) forwards;

  &.hide {
    animation: ${sectionHideAni} 0.4s cubic-bezier(0.25, 0.1, 0.3, 1.3) forwards;
  }
`;

export default SectionStyle;
