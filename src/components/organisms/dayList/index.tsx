import DayListStyle from "./dayList.style";
import { FaPlus } from "react-icons/fa6";
import ListLayout from "@/components/modelcules/listLayout";

const Day = () => {
  return (
    <ListLayout title={"여행 제목"} price={100000}>
      <li>
        <DayListStyle.Day>1</DayListStyle.Day>
      </li>

      <li>
        <DayListStyle.Day $isCreateButton>
          <FaPlus />
        </DayListStyle.Day>
      </li>
    </ListLayout>
  );
};

export default Day;
