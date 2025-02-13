import SectionStyle from "@/components/atoms/section/section.style";
import styled from "styled-components";

const Conatiner = styled(SectionStyle)`
  height: 190px;

  margin-top: 10px;
`;

const TotalPrice = styled.p`
  font-size: ${(props) => props.theme.font(14)};

  strong {
    font-weight: 600;
    font-size: ${(props) => props.theme.font(16)};
  }
`;

const List = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 5px;

  width: 100%;
  height: 100px;

  overflow-y: auto;

  margin-top: 10px;
`;

const ListLayoutStyle = {
  Conatiner,
  TotalPrice,
  List,
};

export default ListLayoutStyle;
