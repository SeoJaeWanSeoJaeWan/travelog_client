import SectionStyle from "@/components/atoms/section/section.style";
import styled from "styled-components";

const Conatiner = styled(SectionStyle)`
  height: 165px;
`;

const PriceLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
`;

const TotalPrice = styled.p`
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

const List = styled.div`
  position: relative;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 5px;

  width: 100%;
  height: 65px;

  overflow-y: auto;

  margin-top: 10px;
`;

const ListLayoutStyle = {
  Conatiner,
  PriceLine,
  TotalPrice,
  DeleteButton,
  List,
};

export default ListLayoutStyle;
