import Title from "@/components/atoms/title";
import DayStyle from "./day.style";
import LineStyle from "@/components/atoms/line/line.style";
import numberWithCommas from "@/utils/numberWithCommas";
import { FaPlus } from "react-icons/fa6";
import Close from "@/components/atoms/close";

const Day = () => {
  return (
    <DayStyle.Container>
      <Title as={"h3"} width={"90%"}>
        여행 제목
      </Title>

      <LineStyle />

      <DayStyle.TotalPrice>
        총 여행 경비 : <strong>{numberWithCommas(100000)}원</strong>
      </DayStyle.TotalPrice>

      <DayStyle.DayList>
        <li>
          <DayStyle.Day>1</DayStyle.Day>
        </li>
        <li>
          <DayStyle.Day>1</DayStyle.Day>
        </li>
        <li>
          <DayStyle.Day>1</DayStyle.Day>
        </li>
        <li>
          <DayStyle.Day>1</DayStyle.Day>
        </li>
        <li>
          <DayStyle.Day>1</DayStyle.Day>
        </li>
        <li>
          <DayStyle.Day>1</DayStyle.Day>
        </li>
        <li>
          <DayStyle.Day>1</DayStyle.Day>
        </li>
        <li>
          <DayStyle.Day>1</DayStyle.Day>
        </li>
        <li>
          <DayStyle.Day>1</DayStyle.Day>
        </li>
        <li>
          <DayStyle.Day>1</DayStyle.Day>
        </li>
        <li>
          <DayStyle.Day>1</DayStyle.Day>
        </li>
        <li>
          <DayStyle.Day>1</DayStyle.Day>
        </li>
        <li>
          <DayStyle.Day>1</DayStyle.Day>
        </li>
        <li>
          <DayStyle.Day>1</DayStyle.Day>
        </li>
        <li>
          <DayStyle.Day>1</DayStyle.Day>
        </li>
        <li>
          <DayStyle.Day>1</DayStyle.Day>
        </li>
        <li>
          <DayStyle.Day>1</DayStyle.Day>
        </li>
        <li>
          <DayStyle.Day>1</DayStyle.Day>
        </li>
        <li>
          <DayStyle.Day>1</DayStyle.Day>
        </li>
        <li>
          <DayStyle.Day>1</DayStyle.Day>
        </li>
        <li>
          <DayStyle.Day>1</DayStyle.Day>
        </li>
        <li>
          <DayStyle.Day>1</DayStyle.Day>
        </li>
        <li>
          <DayStyle.Day>1</DayStyle.Day>
        </li>
        <li>
          <DayStyle.Day>1</DayStyle.Day>
        </li>
        <li>
          <DayStyle.Day>1</DayStyle.Day>
        </li>
        <li>
          <DayStyle.Day>1</DayStyle.Day>
        </li>
        <li>
          <DayStyle.Day>1</DayStyle.Day>
        </li>
        <li>
          <DayStyle.Day>1</DayStyle.Day>
        </li>
        <li>
          <DayStyle.Day>1</DayStyle.Day>
        </li>
        <li>
          <DayStyle.Day>1</DayStyle.Day>
        </li>
        <li>
          <DayStyle.Day>1</DayStyle.Day>
        </li>
        <li>
          <DayStyle.Day>1</DayStyle.Day>
        </li>
        <li>
          <DayStyle.Day>1</DayStyle.Day>
        </li>
        <li>
          <DayStyle.Day>1</DayStyle.Day>
        </li>
        <li>
          <DayStyle.Day>1</DayStyle.Day>
        </li>
        <li>
          <DayStyle.Day>1</DayStyle.Day>
        </li>
        <li>
          <DayStyle.Day>1</DayStyle.Day>
        </li>
        <li>
          <DayStyle.Day>1</DayStyle.Day>
        </li>
        <li>
          <DayStyle.Day>1</DayStyle.Day>
        </li>
        <li>
          <DayStyle.Day>1</DayStyle.Day>
        </li>
        <li>
          <DayStyle.Day>1</DayStyle.Day>
        </li>
        <li>
          <DayStyle.Day>1</DayStyle.Day>
        </li>
        <li>
          <DayStyle.Day>1</DayStyle.Day>
        </li>
        <li>
          <DayStyle.Day>1</DayStyle.Day>
        </li>
        <li>
          <DayStyle.Day $isCreateButton>
            <FaPlus />
          </DayStyle.Day>
        </li>
      </DayStyle.DayList>

      <Close />
    </DayStyle.Container>
  );
};

export default Day;
