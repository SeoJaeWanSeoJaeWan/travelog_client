import DayListStyle from "./dayList.style";
import { FaPlus } from "react-icons/fa6";
import ListLayout from "@/components/modelcules/listLayout";
import Drag from "@/components/atoms/drag";
import { DraggingProvider } from "@/hooks/utils/useDragging";
import { useState } from "react";

const Day = () => {
  const [state] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);

  return (
    <ListLayout title={"여행 제목"} price={100000} onDelete={() => {}}>
      <DraggingProvider>
        {state.map((value) => (
          <li key={value}>
            <Drag
              value={value.toString()}
              onChange={(value) => {
                console.log(value);
              }}
              onSubmit={() => {}}
            >
              <DayListStyle.Day>{value}</DayListStyle.Day>
            </Drag>
          </li>
        ))}
      </DraggingProvider>

      <li>
        <DayListStyle.Day $isCreateButton>
          <FaPlus />
        </DayListStyle.Day>
      </li>
    </ListLayout>
  );
};

export default Day;
