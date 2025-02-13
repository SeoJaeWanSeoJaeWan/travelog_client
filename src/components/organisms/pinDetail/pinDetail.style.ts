import SectionStyle from "@/components/atoms/section/section.style";
import styled from "styled-components";

const Container = styled(SectionStyle)`
  height: 40%;

  padding-bottom: 5px;
`;

const UrlList = styled.ul`
  width: 100%;
  height: calc(100% - (120px + 11px + 40px));

  overflow-y: auto;

  a {
    display: block;
    font-size: ${(props) => props.theme.font(16)};
  }
`;

const Description = styled.p`
  width: 100%;

  margin-top: 5px;

  font-size: ${(props) => props.theme.font(14)};
  word-break: break-all;
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  right: -130px;

  width: 120px;
  height: 90px;

  background-color: ${(props) => props.theme.color.white};
  border-radius: 10px;
  box-shadow: 0 0 10px ${(props) => props.theme.color.shadow};
`;

const ButtonList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  width: 100%;
  height: 40px;
`;

const Button = styled.button`
  width: 70px;
  height: 30px;

  border: 1px solid ${(props) => props.theme.color.darkGray};
  border-radius: 5px;

  &:hover {
    background-color: ${(props) => props.theme.color.darkGray};
    color: ${(props) => props.theme.color.white};
  }
`;

const PinDetailStyle = {
  Container,
  Description,
  Image,
  UrlList,
  ButtonList,
  Button,
};

export default PinDetailStyle;
