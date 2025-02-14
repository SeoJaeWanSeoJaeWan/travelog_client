import DayListStyle from "./dayList.style";
import { FaPlus } from "react-icons/fa6";
import ListLayout from "@/components/modelcules/listLayout";
import Drag from "@/components/atoms/drag";
import { DraggingProvider } from "@/hooks/utils/useDragging";
import { useState } from "react";

interface DayListProps {
  handleStep: (step: number) => void;
}

const DayList = (props: DayListProps) => {
  const { handleStep } = props;
  const [state] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  const [className, setClassName] = useState("");
  const [index, setIndex] = useState(2);

  const handleNext = () => {
    if (className === "hide") handleStep(index);
  };

  return (
    <ListLayout
      title={"여행 제목"}
      price={100000}
      className={className}
      onDelete={() => {}}
      onClose={() => {
        setClassName("hide");
        setIndex(0);
      }}
      onAnimationEnd={handleNext}
    >
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
              <DayListStyle.Day
                onClick={() => {
                  setIndex(2);
                  setClassName("hide");
                }}
              >
                {value}
              </DayListStyle.Day>
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

export default DayList;
