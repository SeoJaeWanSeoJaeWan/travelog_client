import SectionStyle from "@/components/atoms/section/section.style";
import styled from "styled-components";

const Container = styled(SectionStyle)`
  display: flex;
  flex-direction: column;

  & > div {
    padding: 0;
    padding-bottom: 5px;
  }
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
  min-height: 115px;

  padding: 5px 0;

  font-size: ${(props) => props.theme.font(14)};
  word-break: break-all;
`;

const TitleLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;

  width: 100%;
`;

const TotalPrice = styled.div`
  display: flex;
  align-items: center;

  width: fit-content;
  height: 28px;

  text-align: right;
  font-size: ${(props) => props.theme.font(14)};

  strong {
    font-weight: 600;
    font-size: ${(props) => props.theme.font(16)};
  }
`;

const DeleteButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 20px;
  height: 20px;

  color: ${(props) => props.theme.color.red};
`;

const IconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 90px;

  border-radius: 10px 10px 0 0;
  border: none;

  color: ${(props) => props.theme.color.gray};
`;

const Image = styled.img`
  width: 100%;
  height: 90px;

  border-radius: 10px 10px 0 0;
  border: none;

  object-fit: cover;
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
  IconBox,
  Image,
  TotalPrice,
  TitleLine,
  DeleteButton,
};

export default PinDetailStyle;
