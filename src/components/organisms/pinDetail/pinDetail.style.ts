import SectionStyle from "@/components/atoms/section/section.style";
import styled from "styled-components";

const Container = styled(SectionStyle)`
  display: flex;
  flex-direction: column;

  height: 350px;

  padding: 0;
  padding-bottom: 5px;
`;

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  padding: 0 15px;
`;

const Description = styled.div`
  flex: 1;

  width: 100%;

  padding: 5px 0;

  font-size: ${(props) => props.theme.font(14)};
  word-break: break-all;
`;

const Image = styled.img`
  width: 100%;
  height: 90px;

  border-radius: 10px 10px 0 0;
  border: none;
`;

const PinBox = styled.div`
  position: absolute;
  top: 15px;
  left: 15px;
`;

const PinDetailStyle = {
  Container,
  Wrapper,
  PinBox,
  Description,
  Image,
};

export default PinDetailStyle;
